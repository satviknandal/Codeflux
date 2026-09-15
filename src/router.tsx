// router.tsx
import { createBrowserRouter } from "react-router-dom";
import AboutusPage from "./pages/about/AboutusPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AppLayout from "./AppLayout";
import ServicesPage from "./pages/ServicesPage";
import SoftwareDevelopmentServices from "./pages/services/SoftwareDevelopmentServices";
import CloudSolutionServices from "./pages/services/CloudSolutionServices";
import WebDesignUX from "./pages/services/WebDesignUX";
import ContactusPage from "./pages/ContactusPage";
import TeamPage from "./pages/TeamPage";
import CareersPage from "./pages/CareersPage";
import ClientStoriesPage from "./pages/ClientStoriesPage";
import AIServices from "./pages/services/AIServices";
import AIConsulting from "./pages/services/AIConsulting";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsofServicePage from "./pages/TermsofServicePage";
import BlogsPage from "./pages/BlogsPage";
import Blog1 from "./pages/blogs/Blog1";
import InfraMigrationBlog from "./pages/blogs/InfraMigrationBlog";
import MobileAppDevBlog from "./pages/blogs/MobileAppDevBlog";
import EnterpriseWebSecurityBlog from "./pages/blogs/EnterpriseWebSecurityBlog";
import DigitalTransformationBlog from "./pages/blogs/DigitalTransformationBlog";
import TopAIServicesBlog from "./pages/blogs/TopAIServicesBlog";
import MobileWebappBlog from "./pages/blogs/MobileWebappBlog";
import GenerativeAIBlog from "./pages/blogs/GenerativeAIBlog";
import AgileInnovationBlog from "./pages/blogs/AgileInnovationBlog";
import MobileAppServices from "./pages/services/MobileAppServices";
import WebsiteDevelopmentServices from "./pages/services/WebsiteDevelopmentServices";
import AgenticAIBlog from "./pages/blogs/AgenticAIBlog";
import AIAdoptionBlog from "./pages/blogs/AIAdoptionBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
        children: [
            { index: true, element: <HomePage />},
            { path: "/aboutus", element: <AboutusPage /> },
            { path: "/contactus", element: <ContactusPage /> },
            { path: "/team", element: <TeamPage /> },
            { path: "/careers", element: <CareersPage /> },
            { path: "/clientstories", element: <ClientStoriesPage /> },
            { path: "/services", element: <ServicesPage /> },
            { path: "/services/aiservices", element: <AIServices /> },
            { path: "/services/aiconsulting", element: <AIConsulting /> },
            { path: "/services/softwaredevelopmentservices", element: <SoftwareDevelopmentServices /> },
            { path: "/services/webdevelopmentservices", element: <WebsiteDevelopmentServices /> },
            { path: "/services/webdesignuiux", element: <WebDesignUX /> },
            { path: "/services/cloudsolutionsservices", element: <CloudSolutionServices /> },
            { path: "/services/mobileappservices", element: <MobileAppServices /> },
            { path: "/privacypolicy", element: <PrivacyPolicyPage /> },
            { path: "/termsofservice", element: <TermsofServicePage /> },
            { path: "/blogs", element: <BlogsPage /> },
            { path: "/blog1", element: <Blog1 /> },
            { path: "/inframigrationblog", element: <InfraMigrationBlog /> },
            { path: "/mobileappdevblog", element: <MobileAppDevBlog /> },
            { path: "/enterprisewebsecuritychecklistblog", element: <EnterpriseWebSecurityBlog /> },
            { path: "/topaiservicesblog", element: <TopAIServicesBlog /> },
            { path: "/mobileorwebappblog", element: <MobileWebappBlog /> },
            { path: "/generativeaiblog", element: <GenerativeAIBlog /> },
            { path: "/agileinnovationblog", element: <AgileInnovationBlog /> },
            { path: "/agenticaiblog", element: <AgenticAIBlog /> },
            { path: "/aiadoptionblog", element: <AIAdoptionBlog /> },
            
            { path: "/digitalTranformationBlog", element: <DigitalTransformationBlog /> },
            
            
            { path: "*", element: <NotFoundPage/>},
    ],
  },
]);

export default router;
