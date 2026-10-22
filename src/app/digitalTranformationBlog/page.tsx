import DigitalTransformationBlog from "../../views/blogs/DigitalTransformationBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/digitalTranformationBlog");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/digitalTranformationBlog")} />
      <DigitalTransformationBlog />
    </>
  );
}
