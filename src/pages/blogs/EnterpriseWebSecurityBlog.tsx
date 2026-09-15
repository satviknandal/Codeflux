import { AsteriskIcon, CheckIcon, CircleDotIcon, CloudIcon, CrossIcon, DatabaseArrowUpIcon, DotIcon, HardDriveIcon, IdCardIcon, InfoIcon, UserRoundCogIcon, XIcon } from "lucide-react";
import "../../blog.css";
import BlogsAside from "../../components/blogs/BlogsAside";
import BlogSection from "../../components/blogs/BlogSection";
import BlogsHeader from "../../components/blogs/BlogsHeader";
import Table from "../../components/shared/Table";
import securedevops from "../../assets/blogs/secure-devsecops.svg";

const EnterpriseWebSecurityBlog = () => {

  const items = [
      {
          label: 'Enterprise Portal Security',
          link: 'enterprise-portal-security'
      },
      {
          label: 'Enterprise Web Portal Security Checklist at a Glance',
          link: 'enterprise-security-checklist'
      },
      {
          label: 'Secure Identity and Authentication',
          link: 'secure-identity-authenticate'
      },
      {
          label: 'Implement Strong Access Control and API Security',
          link: 'access-control-api-security'
      },
      {
          label: 'Protect Sensitive Portal Data',
          link: 'protect-sesnsitive-data'
      },
      {
          label: 'Build Security Into Development and DevSecOps',
          link: 'security-dev-devops'
      },
      {
          label: 'Secure Infrastructure, Monitoring, and Incident Response',
          link: 'secure-monitoring-incident'
      },
      {
          label: 'Map Portal Security to the Right Frameworks and Regulations',
          link: 'security-regualtions'
      },
      {
          label: 'Keep Security Evidence That Proves Controls Work',
          link: 'security-evidence'
      },
      {
          label: 'Use a Security Gate Before Enterprise Portal Launch',
          link: 'security-gate'
      },
      {
          label: 'Common Enterprise Portal Security Mistakes',
          link: 'security-mistakes'
      },
      {
          label: 'Conclusion',
          link: 'conclusion'
      }
  ];

  const commonMistakes = [
      {
          label: 'SSO without strong MFA',
          desc: 'Centralized login does not remove account-takeover risk.'
      },
      {
          label: 'Front-end-only authorization',
          desc: 'Hidden buttons do not protect the underlying API.'
      },
      {
          label: 'No cross-tenant testing',
          desc: 'Multi-tenant portals must actively test tenant boundaries.'
      },
      {
          label: 'Hardcoded secrets',
          desc: 'API keys and credentials should use controlled secrets management.'
      },
      {
          label: 'Sensitive data in logs',
          desc: 'Logs should help investigations without exposing credentials or unnecessary data.'
      },
      {
          label: 'Compliance as a one-time project',
          desc: 'concAccess, software, integrations, and risks keep changing after launch.lusion'
      }
  ];

  const securityPractices = [
      { label: "SSO trust settings and redirect URIs are verified" },
      { label: "MFA protects privileged and high-risk workflows" },
      { label: "RBAC permissions are tested server-side" },
      { label: "Cross-tenant access tests pass" },
      { label: "API object and function authorization is verified" },
      { label: "Sensitive data is encrypted and masked appropriately" },
      { label: "Sessions and token lifetimes match approved policy" },
      { label: "Secrets are absent from source code and build logs" },
      { label: "Critical and high vulnerabilities meet patch SLA" },
      { label: "SAST, DAST, SCA, and required pentesting are complete" },
      { label: "Security events reach monitoring and alerting systems" },
      { label: "Log retention is configured and searchable" },
      { label: "Backup restoration has been demonstrated" },
      { label: "Incident-response ownership and contacts are current" },
      { label: "Applicable framework and regulatory controls are mapped" },
      { label: "Security exceptions have owner, expiry date, and approval" }
  ];

  const secureIdentity= [
    { label: "Disable terminated-user access the same business day" },
    { label: "Review privileged identities every 90 days" },
    { label: "Review all user access at least every 6 months" },
    { label: "Keep approval and review evidence for audit" }
  ];

  const sensitivePortalData = [
    { label: "Use HTTPS/TLS for all authenticated traffic" },
    { label: "Encrypt sensitive data at rest where risk requires it" },
    { label: "Separate key access from application-data access" },
    { label: "Mask sensitive values in interfaces and logs" },
    { label: "Define retention and deletion by data category" },
    { label: "Validate, scan, and isolate untrusted file uploads" }
  ];

  const securityEvidenceHeaders = [
    "Control",
    "Useful Evidence",
    "Suggested Refresh"
  ];

  const securityEvidenceData = [
    [ 
      "MFA / SSO",
      "Identity-provider policy, federation configuration, test result",
      "After change + quarterly review"
    ],
    [
      "RBAC",	
      "Role-permission matrix, approvals, access-review records",
      "Quarterly privileged / 6-month all users"
    ],
    [
      "Encryption",
      "TLS settings, key-management configuration, rotation records",
      "After change + annual review"
    ],
    [
      "Security Testing",
      "SAST, DAST, SCA, pentest, remediation and retest records",
      "Each release cycle / risk-based"
    ],
    [
      "Logging",
      "SIEM configuration, alert rules, retained audit events",
      "Continuous + periodic validation"
    ],
    [
      "Backups",
      "Backup policy, protected-storage configuration, restore result",
      "At least twice yearly"
    ],
    [
      "Incident Response",
      "Response plan, contact tree, tabletop and incident records",
      "At least annually"
    ]
  ];

  const securityGateHeaders = [
    "Control",
    "Starting Target",
    "When to Tighten It"
  ];

  const securityGateData = [
   [
      "Privileged session inactivity",
      "15 minutes or less",
      "Financial, administrative, or highly sensitive workflows"
    ],
    [
      "API access token",
      "10–15 minutes",
      "High-impact scopes or elevated privileges"
    ],
    [
      "Privileged access review",
      "Every 90 days",
      "Immediately after role or organization changes"
    ],
    [
      "All-user access review",
      "At least every 6 months",
      "More often for regulated or high-turnover environments"
    ],
    [
      "Security log retention",
      "12 months; 90 days immediately searchable",
      "Longer when law, contracts, or investigations require it"
    ],
    [
      "Critical / High patches",
      "72 hours / 14 days",
      "Critical actively exploited issues: 24 hours"
    ]
  ];

  const devSecOpsHeaders = [
    "Severity",
    "Portal Patch SLA",
    "Escalation Rule"
  ];

  const devSecOpsData = [
   [
      "Critical",
      "72 hours",
      "24 hours when actively exploited or internet-exposed"
    ],
    [
      "High",
      "14 days",
      "Prioritize authentication, RCE, and data-exposure paths"
    ],
    [
      "Medium",
      "30 days",
      "Track to the owning team and release"
    ],
    [
      "Low",
      "90 days",
      "Fix through normal maintenance"
    ]
  ];

  
  
  const securityRegulationsHeaders = [
    "Framework or Rule",
    "When It May Be Relevant",
    "Portal Security Focus"
  ];

  const securityRegulationsData = [
   [
      "SOC 2 via AICPA",
      "SaaS and service organizations",
      "Controls relevant to security, availability, processing integrity, confidentiality, and privacy"
    ],
    [
      "ISO/IEC 27001:2022",
      "Organizations operating or certifying an ISMS",
      "Risk-based information-security management, governance, and continual improvement"
    ],
    [
      "NIST SP 800-63-4",
      "Identity programs and environments using formal digital-identity assurance guidance",
      "Identity proofing, authentication, authenticator management, and federation"
    ],
    [
      "NIST Cybersecurity Framework (CSF) 2.0",
      "Organizations structuring a broader cybersecurity program",
      "Govern, Identify, Protect, Detect, Respond, and Recover outcomes"
    ],
    [
      "PCI DSS",
      "Systems storing, processing, transmitting, or affecting payment-account data",
      "Payment-data protection, access control, vulnerability management, logging, and testing"
    ],
    [
      "GDPR",
      "Personal data within applicable EU/EEA scope",
      "Lawful processing, minimization, security, retention, rights, and breach obligations"
    ],
    [
      "HIPAA Security Rule",
      "Applicable U.S. regulated entities and business associates handling ePHI",
      "Administrative, physical, and technical safeguards for ePHI"
    ],
    [
      "WCAG 2.2",
      "Accessibility requirements, policies, and procurement standards",
      "Accessible navigation, forms, authentication, focus, target size, and interaction"
    ]
  ];

  const enterpriseWebPortalSecurityHeaders = [
    "Security Area",
    "Key Controls",
    "Priority"
  ];

  const enterpriseWebPortalSecurityData = [
   [
      "Identity",
      "SSO, MFA, SCIM, secure user lifecycle",
      "Critical"
    ],
    [
      "Access Control",
      "RBAC, least privilege, tenant isolation",
      "Critical"
    ],
    [
      "API Security",
      "Authentication, authorization, rate limiting",
      "Critical"
    ],
    [
      "Data Protection",
      "TLS, encryption at rest, key management",
      "Critical"
    ],
    [
      "Application Security",
      "OWASP Top 10, OWASP ASVS, SAST, DAST, dependency scanning",
      "High"
    ],
    [
      "Monitoring",
      "Audit logs, SIEM, alerts, defined retention",
      "High"
    ],
    [
      "Compliance",
      "SOC 2, ISO/IEC 27001, GDPR, HIPAA, PCI DSS",
      "Depends on portal"
    ]
  ];


  
  


  const RenderContentBody = () => {
    return <div className="blog-body w-[75%]">
      <BlogSection
        id="enterprise-portal-security"
        title="Enterprise Portal Security"
        first
      >
        <p className="text-gray-600 mb-6">Enterprise web portals give customers, employees, vendors, and partners authenticated access to sensitive business data, APIs, documents, payments, and internal workflows. That makes portal security a broader responsibility than standard website protection.</p>
        <p className="text-gray-600 mb-6">A secure portal needs strong identity controls, server-side authorization, API protection, encryption, monitoring, secure development practices, and the right compliance controls from the start.</p>
        <p className="text-gray-600 mb-6 font-bold text-lg">Key Takeaways</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex w-[49%] gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <AsteriskIcon width={30} height={30} />
            <p className="text-sm"><strong>Identity comes first.</strong> Use SSO, MFA, secure provisioning, and fast deprovisioning for enterprise users.</p>
          </div>
          <div className="flex w-[49%] gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <AsteriskIcon width={30} height={30} />
            <p className="text-sm"><strong>Authorization must be server-side.</strong> RBAC, least privilege, and tenant isolation should apply to every sensitive action and API request.</p>
          </div>
          <div className="flex w-[49%] gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <AsteriskIcon width={30} height={30} />
            <p className="text-sm"><strong>Security must be continuous.</strong> SAST, DAST, dependency scanning, logging, and remediation should be built into delivery.</p>
          </div>
          <div className="flex w-[49%] gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <AsteriskIcon width={30} height={30} />
            <p className="text-sm"><strong>Compliance depends on scope.</strong> SOC 2, ISO/IEC 27001, GDPR, HIPAA, PCI DSS, NIST CSF 2.0, or WCAG 2.2 may apply depending on the portal and data.</p>
          </div>
        </div>
      </BlogSection>
      <BlogSection
        id="enterprise-security-checklist"
        title="Enterprise Web Portal Security Checklist at a Glance"
      >
        <p>Use this quick view to prioritize the controls that matter most before moving into detailed testing.</p>
        <Table
          headers={enterpriseWebPortalSecurityHeaders}
          data={enterpriseWebPortalSecurityData}
          columnWidths={["30%", "50%", "20%"]}
        />
      </BlogSection>
      <BlogSection
        id="secure-identity-authenticate"
        title="Secure Identity and Authentication"
      >
        <p className="text-gray-600 mb-6">Identity is the first security boundary. Centralize authentication where appropriate, reduce local credentials, and make privileged accounts harder to compromise. The NIST SP 800-63-4 Digital Identity Guidelines provide a useful reference for identity proofing, authentication, and federation.</p>
        <div className="flex gap-2 mb-4">
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <CloudIcon width={20} height={20} />
            <label className="text-lg font-bold">Single Sign-On</label>
            <p className="text-sm">Use SAML or OpenID Connect with the enterprise identity provider. Validate every SSO response and apply separate authorization checks.</p>
          </div>
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <HardDriveIcon width={20} height={20} />
            <label className="text-lg font-bold">Multi-Factor Authentication</label>
            <p className="text-sm">Require MFA for privileged and high-impact roles. Use step-up authentication before sensitive actions.</p>
          </div>
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <InfoIcon width={20} height={20} />
            <label className="text-lg font-bold">User Lifecycle</label>
            <p className="text-sm">Automate account provisioning and removal. Disable former users promptly and assign owners to service accounts.</p>
          </div>
        </div>
        <p className="text-gray-600 mb-6 font-bold text-lg">Set a Measurable Identity Review Cadence</p>
        <p className="text-gray-600 mb-6">Review privileged accounts quarterly and review all user accounts and related access at least every six months. The six-month interval also aligns with PCI DSS access-review requirements for in-scope environments. Recheck access immediately after role changes, mergers, vendor offboarding, or major application changes.</p>
        <div className="flex flex-row flex-wrap gap-2 mb-8">
        {secureIdentity && secureIdentity.length > 0 && secureIdentity.map((mis, index) => {
          return <div key={index} className="flex gap-4 items-start w-[49%] bg-white border border-[#d9ece6] p-3 rounded-lg">
            <span className="self-start bg-[#ecf8f4] p-1.5 rounded-md text-[#2b8a73] font-bold">
              <CheckIcon width={12} height={12} />
            </span>
            <div className="flex flex-col">
              <p className="text-sm mb-1 text-gray-700">{mis.label}</p>
            </div>
          </div>
        })}
       </div>
      </BlogSection>
      <BlogSection
        id="access-control-api-security"
        title="Implement Strong Access Control and API Security"
      >
        <p className="text-gray-600 mb-6">Authentication confirms who the user is. Authorization determines what that user can see or change. Enterprise portals must enforce both on trusted server-side systems because browser controls, hidden buttons, and client-side role checks can be bypassed.</p>
        
        <div className="flex gap-2 mb-4">
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <CloudIcon width={20} height={20} />
            <label className="text-lg font-bold">RBAC and Least Privilege</label>
            <p className="text-sm">Start with a documented role-permission matrix. Grant only the actions and data each role needs. Add attributes such as department, organization, ownership, region, or data sensitivity when role-based access alone cannot express the rule safely.</p>
          </div>
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <HardDriveIcon width={20} height={20} />
            <label className="text-lg font-bold">Tenant Isolation</label>
            <p className="text-sm">Verify tenant ownership for APIs, records, files, exports, search, caches, queues, and background jobs. Use server-derived tenant context where possible instead of trusting a tenant identifier submitted by the browser.</p>
          </div>
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <InfoIcon width={20} height={20} />
            <label className="text-lg font-bold">API Authorization</label>
            <p className="text-sm">Authenticate protected APIs and enforce object-level and function-level authorization on every sensitive request. Apply the same checks to REST, GraphQL, webhooks, mobile endpoints, file downloads, and internal APIs exposed through the portal.</p>
          </div>
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <InfoIcon width={20} height={20} />
            <label className="text-lg font-bold">Abuse Protection</label>
            <p className="text-sm">Rate-limit login, password reset, OTP, search, export, invitation, and expensive API operations. Add tighter per-user or per-tenant controls where one account could otherwise consume shared capacity or enumerate large amounts of data.</p>
          </div>
        </div>
        <p className="text-gray-600 mb-6 font-bold text-lg">Test Authorization as a Matrix</p>
        <p className="text-gray-600 mb-6">For each sensitive function, test the same request as an unauthenticated user, a normal user, a privileged user, and a user from another tenant. Then test direct object references and parameter changes. Include bulk actions, exports, archived records, file identifiers, and administrative endpoints because these paths often bypass normal interface restrictions.</p>
        <p className="text-gray-600 my-6 bg-amber-50 p-4 rounded-md border border-amber-100"><strong>Simple test:</strong> changing a customer ID, invoice ID, tenant ID, file ID, or resource ID in a request must never expose or modify data that the current user is not authorized to access.</p>
      </BlogSection>
      <BlogSection
        id="protect-sesnsitive-data"
        title="Protect Sensitive Portal Data"
      >
        <p className="text-gray-600 mb-6">Enterprise portals often process personal, financial, healthcare, and confidential business information. Protect this data throughout its lifecycle with encryption, access controls, retention rules, and secure session handling.</p>
        <p className="text-gray-600 mb-6 text-lg font-bold">Classify and Minimize the Data</p>
        <p className="text-gray-600 mb-6">Classify data by sensitivity and collect only what each workflow needs. Keep sensitive values out of logs, test systems, analytics, and notifications unless properly protected.</p>
        <div className="flex flex-row flex-wrap gap-2 mb-8">
          {sensitivePortalData && sensitivePortalData.length > 0 && sensitivePortalData.map((mis, index) => {
            return <div key={index} className="flex gap-4 items-start w-[49%] bg-[#ffffffd1] border border-[#e5ddf7] p-3 rounded-lg">
              <span className="self-start bg-[#f2eeff] p-1.5 rounded-md text-[#7455c8] font-bold">
                <CheckIcon width={12} height={12} />
              </span>
              <div className="flex flex-col">
                <p className="text-sm mb-1 text-gray-700">{mis.label}</p>
              </div>
            </div>
          })}
        </div>
        <p className="text-gray-600 mb-6 text-lg font-bold">Protect Encryption Keys and Secrets</p>
        <p className="text-gray-600 mb-6">Store keys and API secrets in a managed key or secrets system. Restrict access, record key operations, and rotate credentials after suspected exposure.</p>
        <p className="text-gray-600 mb-6 text-lg font-bold">Use Explicit Session and Token Lifetimes</p>
        <p className="text-gray-600 mb-6">As a starting baseline, set standard idle sessions to 15–30 minutes and privileged sessions to 5–15 minutes. Keep the absolute browser session near 8 hours or shorter based on risk. OWASP Session Management guidance and NIST SP 800-63B-4 provide risk-based timeout and reauthentication guidance.</p>
        <p className="text-gray-600 mb-6">Set API access tokens to about 10–15 minutes. Rotate refresh tokens, revoke them after logout or risk events, and limit every token to the minimum required scope.</p>
        <p className="text-gray-600 mb-6 text-lg font-bold">Control Retention, Deletion, and File Handling</p>
        <p className="text-gray-600 mb-6">Assign each data category an owner, retention period, and deletion method. Validate and scan uploads before storage, then confirm the user has permission before releasing any file.</p>
      </BlogSection>
      <BlogSection
        id="security-dev-devops"
        title="Build Security Into Development and DevSecOps"
      >
        <p className="text-gray-600 mb-6">Security should be part of delivery rather than a one-time check before launch. Use the OWASP Top 10 to keep major web risks visible, but use the OWASP Application Security Verification Standard (ASVS) when the team needs detailed requirements that can be designed, tested, and verified.</p>
        <img src={securedevops}/>
        <p className="text-gray-600 mb-6 font-bold text-lg">Use Security Gates That Block Risky Releases</p>
        <p className="text-gray-600 mb-6">Run secret scanning and dependency checks on every change. Run SAST during build and DAST against a deployed test environment. Require manual security review for authentication, authorization, cryptography, payment, tenant-isolation, and other high-risk changes. A finding should have an owner, severity, due date, and retest result.</p>
        <p></p>
        <Table
            headers={devSecOpsHeaders}
            data={devSecOpsData}
            columnWidths={["20%", "30%", "50%"]}
          />
        <p className="text-gray-600 mb-6">These are practical internal targets and can be tightened by risk. For payment-card environments, PCI DSS requires applicable critical or high-security patches to be installed within one month of release, so the portal SLA should never weaken an applicable regulatory or contractual requirement.</p>
        <p className="text-gray-600 mb-6 font-bold text-lg">Software Supply Chain Controls</p>
        <div className="flex gap-2 mb-4">
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <CloudIcon width={20} height={20} />
            <label className="text-lg font-bold">Dependency Visibility</label>
            <p className="text-sm">Track direct and transitive libraries, remove unsupported packages, and know which services contain a vulnerable component before an incident forces the search.</p>
          </div>
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <HardDriveIcon width={20} height={20} />
            <label className="text-lg font-bold">SCA and SBOM</label>
            <p className="text-sm">Use software-composition analysis for known issues and maintain an SBOM for important releases so remediation can be scoped quickly.</p>
          </div>
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <InfoIcon width={20} height={20} />
            <label className="text-lg font-bold">Pipeline Security</label>
            <p className="text-sm">Protect CI/CD credentials, repositories, runners, build systems, deployment approvals, package registries, and release artifacts from unauthorized change.</p>
          </div>
        </div>
        <p></p>
        <p></p>
      </BlogSection>
      <BlogSection
        id="secure-monitoring-incident"
        title="Secure Infrastructure, Monitoring, and Incident Response"
      >
        <p className="text-gray-600 mb-6">Application security cannot compensate for exposed infrastructure, weak cloud permissions, missing monitoring, or an untested recovery plan. Treat the portal runtime, network paths, cloud identities, secrets, backups, and observability stack as part of the same security boundary.</p>
        <div className="flex gap-2 mb-4">
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <CloudIcon width={20} height={20} />
            <label className="text-lg font-bold">Cloud & Hosting</label>
            <p className="text-sm">Separate production from lower environments. Restrict administrative access, remove public exposure that is not required, harden images and services, and use WAF or DDoS controls where the threat model supports them. Monitor drift from approved configurations.</p>
          </div>
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <HardDriveIcon width={20} height={20} />
            <label className="text-lg font-bold">Backups & Recovery</label>
            <p className="text-sm">Protect backups with separate credentials and restricted deletion rights. Define RPO and RTO targets for critical portal services. Test restoration at least twice a year, and more often for systems where recovery time is business-critical.</p>
          </div>
          <div className="flex flex-col gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
            <InfoIcon width={20} height={20} />
            <label className="text-lg font-bold">Incident Response</label>
            <p className="text-sm">Document who detects, contains, investigates, communicates, recovers, and approves return to service. Run a tabletop exercise at least annually and after material architecture changes. Include identity compromise, cross-tenant exposure, ransomware, and credential leakage scenarios.</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-md mb-8 radialgradient text-white">
          <p className="mb-6 font-bold text-lg">Log the Events That Matter</p>
          <p className="mb-6">Security logs should support investigation without becoming a new store of passwords, tokens, secrets, or unnecessary personal data. Capture identity events, authorization failures, privileged changes, sensitive exports, configuration changes, and security-control failures with synchronized timestamps.</p>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 items-start w-[49%] bg-white/20 border border-[#d9ece6]/10 p-3 rounded-lg">
              <IdCardIcon width={20} height={20} />
              <label className="font-bold">Identity Events</label>
              <p className="text-sm mb-1 text-white">Logins, failures, resets, MFA enrollment and recovery changes.</p>
            </div>
            <div className="flex flex-col gap-2 items-start w-[49%] bg-white/20 border border-[#d9ece6]/1 p-3 rounded-lg">
              <UserRoundCogIcon width={20} height={20} />
              <label className="font-bold">Privileged Changes</label>
              <p className="text-sm mb-1 text-white">Admin actions, role changes, access grants, security settings.</p>
            </div>
            <div className="flex flex-col gap-2 items-start w-[49%] bg-white/20 border border-[#d9ece6]/1 p-3 rounded-lg">
              <DatabaseArrowUpIcon width={20} height={20} />
              <label className="font-bold">Data Activity</label>
              <p className="text-sm mb-1 text-white">Sensitive exports, high-risk transactions, unusual cross-tenant attempts.</p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 font-bold text-lg">Define Log Retention Before an Incident</p>
        <p className="text-gray-600 mb-6">Use 12 months of security-log retention as a strong enterprise baseline, with the most recent 90 days immediately searchable. This also matches the audit-log retention pattern in PCI DSS for applicable environments. Keep longer only when law, contracts, investigations, or business risk justify it, and apply privacy and deletion controls to the log store itself.

</p>
      </BlogSection>
      <BlogSection
        id="security-regualtions"
        title="Map Portal Security to the Right Frameworks and Regulations"
      >
        <p className="text-gray-600 mb-6">Not every framework applies to every portal. Scope depends on the organization, users, industry, jurisdiction, contracts, and the data being processed. Start with applicability, then map each requirement to a portal control, owner, test method, and evidence source.</p>
        <Table
          headers={securityRegulationsHeaders}
          data={securityRegulationsData}
          columnWidths={["30%", "40%", "40%"]}
        />
        <p className="text-gray-600 mb-6 font-bold text-lg">Separate Security Standards From Legal Applicability</p>
        <p>OWASP Top 10, NIST CSF 2.0, and ISO/IEC 27001 can guide security design, but they do not automatically become legal obligations for every portal. GDPR, HIPAA, and PCI DSS applicability depends on specific processing and organizational facts. SOC 2 is an attestation framework rather than a product certification. Keep legal interpretation with qualified counsel or compliance owners, while engineering maps the resulting obligations to technical controls.</p>
        <p className="text-gray-600 my-6 font-bold text-lg">Create a Control-to-Evidence Map</p>
        <p>For every applicable requirement, record the control owner, system scope, implementation, test procedure, frequency, evidence location, and remediation path. This prevents the same control from being re-explained separately for customer questionnaires, audits, procurement reviews, and internal risk assessments.</p>
        <p className="text-gray-600 my-6 bg-amber-50 p-4 rounded-md border border-amber-100"><strong>Important:</strong> treat compliance as an applicability and evidence exercise, not a badge list. The strongest portal program can show which requirements apply, why they apply, how the control works, and when it was last tested.</p>
      </BlogSection>
      <BlogSection
        id="security-evidence"
        title="Keep Security Evidence That Proves Controls Work"
      >
        <p className="text-gray-600 mb-6">Enterprise teams should be able to show not only that a control exists, but also how it is configured, tested, reviewed, and maintained. Evidence should be recent enough to reflect the current portal, not a screenshot from a configuration that no longer exists.</p>
       <Table
            headers={securityEvidenceHeaders}
            data={securityEvidenceData}
            columnWidths={["18%", "42%", "40%"]}
          />
        <p className="text-gray-600 mb-6 font-bold text-lg">Make Evidence Reproducible</p>
        <p className="text-gray-600 mb-6">Prefer exported configuration, automated reports, tickets, signed approvals, and test outputs over isolated screenshots. Each evidence item should identify the system, date, environment, control owner, and result. When a test finds an exception, preserve the remediation ticket and retest evidence instead of replacing the original record.</p>
        <p className="text-gray-600 mb-6">Useful audit model: Control → Implementation → Testing → Evidence → Remediation. This keeps security practical for engineering teams and easier to verify during customer, procurement, and compliance reviews.</p>
      </BlogSection>
      <BlogSection
        id="security-gate"
        title="Use a Security Gate Before Enterprise Portal Launch"
      >
        <p className="text-gray-600 mb-6">Before production launch, verify the controls that can create the greatest security impact if missed. A checklist is useful only when each item has an owner, pass/fail result, evidence, and an explicit exception process.</p>
        <div className="p-[13px 14px 13px 42px]">

        </div>
        <div className="flex flex-row flex-wrap gap-2 mb-8">
        {securityPractices && securityPractices.length > 0 && securityPractices.map((mis, index) => {
          return <div key={index} className="flex gap-4 items-start w-[49%] bg-white border border-[#d9ece6] p-3 rounded-lg">
            <span className="self-start bg-[#ecf8f4] p-1.5 rounded-md text-[#2b8a73] font-bold">
              <CheckIcon width={12} height={12} />
            </span>
            <div className="flex flex-col">
              <p className="text-sm mb-1 text-gray-700">{mis.label}</p>
            </div>
          </div>
        })}
       </div>
        <p className="text-gray-600 mb-6 font-bold text-lg">Use One Executable Baseline</p>
        <Table
            headers={securityGateHeaders}
            data={securityGateData}
            columnWidths={["30%", "40%", "40%"]}
          />
        <p className="text-gray-600 mb-6 font-bold text-lg">Require Security Sign-Off, Not Silent Exceptions</p>
        <p className="text-gray-600 mb-6">Block launch for unresolved critical authorization flaws, cross-tenant exposure, exposed secrets, or unpatched actively exploited vulnerabilities. If a lower-severity risk is accepted, record the business owner, compensating control, due date, and expiry. Re-run the launch gate after major identity, payment, data, or architecture changes.</p>
        <p></p>
        <p></p>
      </BlogSection>
      <BlogSection
        id="security-mistakes"
        title="Common Enterprise Portal Security Mistakes"
      >
        <p className="text-gray-600 mb-10">Most serious gaps come from inconsistent implementation rather than the complete absence of security tools.</p>
       <div className="flex flex-row flex-wrap gap-2">
        {commonMistakes && commonMistakes.length > 0 && commonMistakes.map((mis, index) => {
          return <div key={index} className="flex gap-2 items-start w-[49%] bg-red-50/50 border border-red-100 p-3 rounded-lg">
            <span className="self-start bg-red-200 p-1.5 rounded-md text-red-800 font-bold mt-1">
              <XIcon width={12} height={12} />
            </span>
            <div className="flex flex-col">
              <strong className="text-sm mb-1">{mis.label}</strong>
              <p className="text-sm text-gray-700">{mis.desc}</p>
            </div>
          </div>
        })}
           
       </div>
      </BlogSection>
       <BlogSection
        id="conclusion"
        title="Conclusion"
      >
        <p className="text-gray-600 mb-6">Enterprise portal security works best when identity, authorization, APIs, data protection, infrastructure, secure development, monitoring, recovery, and compliance are designed together.</p>
        <p className="text-gray-600 mb-6">The practical goal is simple: know what control exists, how it is implemented, how it is tested, and what evidence proves it works. That approach improves security while making enterprise procurement, customer reviews, and audits easier to manage.</p>
      </BlogSection>
    </div>
  }

  const Render = () => {
    return  <article className="container-wrapper-transparent px-6 pb-24">
      <BlogsHeader
        data={{
          category: 'Tech', 
          date: '10 August 2026', 
          title: 'Enterprise Web Portal Security Checklist & Compliance Guide',
          desc: ""
        }}
      />
      <div className="flex items-start pt-8 gap-[100px]">
        <BlogsAside items={items}/>
        <RenderContentBody/>
      </div>
    </article>
  }

  return <Render/>;
};

export default EnterpriseWebSecurityBlog;




