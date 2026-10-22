import MobileWebappBlog from "../../views/blogs/MobileWebappBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/mobileorwebappblog");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/mobileorwebappblog")} />
      <MobileWebappBlog />
    </>
  );
}
