import { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const categories = [
      "AI Consulting",
      "AI Services",
      "Software Development",
      "Web Development",
      "Web Design UI/UX",  
      "Mobile App Development",
      "Cloud Solutions",
      "Other"
    ]

  return (
    <form  className="flex flex-col gap-3 md:gap-5" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
    >
      <div className="flex flex-col gap-1 items-start">
        <label className="text-[14px] font-semibold  text-[#07324a] capitalize text-left">
          Name
        </label>
        <input
          {...register("firstName")}
          placeholder="First name"
          className="w-full px-2 md:px-4 py-2 md:py-3 border border-[#d9d9d9] rounded-sm md:rounded-lg text-xs md:text-sm outline-none transition focus:border-[#0057ff] box-border"
        />
      </div>

      <div className="flex flex-col gap-1 items-start">
        <label className="text-[14px] font-semibold  text-[#07324a] capitalize text-left">
          Email
        </label>
        <input
          {...register("email")}
          placeholder="Enter your Email"
          className="w-full px-2 md:px-4 py-2 md:py-3 border border-[#d9d9d9] rounded-sm md:rounded-lg text-xs md:text-sm outline-none transition focus:border-[#0057ff] box-border"
        />
      </div>

      <div className="flex flex-col gap-1 items-start">
        <label className="text-[14px] font-semibold  text-[#07324a] capitalize text-left">
          Company Name
        </label>
        <input
          {...register("company")}
          placeholder="Enter your company name"
          className="w-full px-2 md:px-4 py-2 md:py-3 border border-[#d9d9d9] rounded-sm md:rounded-lg text-xs md:text-sm outline-none transition focus:border-[#0057ff] box-border"
        />
      </div>

      <div className="flex flex-col gap-1 items-start">
        <label className="text-[14px] font-semibold  text-[#07324a] capitalize text-left">
          Phone Number
        </label>
        <input
          {...register("phone")}
          placeholder="Enter your phone number"
          className="w-full px-2 md:px-4 py-2 md:py-3 border border-[#d9d9d9] rounded-sm md:rounded-lg text-xs md:text-sm outline-none transition focus:border-[#0057ff] box-border"
        />
      </div>

      <div className="flex flex-col gap-1 items-start">
        <label className="text-[14px] font-semibold  text-[#07324a] capitalize text-left">
          What are you interested in?
        </label>

        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-1 md:mt-3 max-md:grid-cols-1">
          {categories.map((item) => (
            <label key={item} className="flex items-center gap-2 text-[14px] font-normal text-[#07324a] cursor-pointer">
              <input
                type="checkbox"
                value={item}
                {...register("interest")}
                className="h-[14px] w-[14px] md:w-[18px] md:h-[18px] cursor-pointer"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1 items-start">
        <label className="text-[14px] font-semibold  text-[#07324a] capitalize text-left">
          How Can We Help You?
        </label>

        <textarea
          {...register("aboutYou")}
          placeholder="Tell us about your project..."
          className="w-full px-2 md:px-4 py-2 md:py-3 border border-[#d9d9d9] rounded-sm md:rounded-lg text-xs md:text-sm outline-none transition focus:border-[#0057ff] box-border resize-y min-h-[140px]"
        />
      </div>

      <p className="text-xs md:text-sm text-[#10405a]">{data}</p>

      <div className="text-right">
        <button type="submit" className="w-fit px-8 py-3.5 bg-[#1d66fc] text-white  border-none rounded-full text-xs md:text-sm cursor-pointer uppercase  transition duration-300 hover:bg-[#7c37fc]  max-md:w-full md:font-semibold">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;