const Gumtree = "/assets/brands/Gumtree.png";
const McGrath = "/assets/brands/McGrath.png";
const FlightCentre = "/assets/brands/FlightCentre.png";
const Funraisin = "/assets/brands/funraisin.png";
const Reapit = "/assets/brands/Reapit.png";
const GoSwitch = "/assets/brands/GoSwitch.png";
const Leasesuite = "/assets/brands/logo_leasesuite.png";
const Savills = "/assets/brands/savills-new.png";
const BikeExchange = "/assets/brands/BikeExchange.png";
const Clubworx = "/assets/brands/clubworx.png";
const Pureprofile = "/assets/brands/Pureprofile.png";
const VIPC = "/assets/brands/VIPC_Primary_Blue.png";
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
