import AboutusPage from "../../views/about/AboutusPage";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("/aboutus");

export default function Page() {
  return <AboutusPage />;
}
