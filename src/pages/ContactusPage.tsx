import maps from "../assets/maps.png";
// import ContactForm from "../components/ContactForm";
import BrandsFullGreyComponent from "../components/shared/BrandsFullGreyComponent";
import { useEffect, useState } from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactForm1 from "../components/contact/ContactForm1";
import ContactForm from "../components/ContactForm";

interface LocationAddress {
   name: string; 
   street: string; 
   state: string; 
   pin: string; 
   phone: string;
}

const locations = [
  { name: "sydney", className: "right-[23.5%] bottom-[16%]" },
  { name: "delhi", className: "left-[24%] top-[24%]" },
  { name: "singapore", className: "left-[41%] top-[46%]" },
  { name: "perth", className: "left-[48.5%] bottom-[18%]" },
];

const addressDetails: LocationAddress[] = [
  {
    name: 'sydney',
    street: '55 Pyrmont Bridge Road, Pyrmont,',
    state: 'Sydney',
    pin: '2009',
    phone: '+61 2 8123 0997'
  },
  {
    name: 'delhi',
    street: '55 Pyrmont Bridge Road, Pyrmont,',
    state: 'Delhi',
    pin: '110043',
    phone: '+91 2 8123 0997'
  },
  {
    name: 'singapore',
    street: '55 Pyrmont Bridge Road, Pyrmont,',
    state: 'Singapore',
    pin: '34651',
    phone: '+65 2 8123 0997'
  },
  {
    name: 'perth',
    street: '55 Pyrmont Bridge Road, Pyrmont,',
    state: 'Western Austraalia',
    pin: '2009',
    phone: '+61 2 8123 0997'
  }
];

const PinIcon = ({color}: {color: string}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 36 36"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M28.0077 6.14516C25.3347 3.47213 21.7806 2 18.0003 2C14.22 2 10.6659 3.47213 7.99288 6.14516C5.31978 8.81832 3.84766 12.3723 3.84766 16.1526C3.84766 22.8219 8.51014 28.5796 14.9874 29.9827L18.0003 34L21.0133 29.9827C27.4905 28.5795 32.1529 22.8219 32.1529 16.1526C32.1529 12.3723 30.6808 8.81832 28.0077 6.14516ZM18.0003 5.69472C23.7323 5.69472 28.3956 10.3581 28.3956 16.09C28.3956 21.822 23.7323 26.4853 18.0003 26.4853C12.2683 26.4853 7.60499 21.822 7.60499 16.09C7.60499 10.3581 12.2683 5.69472 18.0003 5.69472Z" />
    <path
      className="pulse-circle"
      d="M18 23.3336C21.9274 23.3336 25.1111 20.1498 25.1111 16.2224C25.1111 12.2951 21.9274 9.11133 18 9.11133C14.0727 9.11133 10.8889 12.2951 10.8889 16.2224C10.8889 20.1498 14.0727 23.3336 18 23.3336Z"
    />
  </svg>
);

const ContactusPage = () => {
  const [selectedAddress, setSelectedAddress] = useState('perth');
  const [address, setAddress] = useState<LocationAddress | null>(null);

  useEffect(() => {
      if (selectedAddress) {
          const addressObj = addressDetails.find(x => x.name === selectedAddress);
          setAddress(addressObj ?? null);
      } else {
          setAddress(null);
      }
  }, [selectedAddress]);

  return (
    <>
    <div className="relative flex flex-col">
      <ContactHero/>
      <section className="absolute top-50 md:top-60 py-4 md:py-16 sm:px-6 lg:px-8 w-full mx-auto">
        <div className="container-wrapper-transparent rounded-[23px] border border-purple-200 shadow-[rgba(167,174,255,0.4)_0_15px_53.7px] backdrop-blur-[36.5px]">
          <div className="flex flex-col md:flex-row gap-6 rounded-xl md:rounded-[20px] border border-[#85859e] bg-white px-4 py-4 md:px-6 md:py-10 sm:px-10 sm:py-12">
            <div className="w-full md:w-1/2 md:mb-16 max-md:w-full">
              <label className="block text-xs md:text-sm font-semibold uppercase text-[#6e24fb] text-left">
                Our Offices
              </label>

              <div className="relative w-full mt-2">
                <figure className="m-0 p-0">
                  <img src={maps} alt="office locations map" className="w-full max-w-full"/>
                </figure>

                {locations.map((location) => (
                  <div
                    key={location.name}
                    className={`
                      absolute cursor-pointer
                      ${location.className}
                      ${location.name === selectedAddress ? "scale-[1.4]" : ""}
                      transition-all
                      duration-300
                    `}
                    onClick={() => setSelectedAddress(location.name)}
                  >
                    <PinIcon color={location.name === selectedAddress ? "#c61ee8" : "#7c37fc"}/>
                  </div>
                ))}
              </div>

              <div className="text-xs md:text-sm font-normal leading-[160%] text-[#2f2f2f] mt-2 md:mt-6">
                <h3 className="text-base md:text-2xl font-medium md:mb-2 text-[#212222]">
                  {address?.name.toUpperCase()}
                </h3>

                {address?.street}
                <br />
                {address?.state}, {address?.pin}
                <br />
                {address?.phone}
              </div>
            </div>
            <ContactForm/>
          </div>
      </div>
      </section>
    </div>
      <div className="h-[600px] md:h-[400px]"></div>
      <main className="container-wrapper">
       
      </main>
      

      <BrandsFullGreyComponent />
    </>
  );
};

export default ContactusPage;