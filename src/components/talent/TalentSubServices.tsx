import React from "react";
import CompHeader from "../shared/CompHeader";

interface ServicesProps {
  img: string;
  title: string;
  desc: string;
  list: string[];
  reverse?: boolean;
}

const Services: React.FC<ServicesProps> = ({
  img,
  title,
  desc,
  list,
  reverse = false,
}) => {
  return (
    <div className={` flex flex-col items-stretch gap-8 md:items-center md:gap-10 ${reverse ? "md:flex-row-reverse" : "md:flex-row"} `}>
      {/* Image */}
      <div
        className="
          group
          relative
          w-full
          overflow-hidden
          rounded-lg
          shadow-[0_0_0_1px_rgba(222,222,222,0.2),0_0_20px_rgba(222,222,222,0.12),0_20px_50px_rgba(0,0,0,0.2)]
          transition-shadow
          duration-300
          hover:shadow-[0_0_0_1px_rgba(222,222,222,0.25),0_0_30px_rgba(222,222,222,0.08),0_24px_60px_rgba(0,0,0,0.25)]
          md:w-[38%]
          md:min-h-[460px]
        "
      >
        <div className="absolute left-[10%] right-[10%] top-0 z-20 h-px bg-gradient-to-r from-transparent via-sky-600 to-transparent opacity-70" />

        <img
          src={img}
          alt={`${title} services`}
          width={560}
          height={420}
          loading="lazy"
          decoding="async"
          className="
            h-[360px]
            w-full
            rounded-lg
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[1.04]
            md:absolute
            md:inset-0
            md:h-full
            md:rounded-[18px]
          "
        />

        {/* Bottom image gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[18px]
            bg-gradient-to-b
            from-transparent
            via-transparent
            to-[#080a1c]/50
          "
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[62%]">
        <article className="group relative p-2 md:p-6">
          <h3
            className="
              mb-3
              font-medium
              leading-[1.2]
              text-xl
              text-[#032036]
              md:text-3xl
            "
          >
            {title}
          </h3>

          <p className="text-sm font-normal leading-[1.6] text-gray-700 md:text-md">
            {desc}
          </p>

          {list.length > 0 && (
            <ul className="mt-8 space-y-4">
              {list.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="
                    relative
                    pl-6
                    pb-3
                    text-sm
                    font-normal
                    leading-[1.5]
                    text-gray-700
                    md:text-md
                    border-b border-[#063559]/15
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-[0.55em]
                      h-2
                      w-2
                      rounded-full
                      bg-sky-600
                    "
                  />

                  {item}
                </li>
              ))}
            </ul>
          )}
        </article>
      </div>
    </div>
  );
};

const TalentSubServices: React.FC = () => {
  return (
    <section
      id="problems"
      aria-labelledby="problems-title"
      className="
        relative
        overflow-hidden
        bg-white
        py-6
        font-sans
        md:py-20
        before:pointer-events-none
        before:absolute
        before:inset-0
        before:z-0
        before:opacity-40
        before:[background-image:radial-gradient(rgba(0,188,255,0.15)_1px,transparent_1px)]
        before:[background-size:36px_36px]
        after:absolute
        after:left-0
        after:right-0
        after:top-0
        after:z-[1]
        after:h-px
        after:bg-[linear-gradient(90deg,transparent,rgba(0,188,255,0.7)_40%,rgba(0,188,255,0.9)_50%,rgba(0,188,255,0.7)_60%,transparent)]
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[55%] w-[50%] rounded-full bg-sky-600/[0.08] blur-[100px]"/>
      <div className="pointer-events-none absolute bottom-0 right-0 h-[45%] w-[40%] rounded-full bg-sky-600/[0.06] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <CompHeader
          highlighter="Sub Services"
          title="Expand Your Development Team, Efficiently"
          subheading="Quickly scale your development team with cost-effective, highly skilled professionals who integrate seamlessly into your projects. Mitrais’ On-Demand Development Teams provide the flexibility to scale, accelerate delivery, and maintain high-quality standards. Whether you need short-term reinforcements or a long-term dedicated team, we deliver the expertise and stability to drive success."
          variant="default"
        />
        <div className="h-[40px]"></div>
        <Services
          img="https://www.mitrais.com/wp-content/uploads/2025/05/eaf0c107bcc3847ae61da85f1d8dfa4389a70c9a.webp"
          title="Staff Augmentation"
          desc="Optimise your software development budget by augmenting your internal team with skilled developers, testers, and engineers. With teams based in Bali, Jakarta, Bandung, and Yogyakarta, Mitrais provides nearshore talent for businesses across the Asia-Pacific, offering cost-effective scalability without compromising quality."
          list={[
            "Rapid access to skilled professionals that reduce recruitment delays.",
            "Cost-effective scalability to meet changing project demands.",
            "Long-term stability with developers trained to OECD security standards.",
            "Seamless transitions in case of team member changes, ensuring minimal disruption.",
          ]}
        />
        <div className="h-[40px]"></div>
        <Services
          img="https://www.mitrais.com/wp-content/uploads/2025/05/b3c3f7a20df1f2b294d787e71d82d48f5e590bee.webp"
          title="Dedicated Development Teams"
          desc="Build a dedicated team of skilled professionals aligned to your technology and delivery requirements."
          list={[
            "Dedicated developers aligned with your product roadmap.",
            "Flexible team scaling based on project requirements.",
            "Cross-functional collaboration with developers, testers, and UX/UI specialists.",
            "Continuous improvement through fast iterations and seamless integration.",
          ]}
          reverse
        />
      </div>
    </section>
  );
};

export default TalentSubServices;
