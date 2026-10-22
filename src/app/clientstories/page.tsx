import ClientStoriesPage from "../../views/ClientStoriesPage";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("/clientstories");

export default function Page() {
  return <ClientStoriesPage />;
}
