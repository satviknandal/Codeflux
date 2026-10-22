import TestCaseManagementBlog from "../../views/blogs/TestCaseManagementBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/testcasemanagement");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/testcasemanagement")} />
      <TestCaseManagementBlog />
    </>
  );
}
