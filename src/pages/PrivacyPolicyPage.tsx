import BreadCrumbNav from '../components/BreadcrumbNav';

type PrivacyContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };
 interface PrivacySection {
  title: string;
  content: PrivacyContentBlock[];
}

const privacyPolicyContent: PrivacySection[] = [
  {
    title: "1. About This Policy",
    content: [
      {
        type: "paragraph",
        text: `Appolo Intelligence Pty Ltd (“Appolo”, “we”, “us”, or “our”) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and disclose personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).`,
      },
      {
        type: "paragraph",
        text: `This policy applies to information collected through our website www.appolo.com.au and in the course of providing our services.`,
      },
    ],
  },
  {
    title: "2. Information We Collect",
    content: [
      {
        type: "paragraph",
        text: "We may collect the following types of personal information:",
      },
      {
        type: "list",
        items: [
          "Name, email address, and phone number (submitted via contact forms)",
          "Business name and role (provided during enquiries or project discussions)",
          "Project requirements and other information you provide to us directly",
          "Technical data such as IP address, browser type, and pages visited (via analytics)",
        ],
      },
      {
        type: "paragraph",
        text: "We only collect information that is reasonably necessary for our business activities. You are not required to provide personal information to browse our website, though some features (such as contact forms) require it.",
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: [
      {
        type: "paragraph",
        text: "We use personal information to:",
      },
      {
        type: "list",
        items: [
          "Respond to your enquiries and provide quotes or proposals",
          "Deliver our software development and consulting services",
          "Communicate project updates and relevant information",
          "Improve our website and understand how visitors use it",
          "Comply with legal obligations",
        ],
      },
      {
        type: "paragraph",
        text: "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
      },
    ],
  },
  {
    title: "4. Disclosure of Information",
    content: [
      {
        type: "paragraph",
        text: "We may disclose your personal information to:",
      },
      {
        type: "list",
        items: [
          "Service providers who assist us in operating our business (e.g. cloud hosting, email platforms)",
          "Legal or regulatory authorities where required by law",
          "Professional advisers (lawyers, accountants) under confidentiality obligations",
        ],
      },
      {
        type: "paragraph",
        text: "Where we engage third-party service providers, we take reasonable steps to ensure they handle your information in accordance with Australian privacy law.",
      },
    ],
  },
  {
    title: "5. Cookies and Analytics",
    content: [
      {
        type: "paragraph",
        text: "Our website uses cookies and similar tracking technologies to understand visitor behaviour and improve the site experience. This may include tools such as Google Analytics. These tools collect anonymised usage data and do not identify you personally.",
      },
      {
        type: "paragraph",
        text: "You can disable cookies in your browser settings, though this may affect some website functionality.",
      },
    ],
  },
  {
    title: "6. Data Storage and Security",
    content: [
      {
        type: "paragraph",
        text: "We take reasonable technical and organisational measures to protect your personal information from loss, misuse, unauthorised access, or disclosure. Data is stored on secure servers, and access is restricted to authorised personnel only.",
      },
      {
        type: "paragraph",
        text: "No method of transmission over the internet is 100% secure. While we do our best to protect your data, we cannot guarantee absolute security.",
      },
    ],
  },
  {
    title: "7. Access and Correction",
    content: [
      {
        type: "paragraph",
        text: "You have the right to request access to the personal information we hold about you, and to ask us to correct it if it is inaccurate, incomplete, or out of date. To make a request, contact us using the details below. We will respond within a reasonable timeframe.",
      },
    ],
  },
  {
    title: "8. Retention",
    content: [
      {
        type: "paragraph",
        text: "We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by law. When information is no longer needed, we take reasonable steps to destroy or de-identify it.",
      },
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time. The current version will always be available on this page with a revised date. We encourage you to review it periodically.",
      },
    ],
  },
  {
    title: "10. Complaints",
    content: [
      {
        type: "paragraph",
        text: "If you believe we have handled your personal information in breach of the Australian Privacy Principles, please contact us in the first instance. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.",
      },
    ],
  },
  {
    title: "11. Contact",
    content: [
      {
        type: "paragraph",
        text: "For privacy enquiries or to exercise your rights, contact us at appolo.com.au/contact or email hello@appolo.com.au.",
      },
    ],
  },
];

const PrivacyPolicyPage = () => {
  return <main className='container-wrapper'>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-[#07324a]">
      <BreadCrumbNav label="Privacy Policy"/>
      <h1 className="m-0 text-2xl font-medium leading-tight text-[#07324a] md:text-4xl">
        Privacy <span className="text-[#3798e3]">Policy</span>
      </h1>
      <p className="text-gray-500 text-sm mb-12">
        Last updated: April 2026
      </p>

      <div className="prose prose-invert prose-gray max-w-none text-gray-600 space-y-10">
        {privacyPolicyContent.map((section) => (
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

export default PrivacyPolicyPage
