import GenerativeAIBlog from "../../views/blogs/GenerativeAIBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/generativeaiblog");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/generativeaiblog")} />
      <GenerativeAIBlog />
    </>
  );
}
