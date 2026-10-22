import MobileAppTestingBlog from "../../views/blogs/MobileAppTestingBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/mobileapptestingblog");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/mobileapptestingblog")} />
      <MobileAppTestingBlog />
    </>
  );
}
