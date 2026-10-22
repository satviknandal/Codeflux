import FaqPage from "../../views/FaqPage";
import JsonLd from "../../components/seo/JsonLd";
import { faqPageJsonLd, pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata("/faq");

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <FaqPage />
    </>
  );
}
