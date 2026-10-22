import TopAIServicesBlog from "../../views/blogs/TopAIServicesBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/topaiservicesblog");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/topaiservicesblog")} />
      <TopAIServicesBlog />
    </>
  );
}
