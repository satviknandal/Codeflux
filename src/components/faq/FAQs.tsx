import { useId, useState } from "react";


interface FAQ {
  question: string;
  answer: string;
}

interface FAQsProps {
  faqs: FAQ[];
  title: string;
  headingAs?: "h2" | "h3";
}

const FAQs = ({faqs,  title, headingAs: Heading = "h3"}: FAQsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const idPrefix = useId();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto">
      <Heading className="text-2xl md:text-4xl font-normal text-center text-[#063559] mt-0 mb-2 md:mb-12">
        {title}
      </Heading>

      <div className="mt-3 md:mt-6">
        {faqs.map((faq, index) => (
          <div
            className="border-b border-[#eadcff]"
            key={index}
          >
            <button
              className="w-full py-3 md:py-5 flex justify-between items-center bg-transparent border-none cursor-pointer text-left text-sm md:text-lg font-medium text-[#222]"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`${idPrefix}-${index}`}
            >
              <span className="font-medium text-[#222] text-sm md:text-base">{faq.question}</span>

              <span className="text-md md:text-2xl text-[#383839] leading-none">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answers stay in the HTML when collapsed so search engines can read them. */}
            <div id={`${idPrefix}-${index}`} hidden={openIndex !== index} className="pb-5 text-[#555] leading-[1.7]">
              <div className="m-0 text-xs md:text-base faqanswer" dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
