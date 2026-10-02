
import BreadCrumbNav from '../components/BreadcrumbNav';

type TermsContentBlock =
  | {
      type: "paragraph";
      text: React.ReactNode;
    }
  | {
      type: "list";
      items: string[];
    };
 interface TermsSection {
  title: string;
  content: TermsContentBlock[];
}

const termsConditionsContent: TermsSection[] = [
  {
    title: "1. About These Terms",
    content: [
      {
        type: "paragraph",
        text: `These Terms of Service govern your use of the Codeflux website at www.codeflux.com.au and any services provided by Codeflux Pty Ltd (ABN available on request), a company registered in Western Australia, Australia.`,
      },
      {
        type: "paragraph",
        text: `By accessing our website or engaging our services, you agree to be bound by these terms. If you do not agree, please do not use our website or services.`,
      },
    ],
  },
  {
    title: "2. Services",
    content: [
      {
        type: "paragraph",
        text: "Codeflux provides Software development, Web development, AI Consulting, AI development, Mobile App Development, Cloud Solutions and Web Design UI/UX services. Specific terms for client engagements are set out in individual project agreements or statements of work, which take precedence over these general terms where there is any inconsistency.",
      }
    ],
  },
  {
    title: "3. Use of This Website",
    content: [
      {
        type: "paragraph",
        text: "You agree to use this website only for lawful purposes and in a manner that does not:",
      },
      {
        type: "list",
        items: [
          "Infringe the rights of any other person or entity",
          "Transmit any unsolicited or unauthorised advertising or promotional material",
          "Attempt to gain unauthorised access to any part of the website or its related systems",
          "Interfere with the normal operation of the website"
        ],
      }
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      {
        type: "paragraph",
        text: "All content on this website — including text, graphics, logos, images, and software — is owned by or licensed to Codeflux and is protected by Australian and international intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
      },
      {
        type: "paragraph",
        text: "For client projects, intellectual property ownership is governed by the terms of your individual project agreement. Our standard position is that all custom-built IP is transferred to the client upon final payment.",
      },
    ],
  },
  {
    title: "5. Limitation of Liability",
    content: [
      {
        type: "paragraph",
        text: "To the maximum extent permitted by law, Codeflux is not liable for any indirect, incidental, special, or consequential loss or damage arising from your use of this website or our services. Our total liability in any circumstance is limited to the amount paid by you for the services giving rise to the claim.",
      },
      {
        type: "paragraph",
        text: "Nothing in these terms excludes rights that cannot be excluded under the Australian Consumer Law, including consumer guarantees that apply to services.",
      },
    ],
  },
  {
    title: "6. Third-Party Links",
    content: [
      {
        type: "paragraph",
        text: "Our website may contain links to third-party websites. These are provided for your convenience only. We do not control those sites and are not responsible for their content or privacy practices. Linking does not imply our endorsement.",
      }
    ],
  },
  {
    title: "7. Privacy",
    content: [
      {
        type: "paragraph",
        text: "Your use of this website is also governed by our Privacy Policy, which is incorporated into these terms by reference.",
      },
    ],
  },
  {
    title: "8. Governing Law",
    content: [
      {
        type: "paragraph",
        text: "These terms are governed by the laws of Western Australia, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of Western Australia.",
      },
    ],
  },
  {
    title: "9. Changes to These Terms",
    content: [
      {
        type: "paragraph",
        text: "We may update these terms from time to time. The current version will always be available on this page with a revised date. Continued use of the website after changes constitutes acceptance of the updated terms.",
      },
    ],
  },
  {
    title: "10. Contact",
    content: [
    {
      type: "paragraph",
      text: (
        <>
          For questions about these term, contact us at{" "}
          <a
            href="/contactus"
            className="text-[#3692ff] hover:underline"
          >
            codeflux.com.au/contactus
          </a>{" "}
          or email{" "}
          <a
            href="mailto:sales@codeflux.com.au"
            className="text-[#3692ff] hover:underline"
          >
            sales@codeflux.com.au
          </a>
          .
        </>
      ),
    },
  ],
  },
];

const TermsofServicePage = () => {
  return <main className='container-wrapper'>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-[#07324a]">
      <BreadCrumbNav label="Terms of Service"/>
      <h1 className="m-0 text-2xl font-medium leading-tight text-[#07324a] md:text-4xl">
        Terms of <span className="text-[#3798e3]">Service</span>
      </h1>
      <p className="text-gray-500 text-sm mb-12">
        Last updated: April 2026
      </p>

      <div className="prose prose-invert prose-gray max-w-none text-gray-600 space-y-10">
        {termsConditionsContent.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-headline font-bold text-gray-700 mb-3">
              {section.title}
            </h2>

            {section.content.map((block, index) => {
              if (block.type === "paragraph") {
                return <p key={index} className="mt-3 first:mt-0">{block.text}</p>;
              }

              return (
                <ul
                  key={index}
                  className="list-disc list-inside mt-3 space-y-2 text-gray-700"
                >
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            })}
          </section>
        ))}
      </div>
    </div>  
    </main>
}

export default TermsofServicePage

