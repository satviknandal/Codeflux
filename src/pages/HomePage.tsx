import TechEdge from '../components/TechEdge'
import WhyChooseUs from '../components/home/WhyChooseUs';
import DifferentApproach from '../components/home/DifferentApproach';
import LatestArticles from '../components/home/LatestArticles';
import { LatestArticlesData } from '../shared/data/LatestArticlesData';
import TechServices from '../components/home/TechServices';
import HomeCta from '../components/home/HomeCta';
import HeroNew from '../components/HeroNew';

const HomePage = () => {
  return <>
  <TechServices/>
    <WhyChooseUs/>
    <DifferentApproach/>
    {/* <TechEdge/> */}
    <HomeCta/>
    <LatestArticles data={LatestArticlesData} columns={3} gap={16}/>
  </>
}

export default HomePage
