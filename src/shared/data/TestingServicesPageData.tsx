import { Apple } from "lucide-react";
import { FaAndroid, FaGlobe, FaLayerGroup } from "react-icons/fa";
import nativeios from "../../assets/app/ios-app-development.webp";
import nativeandroid from "../../assets/app/native-android-development.webp";
import crossplatform from "../../assets/app/cross-platform-development.webp";
import pwa from "../../assets/app/pwa-and-app-modernisation.webp";
import uattesting from "../../assets/blogs/uat-testing.webp";
import testcasemanagement from "../../assets/blogs/testcase-management.webp";
import mobileapptesting from "../../assets/blogs/mobile-app-testing.png";

const TestingServicesPageData = [
  {
    icon: <Apple size={14} strokeWidth={2.5} />,
    tag: "Native iOS",
    code: "Swift + SwiftUI + Xcode",
    title: "iOS App Development",
    description: "Swift and SwiftUI for iPhone and iPad, built to Apple HIG standards with full App Store submission. From concept to live on the App Store.",
    list: ["Swift & SwiftUI", "TestFlight QA", "App Store submission", "In-app purchases"],
    cta: {
      label: "iOS Services ",
      link: ""
    },
    image: nativeios
  },
  {
    icon:  <FaAndroid size={14} />,
    tag: "Native Android",
    code: "Kotlin + Jetpack Compose",
    title: "Android App Development",
    description: "Kotlin and Jetpack Compose for phones, tablets, and foldables, optimised for Google Play policies and Material Design 3 guidelines.",
    list: ["Kotlin + Jetpack", "Google Play submission", "Offline-first architecture", "Material Design 3"],
    cta: {
      label: "Android Services",
      link: ""
    },
    image: nativeandroid
  },
  {
    icon: <FaLayerGroup size={14} />,
    tag: "Cross-Platform",
    code: "Flutter + React Native",
    title: "Cross-Platform Development",
    description: "One codebase for iOS and Android. Flutter for custom UI; React Native for JS teams. Cuts cost 30 to 50% vs two native builds without sacrificing quality.",
    list: ["Flutter / Dart", "React Native New Arch", "Single codebase", "30 to 50% cost saving"],
    cta: {
      label: "Cross-Platform Services",
      link: ""
    },
    image: crossplatform
  },
  {
    icon: <FaGlobe size={14} />,
    tag: "PWA",
    code: "React + Service Workers",
    title: "PWA & App Modernisation",
    description: "Installable web apps with native-like UX and offline support. We also rebuild outdated apps after a thorough codebase audit and technical review.",
    list: ["Service workers", "Push notifications", "Offline capability", "App modernisation"],
    cta: {
      label: "PWA Services ",
      link: ""
    },
    image: pwa
  },
];

const TestingServicesBlogsData = [
    {
        title: "A Complete Guide to User Acceptance Testing (UAT)",
        category: "Testing",
        readTime: "15 min read",
        description: "User acceptance testing (UAT) is the final—and arguably most critical—step before a product goes live. It’s where business value is validated and the one question that truly matters gets answered: “Will this actually work for our users?”",
        date: "October 1, 2026",
        href: "/uattestingblog",
        image: uattesting
    },
    {
        title: "Optimizing Test Case Management for Large-Scale Projects",
        category: "Testing",
        readTime: "5 min read",
        description: "Software testing is crucial regardless of project size, but it plays an especially vital role in large-scale initiatives.",
        date: "October 1, 2026",
        href: "/testcasemanagement",
        image: testcasemanagement
    },
    {
        title: "Mobile app testing: The ultimate guide to ensure quality and performance",
        category: "Testing",
        readTime: "10 min read",
        description: "In Australia, where mobile app usage has skyrocketed with a projected steady annual growth rate of 7.37% from 2022 to 2027, delivering a seamless and bug-free digital experience is paramount.",
        date: "September 28, 2026",
        href: "/mobileapptestingblog",
        image: mobileapptesting
    },
];

export {
  TestingServicesPageData,
  TestingServicesBlogsData
}