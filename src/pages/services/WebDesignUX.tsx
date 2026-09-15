import NeedTeam from '../../components/shared/NeedTeam';
import FAQs from '../../components/faq/FAQs';
import { WebDesignFaqs } from '../../shared/Faq';
import UIUXProcess from '../../components/uiux/UIUXProcess';
import UIUXIndustries from '../../components/uiux/UIUXIndustries';
import UiUXServices from '../../components/uiux/UIUXServices';
import UIUXWhyChooseUs from '../../components/uiux/UIUXWhyChooseUs';
import UIUXHero from '../../components/uiux/UIUXHero';

const WebDesignUX = () => {

  return (
    <>
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
