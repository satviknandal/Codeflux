import { Clock, ArrowRight } from "lucide-react";
import aitools from "../assets/blogs/ai-tools.webp";
import digitaltransformation from "../assets/blogs/digital-transformation.jpg";
import websecurity from "../assets/blogs/web-security.png";
import mobileappdevelopment from "../assets/blogs/mobile-app-development.webp";
import mobilewebapp from "../assets/blogs/mobilewebapp.jpg";
import generativeai from "../assets/blogs/generativeai.webp";
import inframigration from "../assets/blogs/cloudmigration.jpg";
import agile from "../assets/blogs/agile.png";
import agenticAi from "../assets/blogs/agentic-ai.png";
import aiadoption from "../assets/blogs/ai-adoption.jpg";


import BreadCrumbNav from "../components/BreadcrumbNav";
import { Link } from "react-router-dom";
import type { BlogPost } from "../components/shared/BlogCardComponent";
import BlogCardComponent from "../components/shared/BlogCardComponent";

const latestBlogPosts: Array<BlogPost> = [
  {
    title: "Enterprise Web Portal Security Checklist & Compliance Guide",
    category: "Web Development",
    readTime: "7 min read",
    description: "Enterprise Portal Security Enterprise web portals give customers, employees, vendors, and partners authenticated access to sensitive business data, APIs, documents,",
    date: "September 30, 2026",
    href: "/enterprisewebsecuritychecklistblog",
    image: websecurity,
  },
  {
    title: "What is Agentic AI",
    category: "Artificial Intelligence",
    readTime: "10 min read",
    description: "The artificial intelligence (AI) realm saw a significant stir towards the close of 2022, as OpenAI unleashed ChatGPT to the digital world, promptly amassing an impressive 100 million users in just a few months. The driving force behind this remarkable uptake? Generative AI models",
    date: "September 28, 2026",
    href: "/agenticaiblog",
    image: agenticAi
  },
  {
    title: "AI Adoption Framework: How Enterprises Structure Their AI Initiatives",
    category: "Artificial Intelligence",
    readTime: "7 min read",
    description: "From strategy and AI assessment to implementation, scaling, and continuous governance, along with real-world best practices and common AI adoption challenges to avoid, this guide offers you a comprehensive, actionable insight on adopting AI successfully.",
    date: "September 20, 2025",
    href: "/aiadoptionblog",
    image: aiadoption
  },
  {
    title: "How to Move On-Premise Infrastructure to the Cloud: A Step-by-Step Migration Guide",
    category: "Tech",
    readTime: "7 min read",
    description: "Learn the complete on-premise to cloud migration process, including strategies, costs, migration steps, checklists, and post-migration optimisation tips.",
    date: "September 16, 2026",
    href: "/inframigrationblog",
    image: inframigration
  },
  {
    title: "Must-Have Mobile App Development Tools: What’s Trending?",
    category: "App Development",
    readTime: "7 min read",
    description: "Introduction In 2026, mobile app development will evolve rapidly, and businesses must stay ahead of the curve to deliver high-quality,",
    date: "September 15, 2026",
    href: "/mobileappdevblog",
    image: mobileappdevelopment,
  }
];

const featuredBlogPosts: BlogPost[] = [
  {
    title: "Top AI Services and Tools Every Business Will Need in the Next 3 Years",
    category: "Artificial Intelligence",
    readTime: "6 min read",
    description: "Introduction Artificial Intelligence (AI) has moved from being an experimental",
    date: "September 16, 2026",
    href: "/topaiservicesblog",
    image: aitools
  },
  {
    title: "Do You Need a Mobile App or a Progressive Web App?",
    category: "App Development",
    readTime: "8 min read",
    description: "The real factors that determine whether you need a mobile app or PWA: device-specific features",
    date: "September 16, 2026",
    href: "/mobileorwebappblog",
    image: mobilewebapp
  },
  {
    title: "What Is Digital Transformation?",
    category: "Digital Transformation",
    readTime: "7 min read",
    description: "Technology has changed the business landscape, but it can be challenging to know how to keep your organization operating competitively.",
    date: "September 15, 2026",
    href: "/digitalTranformationBlog",
    image: digitaltransformation
  },
  {
    title: "Generative AI: what is it, and how can it impact business?",
    category: "Artificial Intelligence",
    readTime: "10 min read",
    description: "The artificial intelligence (AI) realm saw a significant stir towards the close of 2022, as OpenAI unleashed ChatGPT to the digital world, promptly amassing an impressive 100 million users in just a few months. The driving force behind this remarkable uptake? Generative AI models",
    date: "September 15, 2026",
    href: "/generativeaiblog",
    image: generativeai
  },
  {
    title: "Agile innovation: a blueprint for rapid and effective change",
    category: "Innovation",
    readTime: "7 min read",
    description: "Agile innovation helps enterprises respond to change through strategic experimentation, faster learning and scalable solutions that create lasting business value. ",
    date: "September 10, 2026",
    href: "/agileinnovationblog",
    image: agile
  },
];

const BlogsPage = () => {

  const renderLatestArticle = (post: BlogPost) => {
    return <div className="mb-4 group">
      <article className="grid grid-cols-1 lg:grid-cols-[40%_60%] md:gap-2 bg-white rounded-lg md:rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col justify-center p-3 md:py-4 pr-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] md:text-xs font-semibold bg-sky-100 text-sky-700">
              {post.category}
            </span>

            <span className="flex items-center gap-1 text-[11px] md:text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-[11px] md:text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              {post.date}
            </span>
          </div>

          <h2 className="text-[14px] md:text-base md:font-headline font-medium md:font-bold tracking-tighter text-gray-900 mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors">
            <Link to={post.href} className="hover:text-sky-600 transition-colors"
            >
              {post.title}
            </Link>
          </h2>

          <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-4">
            {post.description}
          </p>

          <div className="flex items-center justify-between">
            <Link to={post.href} className="text-xs font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1">
              Read
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  }
  return (
    <>
    <main id="main-content" tabIndex={-1}>
      {/* Hero */}
      <div className="blogsbg text-white py-8 md:pt-32 md:pb-16 lg:pt-24 lg:pb-24 inset-0 -z-10 bg-gradient-to-br from-[#173c5a] via-surface-container-lowest to-[#030b12] pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <BreadCrumbNav label="Blogs"/>
            <h1 className="text-2xl md:text-4xl sm:text-5xl font-headline font-medium md:font-extrabold tracking-tighter mb-4 md:mb-6 max-w-2xl">
              Blogs & Insights
            </h1>

            <p className="text-sm md:text-base text-gray-300 max-w-2xl">
              Explore expert insights on software development, AI, product engineering, and digital transformation, created to help startups and enterprise teams make smarter technology decisions, accelerate execution, and build scalable business solutions with confidence.
            </p>
          </div>
        </div>
        
      </div>

      {/* Blog Content */}
      <section className="py-6 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <p className="text-xl md:text-3xl font-medium text-gray-600 mb-4 md:mb-8">
            Featured <span className="text-sky-400">Articles</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredBlogPosts.map((post) => (
              <BlogCardComponent key={post.href} post={post} />
            ))}
          </div>
        </div>

      <div className="flex flex-col-reverse md:flex-row gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="w-full md:w-3/4">
            <p className="text-xl md:text-3xl font-medium text-gray-600 mb-4 md:mb-8">
              Latest <span className="text-sky-400">Articles</span>
            </p>
          {latestBlogPosts && latestBlogPosts.length > 0 && latestBlogPosts.map((post) => {
            return renderLatestArticle(post)
          })}
          
        </div>
        <div className="w-full md:w-1/4">
          <div className="flex flex-col pb-8 border-b border-gray-200 mb-8">
            <h3 className="text-gray-900 font-bold text-md mb-4">Browse by <span className="text-gray-500">Topics</span></h3>
            <div className="flex gap-3 flex-wrap text-gray-700" aria-label="Browse blog categories"> 
              <a className="bg-[#f5f7fa] text-xs font-medium border border-gray-200 px-3 py-2 rounded-full" href="/category/ai-development/">AI Development</a>
              <a className="bg-[#f5f7fa] text-xs font-medium border border-gray-200 px-3 py-2 rounded-full" href="/category/ai-services/">AI Services</a>
              <a className="bg-[#f5f7fa] text-xs font-medium border border-gray-200 px-3 py-2 rounded-full" href="/category/software-development/">Software Development</a>
              <a className="bg-[#f5f7fa] text-xs font-medium border border-gray-200 px-3 py-2 rounded-full" href="/category/product/">Product Engineering</a>
              <a className="bg-[#f5f7fa] text-xs font-medium border border-gray-200 px-3 py-2 rounded-full" href="/category/app-development/">App Development</a>
              <a className="bg-[#f5f7fa] text-xs font-medium border border-gray-200 px-3 py-2 rounded-full" href="/category/web-developement/">Web Development</a>
              <a className="bg-[#f5f7fa] text-xs font-medium border border-gray-200 px-3 py-2 rounded-full" href="/category/tech/">Tech</a>
              <a className="bg-[#f5f7fa] text-xs font-medium border border-gray-200 px-3 py-2 rounded-full" href="/category/digital-transformation/">Digital Transformation</a>
              
            </div>
          </div>
           <div className="flex flex-col">
            <h3 className="text-gray-900 font-bold text-md mb-4">Related <span className="text-gray-500">Topics</span></h3>
            
            <div className="flex gap-3 flex-wrap text-gray-700" aria-label="Browse blog categories"> 
              <a className="bg-[#f5f7fa] text-xs font-medium border border-gray-200 px-3 py-2 rounded-full" href="/category/innovation/">Innovation</a>
              <a className="bg-[#f5f7fa] text-xs font-medium border border-gray-200 px-3 py-2 rounded-full" href="/category/automation/">Automation</a>
              <a className="bg-[#f5f7fa] text-xs font-medium border border-gray-200 px-3 py-2 rounded-full" href="/category/web-uiux/">Web UI/UX</a>
            </div>
          </div>
        </div>
      </div>
      </section>
    </main>
    </>
  );
};

export default BlogsPage;