const NeedTeam = () => {
  return (
    <div
      className="
        relative overflow-hidden flex flex-col md:flex-row justify-between items-center
        rounded-lg md:rounded-[30px]
        px-6 md:px-[45px] py-6 md:py-[70px]
        shadow-[10px_10px_40px_rgba(0,0,0,0.05),-10px_0px_40px_rgba(0,0,0,0.05)]
        bg-[radial-gradient(100%_260.48%_at_0%_100%,#2a7ab7_0%,#0d4a78_100%)]
      "
    >
      <div className="md:w-1/2">
        <h3
          className="
            text-lg md:text-[30px] font-bold text-white
            m-0 mb-5
            pt-5 px-6 md:px-[25px]
            bg-[url('http://www.softwareseni.com/wp-content/themes/ssau-theme/assets/img/ssau-2023/partnership/partnership-header-cracket-bottom.svg'),url('http://www.softwareseni.com/wp-content/themes/ssau-theme/assets/img/ssau-2023/partnership/partnership-header-cracket.svg')]
            bg-[position:100%_100%,0_0]
            bg-no-repeat
          "
        >
          Need a reliable team to help achieve your software goals?
        </h3>

        <p className="px-6 md:px-[25px] text-white text-sm md:text-base md:leading-[21px] font-normal">
          Drop us a line! We'd love to discuss your project.
        </p>
      </div>

      <div className="md:w-1/2 text-right">
        <button
          className="
            cursor-pointer
            bg-[#8accff]
            mt-10 ml-6
            inline-flex items-center
            md:min-w-[155px]
            rounded-full
            border-[1.5px] border-[#07324a]
            px-6 md:px-[30px] py-3 md:py-[10px]
            font-medium tracking-[0.4px]
            text-[#07324a]
            transition-colors duration-200
            hover:bg-[#07324a] hover:text-white
          "
        >
          <span className="text-sm md:text-base">GET IN TOUCH</span>
        </button>
      </div>
    </div>
  );
};

export default NeedTeam;
