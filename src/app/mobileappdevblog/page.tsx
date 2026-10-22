import MobileAppDevBlog from "../../views/blogs/MobileAppDevBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/mobileappdevblog");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/mobileappdevblog")} />
      <MobileAppDevBlog />
    </>
  );
}
