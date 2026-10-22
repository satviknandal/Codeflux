import ContactusPage from "../../views/ContactusPage";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("/contactus");

export default function Page() {
  return <ContactusPage />;
}
