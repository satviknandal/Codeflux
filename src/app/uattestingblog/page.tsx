import UATTestingBlog from "../../views/blogs/UATTestingBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/uattestingblog");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/uattestingblog")} />
      <UATTestingBlog />
    </>
  );
}
