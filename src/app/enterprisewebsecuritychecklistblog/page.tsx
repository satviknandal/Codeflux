import EnterpriseWebSecurityBlog from "../../views/blogs/EnterpriseWebSecurityBlog";
import JsonLd from "../../components/seo/JsonLd";
import { blogMetadata, blogPostingJsonLd } from "../../lib/seo";

export const metadata = blogMetadata("/enterprisewebsecuritychecklistblog");

export default function Page() {
  return (
    <>
      <JsonLd data={blogPostingJsonLd("/enterprisewebsecuritychecklistblog")} />
      <EnterpriseWebSecurityBlog />
    </>
  );
}
