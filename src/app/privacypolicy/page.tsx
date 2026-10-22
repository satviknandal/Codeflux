import PrivacyPolicyPage from "../../views/PrivacyPolicyPage";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("/privacypolicy");

export default function Page() {
  return <PrivacyPolicyPage />;
}
