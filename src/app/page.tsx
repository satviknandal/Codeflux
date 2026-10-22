import HomePage from "../views/HomePage";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("/");

export default function Page() {
  return <HomePage />;
}
