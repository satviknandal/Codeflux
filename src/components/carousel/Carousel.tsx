import { useState } from "react";

type CarouselCard = {
  title: string;
  description: string;
  image: string;
};

interface CarouselProps {
  data: CarouselCard[];
  width?: string;
}

const visibleCards = 3;

const Carousel = ({ data, width = "w-full" }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = Math.max(data.length - visibleCards, 0);
  const canMoveBackward = activeIndex > 0;
  const canMoveForward = activeIndex < maxIndex;
  const visibleItems = data.slice(activeIndex, activeIndex + visibleCards);

  if (!data.length) {
    return null;
  }

  const moveBackward = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  const moveForward = () => {
    setActiveIndex((current) => Math.min(current + 1, maxIndex));
  };

  return (
    <section className="radialgradientpink py-14 text-black">
      <div className={`container-wrapper-transparent items-center justify-center`}>
        <div className={`flex flex-col mx-auto ${width}`}>
          <div className={`mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between`}>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-normal md:text-4xl text-white">
                Industries We Transform with AI
              </h2>
              <p className="mt-4 leading-5 md:text-center text-sm md:text-md text-gray-200">
                AI is not one-size-fits-all. Every industry has unique data patterns,
                regulatory requirements, and operational challenges.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Previous industry"
                onClick={moveBackward}
                disabled={!canMoveBackward}
                className="grid h-11 w-11 place-items-center rounded-full border border-pink-300 bg-pink-200 text-xl text-sky-900 transition hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-35"
              >
                &#8249;
              </button>
              <button
                type="button"
                aria-label="Next industry"
                onClick={moveForward}
                disabled={!canMoveForward}
                className="grid h-11 w-11 place-items-center rounded-full border border-pink-300 bg-pink-200 text-xl text-pink-900 transition hover:bg-pink-300 hover:border-pink-500 disabled:cursor-not-allowed disabled:opacity-35"
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {visibleItems.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#c0ddf3]/25 bg-[#e3f3ff]/10 shadow-sm"
              >
                <img src={item.image} className="rounded-tl-lg rounded-tr-lg"/>
                <div className="p-6">
                  <h3 className="text-md md:text-xl font-medium text-pink-100">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-pink-100">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-pink-400" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
