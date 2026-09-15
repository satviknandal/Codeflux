import type { ReactNode } from 'react'
import { motion, type Variants } from "framer-motion";
import { CodeIcon } from '../shared/svg/CodeIcon'
import { PhoneIcon } from '../shared/svg/PhoneIcon'
import { WandIcon } from '../shared/svg/WandIcon'
import { CloudIcon } from '../shared/svg/CloudIcon'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'


const edgeServices: Array<{
  icon: ReactNode
  title: string
  desc: ReactNode,
  url: string,
  ctaText: string
}> = [
  {
    icon: <CodeIcon className="w-6 h-6 md:w-10 md:h-10" />,
    title: 'Software Services',
    desc: "Legacy systems slow release cycles and limit innovation. Our architecture-first modernization framework reduces tech debt and accelerates product launches by 30%–50% through AI-integrated SDLC practices. From modernizing legacy platforms to building SaaS products or adding automation, we bring domain-aligned architecture and engineering depth for high-performing systems.",
    url: '',
    ctaText: 'Explore Software Services'
  },
  {
    icon: <PhoneIcon />,
    title: 'Web Design & Development',
    desc: "Siloed data and opaque models create blind spots for decision-makers. We help enterprises unify fragmented data, enforce governance frameworks, and meet regulatory requirements through traceable pipelines and explainable AI. From AI-powered analytics to NLP workflows, our solutions enhance forecast accuracy, reduce compliance exposure, and shorten decision cycles.",
    url: '',
    ctaText: 'Explore Web Services'
  },
  {
    icon: <WandIcon />,
    title: 'AI Consulting & Services',
    desc: "Siloed data and opaque models create blind spots for decision-makers. We help enterprises unify fragmented data, enforce governance frameworks, and meet regulatory requirements through traceable pipelines and explainable AI. From AI-powered analytics to NLP workflows, our solutions enhance forecast accuracy, reduce compliance exposure, and shorten decision cycles.",
    url: '',
    ctaText: 'Explore AI Services'
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud Solutions',
    desc: "Unstructured cloud adoption often increases cost and complexity. We design cloud-native architectures using infrastructure-as-code, strong security frameworks, and automated policy enforcement. From cloud migration to hybrid orchestration, we help enterprises reduce cloud costs by 15%–30%, speed up deployments, and ensure compliance.",
    url: '',
    ctaText: 'Explore Cloud Solutions'
  }
]

const containerVariants : Variants= {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const TechEdge = () => {
  return (
    <section
      aria-labelledby="edge-title"
      className="w-full bg-[#f9f9f9] text-[#172235] bg-edge-pattern"
    >
      <div className="mx-auto w-[var(--content-width)] py-12 md:py-[86px] md:pb-24">
        <motion.div
          className="mx-auto max-w-[880px] text-center"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <h2
            id="edge-title"
            className="mb-[22px] text-[24px] md:text-[clamp(38px,4.4vw,48px)] font-medium leading-[1.08] text-[#070735]"
          >
            Own The Edge
          </h2>

          <p className="mx-auto text-sm md:text-lg leading-[1.45] text-[#131827]">
            We build custom digital solutions that solve real problems from
            streamlining operations and automating workflows to launching new
            products and services.
          </p>

          <p className="mt-7 mx-auto text-sm md:text-lg leading-[1.45] text-[#131827]">
            And now,{' '}
            <strong className="font-black">
              AI-powered Accelerated Innovation
            </strong>
            , we're helping teams test ideas faster, deliver results sooner,
            and stay ahead of the competition without the cost or complexity of
            traditional software projects.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-[82px] grid gap-1 md:gap-[10px] md:grid-cols-2 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount: 0.4}}
        >
          {edgeServices.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: '0 20px 45px rgba(23, 34, 53, 0.15)',
                transition: {
                  type: 'spring',
                  stiffness: 350,
                  damping: 18,
                },
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="rounded-lg border border-[#bfe2f0] bg-[#e8f4fa] px-4 py-4 md:px-[34px] md:py-8 flex flex-col gap-8 justify-between"
              
            >
              <motion.span
                whileHover={{rotate: 10, scale: 1.10}}
                transition={{type: 'spring', stiffness: 400, damping: 12}}
                className="place-items-center rounded-full bg-[#b2e9ff] p-2 text-[#161d2c] md:p-3 inline-grid w-[64px] h-[64px]"
              >
                {service.icon}
              </motion.span>
              <div>
                <h3 className="text-md font-semibold text-[#172235] md:text-xl md:font-medium mb-4">
                  {service.title}
                </h3>
                <p className="text-xs text-[#6a7280] md:text-[14px] md:leading-5">
                  {service.desc}
                </p>
              </div>


            <Link to={service.url}className="w-fit inline-flex items-center gap-2 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-300 hover:gap-4 px-6 py-3.5">
              {service.ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechEdge