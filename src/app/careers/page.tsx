import CareersPage from "../../views/CareersPage";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("/careers");

export default function Page() {
  return <CareersPage />;
}
