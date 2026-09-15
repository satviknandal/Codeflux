import { HeroItem } from './Animation';
import Services from './Services';
import { TypingHeading } from './TypingHeading';

const Hero = () => {
  return (
    <section aria-labelledby="hero-title" className='flex flex-col overflow-hidden'>
      <div className="mx-auto flex w-full flex-col items-center px-4 pt-32 pb-20 text-center sm:px-6 md:pt-40 lg:px-8">
        <p className="mb-2 text-sm font-normal tracking-wide text-white md:text-sm">
          Transforming Ideas into powerful Digital Soutions
        </p>
        <HeroItem>
          <TypingHeading
            data="Transform Your Business with Digital Solutions"
            className="
              text-[clamp(48px,6vw,72px)]
              leading-20
              font-normal
              tracking-tight
              bg-gradient-to-b
              from-[#24c8db]
              via-[#1292be]
              to-[#0588b4]
              bg-clip-text
              text-transparent
              drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]
            "
          />
        </HeroItem>
        <p className="mt-4 mb-0 max-w-2xl text-sm font-normal leading-relaxed text-white/80 md:text-lg md:leading-[1.4]">
          Our Performance is your success. Our passion is innovation. Our expertise is unmatched. Connect to find out more
        </p>
      </div>
      <Services />
    </section>
  );
};

export default Hero;