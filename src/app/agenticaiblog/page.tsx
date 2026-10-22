import AgenticAIBlog from "../../views/blogs/AgenticAIBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/agenticaiblog");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/agenticaiblog")} />
      <AgenticAIBlog />
    </>
  );
}
