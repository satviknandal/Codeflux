import "../../blog.css";

interface BlogsHeaderFields {
    category: string, 
    date: string, 
    title: string, 
    desc: string
}

interface BlogsHeaderProps {
    data: BlogsHeaderFields
}

const BlogsHeader = ({data}: BlogsHeaderProps) => {
    const {category, date, title, desc} = data;
  
    return <header className="py-[60px]">
        <a href="/blogs" className="block text-xs mb-16 text-gray-900">← All Blogs</a>
        <div className="text-xs text-gray-800">
            <span className="text-sky-500 font-bold mr-4">{category}</span>
            <time className="mr-4">{date}</time>
            <span>5 minute read</span>
        </div>
        <h1 className="text-[#01182e] blogh1">{title}</h1>
        <p className="text-gray-600 text-base">{desc}</p>
        {/* <div className="pt-4 border-t border-t-gray-200 text-gray-600 text-xs">
            <span className="mr-10">Published by RobotAtom Research</span>
            <span>Reviewed 10 August 2026</span>
        </div> */}
        </header>
};

export default BlogsHeader;




