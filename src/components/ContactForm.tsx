import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  services: string[];
  message: string;
}

interface ApiError {
  loc: string[];
  msg: string;
  type: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      services: [],
      message: "",
    },
  });

  const initialSuccessMsg = { refNumber: "", message: "" };
  const [successMsg, setSuccessMsg] = useState(initialSuccessMsg);
  const [successMessage, setSuccessMessage] = useState("");
  const [apiErrors, setApiErrors] = useState<ApiError[]>([]);

  const categories = [
    "AI Consulting",
    "AI Services",
    "Software Development",
    "Web Development",
    "Web Design UI/UX",
    "Mobile App Development",
    "Cloud Solutions",
    "Other",
  ];

  const onSubmit = async (formData: ContactFormData) => {
    setSuccessMessage("");
    setSuccessMsg(initialSuccessMsg);
    setApiErrors([]);

    try {
      const response = await fetch("https://codeflux.com.au/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // FastAPI validation error
      if (response.status === 422) {
        setApiErrors(result.detail || []);
        return;
      }

      // Other API errors
      if (!response.ok) {
        setApiErrors([
          {
            loc: [],
            msg: result.message || "Something went wrong. Please try again.",
            type: "api_error",
          },
        ]);
        return;
      }

      // Success
      setSuccessMessage(
        result.message || "Your message has been sent successfully."
      );
      setSuccessMsg({ refNumber: result.id, message: result.message || "Your message has been sent successfully."})
      

      reset();
    } catch (error) {
      console.error(error);

      setApiErrors([
        {
          loc: [],
          msg: "Unable to connect to the server. Please try again later.",
          type: "network_error",
        },
      ]);
    }
  };

  return (
    <form
      noValidate
      className="w-full md:w-1/2 flex flex-col gap-3 md:gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* NAME */}
      <div className="flex flex-col gap-1 items-start">
        <label className={`text-sm font-medium text-gray-800 ${errors.name ? "text-red-600" : "text-gray-800"}`}>Name</label>

        <input
          {...register("name", {
            required: "Name is required",
            maxLength: {
              value: 55,
              message: "Name must not exceed 55 characters",
            },
            validate: (value) =>
              value.trim().length > 0 || "Name is required",
          })}
          placeholder="Enter your name"
          className={`w-full px-2 md:px-4 py-2 md:py-3 border rounded-sm md:rounded-md text-xs md:text-sm outline-none transition box-border ${
            errors.name
              ? "border-red-500"
              : "border-[#d9d9d9] focus:border-[#0057ff]"
          }`}
        />

        {errors.name && <span className="text-xs text-red-600">{errors.name.message}</span>}
      </div>

      {/* EMAIL */}
      <div className="flex flex-col gap-1 items-start">
        <label className={`text-sm font-medium text-gray-800 ${errors.email ? "text-red-600" : "text-gray-800"}`}>Email</label>

        <input
          {...register("email", {
            required: "Email is required",
            validate: (value) =>
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ||
              "Please enter a valid email address",
          })}
          placeholder="Enter your email"
          className={`w-full px-2 md:px-4 py-2 md:py-3 border rounded-sm md:rounded-md text-xs md:text-sm outline-none transition box-border ${
            errors.email
              ? "border-red-500"
              : "border-[#d9d9d9] focus:border-[#0057ff]"
          }`}
        />

        {errors.email && <span className="text-xs text-red-600">{errors.email.message}</span>}
      </div>

      {/* COMPANY */}
      <div className="flex flex-col gap-1 items-start">
        <label className={`text-sm font-medium text-gray-800 ${errors.company ? "text-red-600" : "text-gray-800"}`}>Company Name</label>

        <input
          {...register("company", {
            required: "Company name is required",
            maxLength: {
              value: 55,
              message: "Company name must not exceed 55 characters",
            },
            validate: (value) =>
              value.trim().length > 0 || "Company name is required",
          })}
          placeholder="Enter your company name"
          className={`w-full px-2 md:px-4 py-2 md:py-3 border rounded-sm md:rounded-md text-xs md:text-sm outline-none transition box-border ${
            errors.company
              ? "border-red-500"
              : "border-[#d9d9d9] focus:border-[#0057ff]"
          }`}
        />

        {errors.company && <span className="text-xs text-red-600">{errors.company.message}</span>}
      </div>

      {/* PHONE */}
      <div className="flex flex-col gap-1 items-start">
        <label className={`text-sm font-medium text-gray-800 ${errors.phone ? "text-red-600" : "text-gray-800"}`}>Phone Number</label>

        <input
          {...register("phone", {
            required: "Phone number is required",
            validate: (value) =>
              /^\d{8,10}$/.test(value.trim()) ||
              "Phone number must contain 8-10 digits",
          })}
          placeholder="Enter your phone number"
          inputMode="numeric"
          className={`w-full px-2 md:px-4 py-2 md:py-3 border rounded-sm md:rounded-md text-xs md:text-sm outline-none transition box-border ${
            errors.phone
              ? "border-red-500"
              : "border-[#d9d9d9] focus:border-[#0057ff]"
          }`}
        />

        {errors.phone && <span className="text-xs text-red-600">{errors.phone.message}</span>}
      </div>

      {/* SERVICES */}
      <div className="flex flex-col gap-3">
        <label className={`text-sm font-medium text-gray-800 ${errors.services ? "text-red-600" : "text-gray-800"}`}>What are you interested in?</label>

        <div className="flex flex-wrap gap-3">
          {categories.map((item) => (
            <div className="w-full md:w-[45%] flex cursor-pointer items-center gap-2.5">
            <label
              key={item}
              className="flex items-center gap-1 md:gap-2 text-xs md:text-[14px] font-normal text-gray-900 cursor-pointer"
            >
              <input
                type="checkbox"
                value={item}
                {...register("services", {
                  validate: (value) =>
                    value?.length > 0 ||
                    "Please select at least one service",
                })}
                className="w-3.5 h-3.5 md:h-5 md:w-5 cursor-pointer appearance-none rounded-[4px] border border-[#4b497e] bg-white transition checked:border-[#632499] checked:bg-[#692cda] focus:ring-2 focus:ring-[#3ca1ff]/30"
              />

              {item}
            </label>
            </div>
          ))}
        </div>

        {errors.services && <span className="text-xs text-red-600">{errors.services.message}</span>}
      </div>

      {/* MESSAGE */}
      <div className="flex flex-col gap-1 items-start mt-2">
        <label className={`text-sm font-medium text-gray-800 ${errors.message ? "text-red-600" : "text-gray-800"}`}>How Can We Help You?</label>

        <textarea
          {...register("message", {
            required: "Message is required",
            validate: (value) => {
              const trimmed = value.trim();

              if (!trimmed) {
                return "Message is required";
              }

              const wordCount = trimmed
                .split(/\s+/)
                .filter(Boolean).length;

              if (wordCount > 500) {
                return "Message must not exceed 500 words";
              }

              return true;
            },
          })}
          placeholder="Tell us about your project..."
          className={`w-full px-2 md:px-4 py-2 md:py-3 border rounded-sm md:rounded-md text-xs md:text-sm outline-none transition resize-y min-h-[140px] box-border ${
            errors.message
              ? "border-red-500"
              : "border-[#d9d9d9] focus:border-[#0057ff]"
          }`}
        />

        {errors.message && <span className="text-xs text-red-600">{errors.message.message}</span>}
      </div>

      {/* API ERROR */}
      {apiErrors.length > 0 && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200">
          {apiErrors.map((error, index) => (
            <p key={index} className="text-sm text-red-600">
              {error.msg}
            </p>
          ))}
        </div>
      )}

      {/* SUCCESS */}
      {successMessage && (
        <div className="p-3 rounded-lg bg-green-50 border border-green-200">
          <p className="text-sm text-green-600">
            {successMessage}
          </p>
          <p>
            <strong>Reference Number</strong> {successMsg.refNumber}</p>
        </div>
      )}

      {/* BUTTON */}
      <div className="mt-2 flex w-full justify-start">
        <button type="submit" className="cursor-pointer group relative w-full overflow-hidden rounded-full bg-[#271b5a] px-8 py-3.5 text-center text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#433389] hover:shadow-lg sm:w-auto sm:min-w-[180px]">
            <span className="relative z-10 text-base font-medium">Submit here</span>
            <span className="absolute inset-0 rounded-[5px] border border-[#1f1e40] transition-all duration-300 group-hover:scale-[1.02]"></span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;