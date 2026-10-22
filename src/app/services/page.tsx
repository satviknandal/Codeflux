import ServicesPage from "../../views/ServicesPage";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("/services");

export default function Page() {
  return <ServicesPage />;
}
