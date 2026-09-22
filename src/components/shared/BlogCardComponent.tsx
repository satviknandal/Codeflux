import { ArrowRight, Clock } from "lucide-react";

export interface BlogPost {
  title: string;
  category: string;
  readTime: string;
  description: string;
  date: string;
  href: string;
  image: string;
}

const BlogCardComponent = ({ post }: { post: BlogPost }) => {
  return (
    <article className="group border border-gray-200 bg-white rounded-lg md:rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="h-44 relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-3 md:p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] md:text-xs font-semibold bg-gray-100 text-gray-700">
            {post.category}
          </span>

          <span className="flex items-center gap-1 text-[11px] md:text-xs text-gray-400">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        <h2 className="text-[14px] md:font-headline font-medium md:font-bold tracking-tighter text-gray-900 mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors">
          <a href={post.href}>{post.title}</a>
        </h2>
        <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-4">
          {post.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{post.date}</span>

          <a
            href={post.href}
            aria-label={`Read: ${post.title}`}
            className="text-xs font-semibold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
          >
            Read
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogCardComponent;