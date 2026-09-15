import "../../blog.css";

interface BlogsAsideProps {
    items: any
}

const BlogsAside = ({items}: BlogsAsideProps) => {
    return <aside className="flex flex-col gap-2 sticky top-[110px] w-[25%]">
        <strong className="font-bold text-sky-950 text-md">In this article</strong>
        {items && items.length > 0 && items.map((item: any, index: number) => {
            return <a key={index} href={`${'#'+item.link}`} className="text-xs text-gray-900 hover:text-sky-400">{item.label}</a>
        })}
    </aside>
};

export default BlogsAside;




