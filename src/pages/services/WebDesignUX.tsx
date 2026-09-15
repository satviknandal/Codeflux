import NeedTeam from '../../components/shared/NeedTeam';
import FAQs from '../../components/faq/FAQs';
import { WebDesignFaqs } from '../../shared/Faq';
import uxbannerbg from "../../assets/uxbg.webp";
import UIUXProcess from '../../components/uiux/UIUXProcess';
import UIUXIndustries from '../../components/uiux/UIUXIndustries';
import UiUXServices from '../../components/uiux/UIUXServices';
import UIUXWhyChooseUs from '../../components/uiux/UIUXWhyChooseUs';
import UIUXHero from '../../components/uiux/UIUXHero';

const WebDesignUX = () => {
  
  const DigitalBanner = () => {
    return <div className='py-12 relative h-[600px] overflow-hidden flex flex-col justify-center radialgradient'>
    <div className='container-wrapper-transparent z-10 relative pl-6 '>
        <label className='font-normal text-white text-sm ml-1'>Website Design & UX</label>
        <h1 className='text-5xl text-sky-400 uppercase leading-16 font-normal '>
          Elevating
          <div className='text-sky-200 text-bold text-7xl  bg-gradient-to-r from-violet-600 via-cyan-200 to-white bg-clip-text text-transparent'>Forward Thinking</div>
           User Experience</h1>
        <p className='text-white mt-6 text-lg'>Crafting websites that elevate your brand and enhance user experience. We specialise in designing custom websites that are not only visually compelling but also strategically aligned with your business objectives. Our team combines creativity with functionality to deliver websites that captivate audiences and convert visitors into loyal customers.</p>
    </div>
      {/* <GradientDots duration={20} className='opacity-50' /> */}
      <img src={uxbannerbg} className='w-full absolute top-0 opacity-50'/>
    </div>
  }

  return (
    <>
      {/* <DigitalBanner/> */}
      <UIUXHero/>
      <UiUXServices/>
      <UIUXIndustries/>
      <UIUXProcess/>
      <UIUXWhyChooseUs/>
      <main className="container-wrapper">
        <FAQs title="Our Website Design FAQs" faqs={WebDesignFaqs}/>
      </main>
      <main className="container-wrapper">
        <NeedTeam/>
      </main>
    </>
  )
}

export default WebDesignUX
