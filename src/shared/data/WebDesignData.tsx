import DesignIcon from "../svg/DesignIcon";
import RocketIcon from "../svg/RocketIcon";
import SoftwareCodeIcon from "../svg/SoftwareCodeIcon";

const DigitalServicesData = [
    {
      title: "Website Design",
      description: "Creating beautifully designed websites tailored to your brand's specific guidelines. We build professional websites that leave a lasting impression on visitors. We focus on delivering a product that looks great and performs exceptionally well.",
      icon: <RocketIcon width={24} height={24} strokeWidth={1} className="text-white"/>
    },
    {
      title: "User Experience",
      description: "Boosting user engagement with intuitive and immersive design. Our focus on user experience can only improve a website's performance. We create engaging, user-friendly websites that encourage visitors to spend more time on your site and take desired actions.",
      icon: <DesignIcon width={24} height={24} className="text-white"/>
    },
    {
      title: "Responsive Design",
      description: "Crafting mobile-friendly websites that look great on all devices. Our responsive web design provides a seamless user experience across all screen sizes. Your website has to be visually appealing, accessible, and functional on smartphones, tablets, and desktops.",
      icon: <SoftwareCodeIcon width={24} height={24} className="text-white"/>
    }
  ];

export {
    DigitalServicesData
}