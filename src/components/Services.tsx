import type { IconName } from "../types/IconNames";
import Icon from "./Icon";

const services: Array<{ icon: IconName; title: string; copy: string }> = [
  {
    icon: "digitaltransform",
    title: "Digital Transformation Services",
    copy: "Serat nuec umsan id nisi in ullamcorper, nullam leo diam seplatun",
  },
  {
    icon: "softwareconsulting",
    title: "Software Consulting",
    copy: "Nektar minten id nisi in ullamcorper, nullam leo diam goradil",
  },
  {
    icon: "code",
    title: "Custom Software Development",
    copy: "Soredam andliss id nisi in ullamcorper, nullam leo diam entefance",
  },
  {
    icon: "ai",
    title: "Technology and AI Solutions",
    copy: "Teanda niccumsan id nisi in ullamcorper, nullam leo diam koritan",
  },
];

const Services = () => {
  return (
    <div
      aria-label="Featured services"
      className="mx-auto mt-[48px] md:mt-[78px] grid w-[var(--content-width)] grid-cols-1 md:grid-cols-4 gap-1 md:gap-0 bg-[rgba(5,12,22,0.76)]"
    >
      {services.map((service) => (
        <article
          key={service.title}
          className="md:min-h-[224px] border-b md-border-b-0 md:border-r border-white/12 bg-[rgba(8,17,31,0.38)] px-[24px] md:px-[34px] pt-[28px] md:pt-[34px] pb-[20px] md:pb-[26px] last:border-r-0"
        >
          <div className="mb-[18px] h-[48px] w-[48px] ">
            <Icon name={service.icon} className="w-full h-full text-gray-500"/>
          </div>
          <h2 className="mb-1 md:mb-[14px] text-md font-semibold uppercase leading-[1.25] text-white">
            {service.title}
          </h2>
          <p className="text-sm leading-[1.55] text-white/70">
            {service.copy}
          </p>
        </article>
      ))}
    </div>
  );
};

export default Services;
