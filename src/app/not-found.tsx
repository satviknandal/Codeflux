import type { Metadata } from "next";
import NotFoundPage from "../views/NotFoundPage";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundPage />;
}
