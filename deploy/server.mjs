// Zero-dependency static server for the Next.js export (out/).
// Azure starts it with: node /home/site/wwwroot/server.mjs
// Locally: node deploy/server.mjs out
import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { dirname, extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { createGzip } from "node:zlib";

const here = dirname(fileURLToPath(import.meta.url));
const root = normalize(process.argv[2] ? join(process.cwd(), process.argv[2]) : here);
const port = Number(process.env.PORT) || 8080;
const selfName = "server.mjs";

const types = {
  ".html": "text/html; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
};
const compressible = new Set([".html", ".txt", ".js", ".css", ".json", ".webmanifest", ".xml", ".svg"]);

async function fileAt(path) {
  try {
    const info = await stat(path);
    return info.isFile() ? info : null;
  } catch {
    return null;
  }
}

function send(req, res, status, path, size) {
  const ext = extname(path).toLowerCase();
  const headers = {
    "Content-Type": types[ext] ?? "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
    // Hashed build assets never change; everything else is revalidated.
    "Cache-Control": req.url.startsWith("/_next/static/") ? "public, max-age=31536000, immutable" : "public, max-age=0, must-revalidate",
  };
  const gzip = compressible.has(ext) && /\bgzip\b/.test(req.headers["accept-encoding"] ?? "");
  if (gzip) {
    headers["Content-Encoding"] = "gzip";
    headers["Vary"] = "Accept-Encoding";
  } else {
    headers["Content-Length"] = size;
  }
  res.writeHead(status, headers);
  if (req.method === "HEAD") return res.end();
  const stream = createReadStream(path);
  (gzip ? stream.pipe(createGzip()) : stream).pipe(res);
}

createServer(async (req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" });
    return res.end();
  }

  const url = new URL(req.url, "http://localhost");
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    res.writeHead(400);
    return res.end();
  }

  const target = normalize(join(root, pathname));
  const insideRoot = target === root || target.startsWith(root + sep);
  const isSelf = target === join(root, selfName);

  if (insideRoot && !isSelf) {
    const file = await fileAt(target);
    if (file) return send(req, res, 200, target, file.size);

    const index = join(target, "index.html");
    const page = await fileAt(index);
    if (page) {
      // Canonical URLs end with a slash (trailingSlash: true in next.config.ts).
      if (!pathname.endsWith("/")) {
        res.writeHead(308, { Location: `${url.pathname}/${url.search}` });
        return res.end();
      }
      return send(req, res, 200, index, page.size);
    }
  }

  const notFound = join(root, "404.html");
  const fallback = await fileAt(notFound);
  if (fallback) return send(req, res, 404, notFound, fallback.size);
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not found");
}).listen(port, () => {
  console.log(`Serving ${root} on port ${port}`);
});
