import InfraMigrationBlog from "../../views/blogs/InfraMigrationBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/inframigrationblog");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/inframigrationblog")} />
      <InfraMigrationBlog />
    </>
  );
}
