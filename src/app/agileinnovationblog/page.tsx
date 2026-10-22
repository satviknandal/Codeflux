import AgileInnovationBlog from "../../views/blogs/AgileInnovationBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/agileinnovationblog");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/agileinnovationblog")} />
      <AgileInnovationBlog />
    </>
  );
}
