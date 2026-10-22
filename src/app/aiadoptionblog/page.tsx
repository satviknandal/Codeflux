import AIAdoptionBlog from "../../views/blogs/AIAdoptionBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/aiadoptionblog");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/aiadoptionblog")} />
      <AIAdoptionBlog />
    </>
  );
}
