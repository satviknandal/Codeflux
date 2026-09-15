import { AsteriskIcon } from "lucide-react";
import "../../blog.css";
import BlogsAside from "../../components/blogs/BlogsAside";
import BlogSection from "../../components/blogs/BlogSection";
import BlogsHeader from "../../components/blogs/BlogsHeader";
import Table from "../../components/shared/Table";
import mobile from "../../assets/blogs/mobile-skeleton.png";
import pwa from "../../assets/blogs/web-skeleton.png";

const MobileWebappBlog = () => {

  const items = [
      {
          label: 'What Are We Actually Comparing?',
          link: 'comparison'
      },
      {
          label: 'Mobile App vs PWA: Side-by-Side',
          link: 'mobileapp-pwa'
      },
      {
          label: 'The Real Cost Picture in 2026',
          link: 'real-cost'
      },
      {
          label: 'When to Choose a Mobile App',
          link: 'mobile-app'
      },
      {
          label: 'When to Choose a Progressive Web App',
          link: 'progressive-webapp'
      },
      {
          label: 'Common Myths Debunked',
          link: 'myths-debunked'
      },
      {
          label: 'Quick Reference Guide',
          link: 'reference-guide'
      },
      {
          label: 'Points to Remember',
          link: 'points-remember'
      }
  ];

  const mobileWebappHeaders = [
    "Feature",
    "Mobile App",
    "PWA"
  ];

  const mobileWebappData = [
   [
      "Distribution",
      "App Store / Google Play",
      "Direct URL / Add to Home Screen"
    ],
    [
      "User Installation Feel",
      "Familiar 'install an app'",
      "More like a website shortcut"
    ],
    [
      "Device Features",
      "Full access (Bluetooth, NFC, sensors)",
      "Limited (no Bluetooth, restricted background)"
    ],
    [
      "Offline Capability",
      "Excellent",
      "Good (with service workers)"
    ],
    [
      "Updates",
      "App store review (1-7 days)",
      "Instant deployment"
    ],
    [
      "Performance",
      "Best for intensive tasks",
      "Very good for standard apps"
    ],
    [
      "Development (with Expo/RN)",
      "Single codebase → both stores",
      "Single codebase → web"
    ]
  ];


  
  


  const RenderContentBody = () => {
    return <div className="blog-body w-[75%]">
      <p className="text-gray-600 mb-6">The real factors that determine whether you need a mobile app or PWA: device-specific features and user installation expectations. Updated for cross-platform frameworks like Expo.</p>
      <BlogSection
        id="comparison"
        title="What Are We Actually Comparing?"
        first
      >
        <div className="flex flex-col flex-wrap gap-2 mb-4">
          <div className="flex gap-2 px-5 py-6 border border-sky-200 rounded-lg bg-sky-50">
              
              <div className="w-[30%] text-center"><img src={mobile} alt="" className="h-40"/></div>
              <div className="w-[70%] text-sm">
                <div className="text-lg font-bold mb-2">Mobile Apps (Native or Cross-Platform).</div> 
                <p className="mb-1.5">Installed from app stores onto your device. Can be built natively (Swift/Kotlin) or with cross-platform tools like Expo/React Native using a single codebase.</p>
                <div className="text-xs text-gray-700">Examples: Instagram, CommBank, Uber, games</div>
              </div>
           
            
          </div>
          <div className="flex gap-2 px-5 py-6 border border-green-200 rounded-lg bg-green-50">
            <div className="w-[30%]"><img src={pwa} alt="" className="h-40"/></div>
            <div className="w-[70%] text-sm">
              <div className="text-lg font-bold mb-2">Progressive Web Apps (PWAs)</div> 
              <p className="mb-1.5">Websites that look and feel like apps. Accessed through a browser but can be added to your home screen. No app store required.</p>
              <span className="text-xs text-gray-700">Examples: Twitter Lite, Starbucks ordering, Pinterest mobile</span>
            </div>
          </div>
        </div>
        <div className="text-gray-600 my-6 bg-amber-50 p-4 rounded-md border border-amber-100 text-sm"><strong>What's Changed:</strong> Modern cross-platform frameworks like Expo let you write one codebase in React Native and deploy to both iOS and Android app stores. The "native means two codebases" argument is largely obsolete—the real differences are about capabilities and user expectations.</div>
      </BlogSection>
      <BlogSection
        id="mobileapp-pwa"
        title="Mobile App vs PWA: Side-by-Side"
      >
        <Table
          headers={mobileWebappHeaders}
          data={mobileWebappData}
          columnWidths={["30%", "35%", "35%"]}
        />
      </BlogSection>
      <BlogSection
        id="real-cost"
        title="The Real Cost Picture in 2026"
      >
        <p className="text-gray-600 mb-6">With cross-platform frameworks like Expo, the cost gap between mobile apps and PWAs has narrowed significantly. The choice is less about budget and more about what you actually need.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex w-[49%] gap-2 px-5 py-6 border border-sky-200 rounded-lg bg-sky-50">
            <AsteriskIcon width={30} height={30} />
            <div className="text-sm">
              <div className="text-lg font-bold mb-6">Mobile App (Cross-Platform)</div> 
              <div className="mb-6">
                <strong>Using Expo/React Native:</strong>
                <ol>
                  <li>• Initial development: $30k-$80k</li>
                  <li>• Single codebase for iOS + Android</li>
                  <li>• App store submission fees: ~$125/year</li>
                </ol>
              </div>
              <div className="mb-6">
                <strong>Additional considerations:</strong>
                <ol>
                  <li>• App store review process (1-7 days)</li>
                  <li>• Must comply with store policies</li>
                  <li>• Full device API access</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="flex w-[49%] gap-2 px-5 py-6 border border-green-200 rounded-lg bg-green-50">
            <AsteriskIcon width={30} height={30} />
            <div className="text-sm">
              <div className="text-lg font-bold mb-6">Progressive Web App</div> 
              <div className="mb-6">
                <strong>Standard PWA:</strong>
                <ol>
                  <li>• Initial development: $20k-$60k</li>
                  <li>• Works everywhere with a browser</li>
                  <li>• No store fees</li>
                </ol>
              </div>
              <div className="mb-6">
                <strong>Additional considerations:</strong>
                <ol>
                  <li>• Instant updates (no review)</li>
                  <li>• No store policies to navigate</li>
                  <li>• Limited device API access</li>
                </ol>
              </div>
            </div>
          </div>
          
        </div>

        <div className="text-gray-600 my-6 bg-amber-50 p-4 rounded-md border border-amber-100 text-sm">
          <strong>Bottom Line:</strong> Cost differences are now modest. If your requirements fit a PWA, it's still cheaper. But if you need device features or app store presence, the cross-platform app route is no longer prohibitively expensive.
        </div>
      </BlogSection>
      <BlogSection
        id="mobile-app"
        title="When to Choose a Mobile App"
      >
        <p className="text-gray-600 mb-6">Mobile apps are the right choice when:</p>
        
        <div className="flex flex-col gap-2 mb-4">

            <div className="flex gap-2 px-5 py-6 border border-gray-100 rounded-lg bg-gray-50 justify-between">
                <div className="text-4xl text-sky-400 mr-4">1.</div>
                <div className="flex flex-col">
                    <div className="text-lg font-bold">You Need Device-Specific Features</div>
                    <p className="text-sm">Bluetooth Low Energy (fitness trackers, IoT devices), NFC (contactless payments), advanced camera controls, background location tracking, Apple Watch/widgets, or hardware sensors that browsers can't access.</p>
                </div>
            </div>
            <div className="flex gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
                <div className="text-4xl text-sky-400 mr-4">2.</div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">App Store Presence Matters</div>
                  <p className="text-sm">Users expect to find you in the App Store or Google Play. Your audience discovers apps through store search. You want app store ratings and reviews as social proof. The "install an app" experience feels more legitimate to your users.</p>
                </div>
            </div>
            <div className="flex gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
                <div className="text-4xl text-sky-400 mr-4">3.</div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Complex Offline Functionality</div>
                  <p className="text-sm">Apps that must work completely offline with complex data sync. Large local data storage requirements. Field workers in areas with no reception who need full functionality.</p>
                </div>
            </div>
            <div className="flex gap-2 px-5 py-6 border border-gray-200 rounded-lg bg-gray-50">
                <div className="text-4xl text-sky-400 mr-4">4.</div>
                <div>
                  <div className="text-lg font-bold">Maximum Performance Required</div>
                  <p className="text-sm">Graphics-intensive apps (games, AR/VR), real-time processing (photo/video editing), complex animations where every millisecond matters.</p>
                </div>
            </div>
        </div>
      </BlogSection>
      <BlogSection
        id="progressive-webapp"
        title="When to Choose a Progressive Web App"
      >
        <p className="text-gray-600 mb-6">PWAs are often the smarter choice when:</p>
        
         <div className="flex flex-col gap-2 mb-4">

            <div className="flex gap-2 px-5 py-6 border border-gray-100 rounded-lg bg-gray-50 justify-between">
                <div className="text-4xl text-green-400 mr-4">1.</div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">No Device-Specific Features Required</div>
                  <p className="text-sm">Standard features like forms, lists, data display, user authentication, push notifications, basic camera (photos, QR codes), and GPS/location all work great in PWAs. If your app doesn't need Bluetooth, NFC, or advanced sensors, a PWA can do everything you need.</p>
                </div>
            </div>
            <div className="flex gap-2 px-5 py-6 border border-gray-100 rounded-lg bg-gray-50 justify-between">
                <div className="text-4xl text-green-400 mr-4">2.</div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Users Access From Multiple Devices</div>
                  <p className="text-sm">When users need to access from desktop and mobile. Business tools used in the office and on the go. One URL works everywhere—no need to install anything.</p>
                </div>
            </div>
            <div className="flex gap-2 px-5 py-6 border border-gray-100 rounded-lg bg-gray-50 justify-between">
                <div className="text-4xl text-green-400 mr-4">3.</div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">Instant Updates Matter</div>
                  <p className="text-sm">Frequently changing content or features. No waiting for app store approval. Deploy a fix in minutes, not days. Great for rapidly evolving products.</p>        
                </div>
            </div>
            <div className="flex gap-2 px-5 py-6 border border-gray-100 rounded-lg bg-gray-50 justify-between">
                <div className="text-4xl text-green-400 mr-4">4.</div>
                <div className="flex flex-col"> 
                  <div className="text-lg font-bold">SEO and Shareability Matter</div>
                  <p className="text-sm">Want Google to index your content. Need shareable URLs for specific pages. Links can be shared via email, social, or messaging without app install friction.</p>
                </div>
            </div>
            <div className="flex gap-2 px-5 py-6 border border-gray-100 rounded-lg bg-gray-50 justify-between">
                <div className="text-4xl text-green-400 mr-4">5.</div>
                <div className="flex flex-col">
                  <div className="text-lg font-bold">B2B or Internal Use</div>
                  <p className="text-sm">Internal tools, customer portals, booking systems, client dashboards. Users access via link—no app store discovery needed. Lower friction for onboarding.</p>
                </div>
            </div>
          </div>
      </BlogSection>
      <BlogSection
        id="myths-debunked"
        title="Common Myths Debunked"
      >
        <div className="bg-[#f8fafc] border border-gray-100 p-4 rounded-md mb-3 text-sm">
          <p className="text-red-600 mb-1">❌ Myth: "Mobile apps require building two separate apps for iOS and Android"</p>
          <p className="text-green-600">✓ Reality: Cross-platform frameworks like Expo and React Native let you build one codebase that deploys to both app stores. This is now the standard approach for most business apps.</p>
        </div>
        <div className="bg-[#f8fafc] border border-gray-100 p-4 rounded-md mb-3 text-sm">
          <p className="text-red-600 mb-1">❌ Myth: "PWAs can't send push notifications"</p>
          <p className="text-green-600">✓ Reality: PWAs support push notifications on Android fully and iOS (since iOS 16.4). For most business use cases, PWA notifications work great.</p>
        </div>
        <div className="bg-[#f8fafc] border border-gray-100 p-4 rounded-md mb-3 text-sm">
          <p className="text-red-600 mb-1">❌ Myth: "PWAs don't work offline"</p>
          <p className="text-green-600">✓ Reality: PWAs can cache data and work offline using service workers. For typical business apps, offline support is solid. Complex offline sync is where mobile apps still have an edge.</p>
        </div>
        <div className="bg-[#f8fafc] border border-gray-100 p-4 rounded-md mb-3 text-sm">
          <p className="text-red-600 mb-1">❌ Myth: "PWAs can do everything mobile apps can"</p>
          <p className="text-green-600">✓ Reality: PWAs cannot access Bluetooth, NFC, advanced sensors, or run background tasks reliably. If you need these features, you need a mobile app—there's no workaround.</p>
        </div>
        <div className="bg-[#f8fafc] border border-gray-100 p-4 rounded-md mb-3 text-sm">
          <p className="text-red-600 mb-1">❌ Myth: "Mobile apps are always more expensive"</p>
          <p className="text-green-600">✓ Reality: With cross-platform tools, the cost gap has narrowed significantly. A cross-platform mobile app is typically 20-40% more than a PWA, not 2-3x more. The decision should be about features and user expectations, not just budget.</p>
        </div>
      </BlogSection>
      <BlogSection
        id="reference-guide"
        title="Quick Reference Guide"
      >
        <p className="text-gray-600 mb-2 font-bold">Choose a Mobile App if:</p>
        <p className="text-gray-600 mb-6">You need Bluetooth, NFC, advanced sensors, or background processing • Users expect to find you in the App Store • You want app store reviews and ratings • The "install an app" experience matters to your brand</p>
        <p className="text-gray-600 mb-2 font-bold">Choose a PWA if:</p>
        <p className="text-gray-600 mb-6">Standard web features cover your needs • Users access from multiple devices (desktop + mobile) • Instant updates are important • You want searchable/shareable URLs • It's a B2B tool or internal system</p>
        <p className="text-gray-600 mb-2 font-bold">Cost is less of a factor now:</p>
        <p className="text-gray-600 mb-6">Cross-platform tools like Expo have made mobile apps much more affordable. Don't choose a PWA just because you think apps are too expensive—choose based on your actual requirements.</p>
      </BlogSection>
      <BlogSection
        id="points-remember"
        title="Points to Remember"
      >
        <p className="text-gray-600 mb-1"><strong>1. The codebase argument is outdated—</strong>cross-platform tools like Expo let you build one codebase for both iOS and Android</p>
        <p className="text-gray-600 mb-1"><strong>2. Device features are the hard line—</strong>if you need Bluetooth, NFC, or advanced sensors, you need a mobile app, full stop</p>
        <p className="text-gray-600 mb-1"><strong>3. User expectations matter—</strong>some audiences expect to install an app from the store, others are fine with a web link</p>
        <p className="text-gray-600 mb-1"><strong>4. PWAs excel for business tools—</strong>internal apps, client portals, and B2B solutions often work better as PWAs</p>
        <p className="text-gray-600 mb-1"><strong>5. Cost differences have shrunk—</strong>don't default to PWA just because you assume apps are expensive</p>
        <p className="text-gray-600 mb-1"><strong>6. An honest developer will ask the right questions—</strong>not push one solution over another</p>
      </BlogSection>
    </div>
  }

  const Render = () => {
    return  <article className="container-wrapper-transparent px-6 pb-24">
      <BlogsHeader
        data={{
          category: 'Tech', 
          date: '10 August 2026', 
          title: 'Do You Need a Mobile App or a Progressive Web App?',
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

export default MobileWebappBlog;




