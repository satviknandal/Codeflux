import AIServices from "../../../views/services/AIServices";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata("/services/aiservices");

export default function Page() {
  return <AIServices />;
}
