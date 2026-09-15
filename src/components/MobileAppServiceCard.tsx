import { Code2, CheckCircle, ArrowRight } from "lucide-react";

interface MobileAppServiceCardProps {
  data: any,
  index: number
}

const MobileAppServiceCard = ({data, index}:MobileAppServiceCardProps )=> {
  return (
    <div
      className="
        sticky top-0
        grid grid-cols-1 md:grid-cols-2
        min-h-[380px]
        overflow-hidden
        rounded-[20px]
        border border-[#e4eaf4]
        bg-white
        shadow-[0_8px_40px_rgba(12,11,29,0.08)]
        transition-shadow duration-300
        [transform:translateZ(0)]
        will-change-transform
      "
    >
      {/* Image */}
      <div className={`relative min-h-[300px] overflow-hidden ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
        <img
          src={data.image}
          alt="Native iOS app development"
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover transition-transform duration-[600ms] ease-in-out hover:scale-105"
        />

        <span className="absolute left-[18px] top-[18px] z-[1] rounded-full border border-white/20 bg-[#0c0b1d]/60 px-[14px] py-[5px] text-[11px] font-bold tracking-[1.5px] text-white backdrop-blur-[8px]">
          {'0'+ (index+1)}
        </span>
      </div>

      <div className={`flex flex-col justify-center p-6 md:px-11 md:py-10 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
        
        <span
          className="
            mb-4
            inline-flex
            self-start
            items-center
            gap-[7px]
            rounded-full
            border
            border-blue-600/15
            bg-[#f0f4fd]
            px-3
            py-1
            text-[11px]
            font-bold
            uppercase
            tracking-[1.5px]
            text-sky-600
          "
        >
          {data.icon}
          {data.tag}
        </span>

        <h3 className="mb-3 text-2xl font-semibold leading-[1.25] text-[#0c0b1d]">{data.title}</h3>

        <span
          className="
            mb-4
            inline-flex
            self-start
            items-center
            gap-1.5
            rounded-full
            border
            border-gray-200
            bg-gray-100
            px-3
            py-1
            text-xs
            font-medium
            text-gray-500
          "
        >
          <Code2 size={13} />
          {data.code}
        </span>

        <p className="mb-5 text-[15px] font-normal leading-[1.72] text-gray-500">
          {data.description}
        </p>

        <div className="mb-[18px] h-px bg-[#eef0f8]" />

        <ul className="mb-6 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
          {data.list && data.list.length > 0 && data.list.map((item: any) => {
            return <li className="flex items-center gap-2 text-[13px] font-normal leading-[1.3] text-gray-700">
              <CheckCircle size={15} className="shrink-0 text-sky-600"/>{item}
            </li>
          })}
        </ul>

        {/* CTA */}
        <a
          href="https://sdlccorp.com/services/app-development/ios-app-development-company/"
          className="
            group
            inline-flex
            self-start
            items-center
            gap-2
            rounded-lg
            border-[1.5px]
            border-sky-600
            px-5
            py-2.5
            text-[13px]
            font-semibold
            text-sky-600
            no-underline
            transition-all
            duration-200
            hover:bg-sky-600
            hover:text-white
          "
        >
          {data.cta.label}

          <ArrowRight
            size={15}
            className="
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          />
        </a>
      </div>
    </div>
  );
};

export default MobileAppServiceCard;