interface AIBusinessBannerProps {
    title: string;
    subheading: string;
    image: string;
    buttonText: string;
}

const AIBusinessBanner = ({title, subheading, image, buttonText}: AIBusinessBannerProps) => {

    const renderCard = () => {
      return <div className={`lineargradientpurple max-h-[310px]`}>
        <div className='container-wrapper-transparent'>
            <div className="relative flex flex-col md:flex-row overflow-hidden">
                <section className="mx-auto flex flex-col items-start py-6 md:py-16">
                    <h3 className="text-2xl md:text-3xl mb-4 leading-normal font-normal text-purple-400">{title}</h3>
                    <label className="text-gray-300 text-sm mb-8 z-2 w-full md:w-[50%]">{subheading}</label>
                    <button className="
                    cursor-pointer
                    bg-[#a07cdb]
                    inline-flex items-center
                    rounded-full
                    border border-[#312451]
                    px-4 md:px-6 py-3 md:py-2
                    text-sm md:text-md tracking-[0.4px]
                    text-[#0d0912] font-medium
                    transition-colors duration-200
                    hover:bg-[#c118ff] hover:text-white z-2
                ">{buttonText}</button>
                </section>
                <img src={image} className="absolute opacity-5 md:opacity-100 -right-[100px] bottom-0 md:bottom-2.5 z-1 max-h-[250px] md:max-h-[310px]"/>
            </div>
        </div>
      </div>
    }

    return renderCard();
};

export default AIBusinessBanner;
