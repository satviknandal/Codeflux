import MobileAppServices from "../../../views/services/MobileAppServices";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("/services/mobileappservices");

export default function Page() {
  return <MobileAppServices />;
}
