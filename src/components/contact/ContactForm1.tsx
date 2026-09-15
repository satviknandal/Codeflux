import { useState } from "react";

interface ContactFormData {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  message: string;
  services: string[];
}

const services = [
  "AI Consulting",
  "AI Services",
  "Software Development",
  "Web Development",
  "Mobile App Development",
  "Cloud Solutions",
  "Web Design UI/UX",
  "Other"
];

const ContactForm1= () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
    services: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1130px] rounded-[23px] border border-[#3ca1ff] p-5 shadow-[rgba(167,174,255,0.4)_0_15px_53.7px] backdrop-blur-[36.5px]">
          <div className="rounded-[20px] border border-[#85859e] bg-white px-6 py-16 text-center sm:px-10">
            <h3 className="text-xl font-semibold text-[#071332]">Thank you!</h3>
            <p className="mt-2 text-[#4b497e]">Your submission has been received.</p>
            <button type="button" onClick={() => setSubmitted(false)} className="mt-6 rounded-[5px] bg-[#1f1e40] px-8 py-3.5 text-white transition hover:bg-[#302e5c]">
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2">
            <div className="flex flex-col gap-5">
              <FormField
                label="First name"
                name="firstName"
                placeholder="Enter your name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <FormField
                label="Email address"
                name="email"
                type="email"
                placeholder="Email address*"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FormField
                label="Company Name"
                name="companyName"
                placeholder="Enter your company name*"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
              <FormField
                label="Phone number"
                name="phone"
                type="tel"
                placeholder="Phone number*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-[0.9375rem]">
              <label htmlFor="message" className="text-sm font-medium text-gray-800">How Can We Help You?</label>
              <textarea
                id="message"
                name="message"
                maxLength={5000}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={6}
                className="w-full resize-y rounded-[5px] border border-[rgba(75,73,126,0.4)] bg-white/[0.05] px-5 py-4 text-[0.9375rem] leading-[156.25%] text-[#071332] outline-none transition placeholder:text-gray-400 focus:border-[#3ca1ff] focus:ring-2 focus:ring-[#3ca1ff]/20"
              />
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-sm font-medium text-gray-800">What are you interested in?</h3>

              <div className="flex flex-wrap gap-3">
                {services.map((service) => {
                  const checked = formData.services.includes(service);

                  return (
                    <label key={service} className="w-[45%] flex cursor-pointer items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => handleServiceChange(service)}
                        className="h-5 w-5 cursor-pointer appearance-none rounded-[4px] border border-[#4b497e] bg-white transition checked:border-[#632499] checked:bg-[#692cda] focus:ring-2 focus:ring-[#3ca1ff]/30"
                      />
                      <span className="text-sm font-normal text-black">
                        {service}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            <div className="mt-6 flex w-full justify-start">
              <button
                type="submit"
                className="cursor-pointer group relative w-full overflow-hidden rounded-full bg-[#271b5a] px-8 py-3.5 text-center text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#433389] hover:shadow-lg sm:w-auto sm:min-w-[180px]"
              >
                <span className="relative z-10 text-base font-medium">Submit here</span>
                <span className="absolute inset-0 rounded-[5px] border border-[#1f1e40] transition-all duration-300 group-hover:scale-[1.02]" />
              </button>
            </div>
          </form>
};

interface FormFieldProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const FormField = ({
  label,
  name,
  placeholder,
  value,
  type = "text",
  required = false,
  onChange,
}: FormFieldProps) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-800">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={256}
        required={required}
        className="h-[46px] w-full rounded-[5px] border border-[rgba(75,73,126,0.4)] bg-white/[0.05] px-3 text-[0.9375rem] text-[#071332] outline-none transition placeholder:text-gray-400 focus:border-[#3ca1ff] focus:ring-2 focus:ring-[#3ca1ff]/20"
      />
    </div>
  );
};

export default ContactForm1;
