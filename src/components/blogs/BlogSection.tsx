import React, { type ReactNode } from "react";

interface BlogSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  first?: boolean;
}

const BlogSection = ({
  id,
  title,
  children,
  first = false,
}: BlogSectionProps) => {
  return (
    <section id={id} className={first ? "" : "mt-[60px]"}>
      <h2 className="blogh2 text-[#01182e]">
        {title}
      </h2>

      {children}
    </section>
  );
};

export default BlogSection;