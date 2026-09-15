import Gumtree from "../../assets/brands/Gumtree.png";
import McGrath from "../../assets/brands/McGrath.png";
import FlightCentre from "../../assets/brands/FlightCentre.png";
import Funraisin from "../../assets/brands/funraisin.png";
import Reapit from "../../assets/brands/Reapit.png";
import GoSwitch from "../../assets/brands/GoSwitch.png";
import Leasesuite from "../../assets/brands/logo_leasesuite.png";
import Savills from "../../assets/brands/savills-new.png";
import BikeExchange from "../../assets/brands/BikeExchange.png";
import Clubworx from "../../assets/brands/clubworx.png";
import Pureprofile from "../../assets/brands/Pureprofile.png";
import VIPC from "../../assets/brands/VIPC_Primary_Blue.png";

const Brands = () => {
  const brands = [
    { src: Gumtree, alt: "Gumtree", width: 165 },
    { src: FlightCentre, alt: "Flight Centre", width: 65 },
    { src: McGrath, alt: "McGrath", width: 142 },
    { src: Funraisin, alt: "Funraisin", width: 161 },
    { src: Reapit, alt: "Reapit", width: 154 },
    { src: Leasesuite, alt: "LeaseSuite", width: 163 },
    { src: Savills, alt: "Savills", width: 61 },
    { src: GoSwitch, alt: "GoSwitch", width: 124 },
    { src: BikeExchange, alt: "Bike Exchange", width: 161 },
    { src: Clubworx, alt: "ClubWorx", width: 128 },
    { src: Pureprofile, alt: "Pureprofile", width: 165 },
    { src: VIPC, alt: "VIPC", width: 144 },
  ];

  return (
    <div className="relative overflow-hidden text-center">
      <div className="flex w-max items-center gap-12 animate-brand-scroll hover:[animation-play-state:paused] will-change-transform">
        {[...brands, ...brands].map((brand, index) => (
          <img
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="shrink-0"
            style={{ width: `${brand.width}px` }}
          />
        ))}
      </div>

      {/* Left Fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[311px]"
        style={{ background: "radial-gradient(93.12% 200.86% at 100% 49.61%, rgba(244,249,249,0) 0%, rgb(244,249,249) 100%)"}}
      />

      {/* Right Fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[311px] rotate-180"
        style={{background: "radial-gradient(93.12% 200.86% at 100% 49.61%, rgba(244,249,249,0) 0%, rgb(244,249,249) 100%)"}}
      />
    </div>
  );
};

export default Brands
