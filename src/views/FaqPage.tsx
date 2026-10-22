"use client";

import Link from "next/link";
import BreadCrumbNav from "../components/BreadcrumbNav";
import FAQs from "../components/faq/FAQs";
import { faqCategories } from "../shared/Faq";

const FaqPage = () => {
  return <div className="container-wrapper">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-[#07324a]">
      <BreadCrumbNav label="FAQ"/>
      <h1 className="m-0 text-2xl font-medium leading-tight text-[#07324a] md:text-4xl">
        Frequently Asked <span className="text-[#3798e3]">Questions</span>
      </h1>
      <p className="text-gray-500 text-sm md:text-base mt-3 mb-8">
        Answers to common questions about our services, pricing and how we work. Can't find what you're looking for? <Link href="/contactus" className="text-[#3798e3] hover:underline">Contact us</Link>.
      </p>

      <nav aria-label="FAQ categories" className="mb-12">
        <ul className="flex flex-wrap gap-2">
          {faqCategories.map((category) => (
            <li key={category.id}>
              <a href={`#${category.id}`} className="inline-block rounded-full border border-[#d4eafd] bg-[#f0f8ff] px-4 py-2 text-xs md:text-sm text-[#10405a] transition hover:bg-[#d4eafd]">
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-16">
        {faqCategories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-28">
            <FAQs title={category.title} faqs={category.faqs} headingAs="h2"/>
            <Link href={category.href} className="mt-4 inline-block text-sm font-semibold text-sky-600 hover:text-sky-700">
              Explore {category.title} →
            </Link>
          </section>
        ))}
      </div>
    </div>
  </div>
};

export default FaqPage;
