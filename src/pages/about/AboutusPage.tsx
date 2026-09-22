
import BrandsFullGreyComponent from '../../components/shared/BrandsFullGreyComponent';
import NeedTeam from '../../components/shared/NeedTeam';
import satvik from '../../assets/team/satvik.jpg';
import IntelligenceIcon from '../../shared/svg/IntelligenceIcon';
import GaugeIcon from '../../shared/svg/GaugeIcon';
import ArtificialIntelligenceIcon from '../../shared/svg/ArtificialIntelligenceIcon';
import AboutContent from './AboutContent';
import AboutValuesMission from './AboutValuesMission';
import AboutServices from './AboutServices';
import { ContainerVariant, ItemVariant } from '../../shared/MotionSetting';
import { motion } from 'framer-motion';

const AboutusPage = () => {
  const timeline = [
    {
      year: "2026",
      img: satvik,
      text: "Founded by Satvik Nandal, CodeFlux was born in the chaos of early AI Adoption - a time when all business were brainstorming and looking to adopt AI in their existing platforms",
      align: '',
      classes: 'justify-end'
    },
    {
      year: "2026 - onwards",
      img: "https://cdn.prod.website-files.com/67ed4ab7f914accf87aa070c/684a023ba116646960018c69_PinterestSnapchat.avif",
      text: "Expanded capabilities: Into AI and Softwre engineering",
      align: 'left',
      classes: 'pt-12 items-end mr-50'
    },
    {
      year: "2021",
      img: "https://cdn.prod.website-files.com/67ed4ab7f914accf87aa070c/684a03e0c0d1dad3c7ae2de4_viralspace-2x.avif",
      text: "Acquired Viralspace.ai, a fast growing startup in AI for creative",
      align: '',
      classes: 'ml-[60px] mt-[-100px]'
    },
    {
      year: "2022",
      img: "https://cdn.prod.website-files.com/67ed4ab7f914accf87aa070c/68481c55fb674f4eae9ab480_17.avif",
      text: "Acquired AdLib, expanding into the Google ecosystem to bring creative and media even closer together",
      align: 'left',
      classes: 'w-[50%] items-end mr-[80px] mt-[-100px]'
    },
    {
      year: "2022",
      img: "https://cdn.prod.website-files.com/67ed4ab7f914accf87aa070c/68481c5530121b895be19b24_3576379.avif",
      text: "Added TikTok",
      align: 'right',
      classes: 'w-[50%] items-start ml-[140px] mt-[-160px]'
    },
    {
      year: "2024",
      img: "https://cdn.prod.website-files.com/67ed4ab7f914accf87aa070c/6849c08d4ae9989fb3b25140_19%20(1).avif",
      text:
        "Recognized as an industry leader by Forrester and PriceWaterhouseCoopers",
        align: 'left',
      classes: 'w-[60%] items-end mr-[170px] mt-[-80px]'
    },
    {
      year: "2024",
      img: "https://cdn.prod.website-files.com/67ed4ab7f914accf87aa070c/684a0df262230bceb195317e_Our%20Path%20to%20Success-R-2024-2x.avif",
      text: "Launched ADVANCE, our flagship event",
      align: 'right',
      classes: 'w-[50%] items-start ml-[140px] mt-[-160px]'
    },
    {
      year: "2025",
      img: "https://cdn.prod.website-files.com/67ed4ab7f914accf87aa070c/68481c547bb1a73631ae0f7c_Frame%201538233368.avif",
      text: "Added Reddit to our list of integrated platforms",
      align: 'left',
      classes: 'w-[60%] items-end mr-[80px] mt-[-80px]'
    },
  ];

  const keystrengths = [
      {
        icon: <IntelligenceIcon className="w-8 h-8 text-yellow-400" />,
        title: "Intelligence drives performance.",
        text: "We believe in scalable solutions something that connect—visually, emotionally, and strategically. That’s not art for art’s sake. That’s intelligence with a job to do.",
      },
      {
        icon: <GaugeIcon className="w-8 h-8 text-yellow-400" />,
        title: "Speed wins.",
        text: "The faster you launch, the faster you learn. In a landscape that changes daily, slow isn’t safe—it’s expensive.",
      },
      {
        icon: <ArtificialIntelligenceIcon className="w-8 h-8 text-yellow-400" />,
        title: "AI is the baseline.",
        text: "AI should help you make better decisions before launch. Smartly’s AI doesn’t just optimize. It orchestrates.",
      },
    ];

  const Content = ({showcontentonly = false}) => {
    return  <header className="relative overflow-hidden bg-[#012546] py-8 md:py-20">
      {/* <header className="relative overflow-hidden bg-[#3798e3] py-8 md:py-20"> */}
      {!showcontentonly && <h2 className="mb-8 md:mb-16 text-center text-2xl md:text-3xl font-normal text-white">Our path to success</h2>}
      <div className="relative z-20 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
      {/* <div className="pt-0 pb-8 md:pb-24"> */}
      <div className="">

      {!showcontentonly && 
      <div className="relative w-full flex flex-row justify-center">
      <img src="https://cdn.prod.website-files.com/67ed4ab7f914accf87aa070c/68481825101f19db01fca89e_Group%205329.svg" alt="" className="h-auto absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block"/>
      <div className="w-full flex flex-col gap-0 item-center">

        {timeline.map((item, index) => {
          const isFirst = index === 0;
          const displayOrder = isFirst ? "row" : item.align === "left" ? "flex-row-reverse" : "row";
          return (
            <div key={index} className={`flex flex-row items-center gap-30 ${displayOrder}`}>
              {/* Image */}
              <div className={`flex w-[50%] ${item.classes}`}>
                {index === 0 && <img
                  src={item.img}
                  alt=""
                  className="max-h-40 object-contain rounded-full"
                />}
              </div>
              <div className={`flex w-[50%] flex-col pl-8 ${item.classes}`}>
                {index > 0 &&
                  <div className={`flex text`}>
                    <img  src={item.img} alt="" className="max-h-50 object-contain mb-6"/>
                  </div>
                }
                <div className="mb-0 text-3xl font-semibold text-[#f4cd0c]">
                  {item.year}
                </div>
                <p className={`w-[60%] ${item.align === "left" ? 'text-right': 'text-left' } text-base leading-relaxed text-white/90`}>
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}

      </div>
      </div>
    }


      {/* How we think */}
        {/* <section className="mt-16 md:mt-32"> */}
        <motion.section
            variants={ContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

      
        <div className="text-center">
          <motion.h3 variants={ItemVariant} className="text-2xl md:text-3xl font-normal text-white">
            How we think
          </motion.h3>
        </div>
        <motion.div variants={ContainerVariant} className="mt-4 md:mt-10 grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keystrengths.map((item, index) => (
            <motion.div key={index} variants={ItemVariant} className="rounded-xl md:rounded-3xl bg-white/2 border md:border-2 border-white/3 p-4 md:p-8 backdrop-blur">
              <div className="mb-3 md:mb-4">{item.icon}</div>
              <h4 className="mb-2 md:mb-4 text-md md:text-xl font-normal text-[#71c1ff]">{item.title}</h4>
              <p className="text-sm md:text-md text-white/80">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      </div>
      </div>
      </div>
      {/* Background transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
    </header>
  }
  
  return (
    <>
      <AboutContent/>
      <Content showcontentonly={true}/>
      <AboutServices/>
      <AboutValuesMission/>
      <BrandsFullGreyComponent/>
      <main className="container-wrapper">
        <NeedTeam/>
      </main>
    </>
  )
}

export default AboutusPage
