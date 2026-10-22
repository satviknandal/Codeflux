import BlogsPage from "../../views/BlogsPage";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("/blogs");

export default function Page() {
  return <BlogsPage />;
}
