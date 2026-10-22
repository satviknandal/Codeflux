import TestingServicesPage from "../../../views/services/TestingServicesPage";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("/services/testingservices");

export default function Page() {
  return <TestingServicesPage />;
}
