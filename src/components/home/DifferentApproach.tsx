import React from "react";
import { motion } from "framer-motion";
import { Zap, Bug, Settings, Cpu, Smartphone, Link2, Code2, Search } from "lucide-react";
import codefluxLogo from "../../assets/logoIcon.png"
import mastercardLogo from "../../assets/payment/mastercard.svg";
import visaLogo from "../../assets/payment/visa.png";
import payIdLogo from "../../assets/payment/payid.png";
import nabLogo from "../../assets/payment/nab.png";
import commBankLogo from "../../assets/payment/commbank.png";
import azureLogo from "../../assets/icons/microsoft-azure-icon.webp";
import reactLogo from "../../assets/icons/reactjs-icon.webp";
import dotnetLogo from "../../assets/icons/dotnetcore-original.svg";
import kubernetesLogo from "../../assets/icons/kubernetes-plain.svg";
import awsLogo from "../../assets/icons/amazon-aws-icon.webp";
import pythonLogo from "../../assets/icons/python-icon.webp";
import CompHeader from "../shared/CompHeader";

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
}

interface CardProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Badge = ({ icon, text }: BadgeProps) => {
  return (
    <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-medium text-gray-700 shadow-sm">
      <span className="text-[#1264b3]">{icon}</span>
      {text}
    </div>
  );
};

const DotBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 opacity-50"
      animate={{
        backgroundPosition: ["0px 0px", "0px 20px"],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: `
          radial-gradient(#d9dde2 1px, transparent 1px)
        `,
        backgroundSize: "10px 10px",
        maskImage:
          "linear-gradient(to bottom, black 0%, rgba(0,0,0,.7) 55%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, rgba(0,0,0,.7) 55%, transparent 100%)",
      }}
    />
  );
};

/* =========================================================
   CENTER LOGO
========================================================= */

const CenterLogo = ({
  children,
  dark = false,
}: {
  children?: React.ReactNode;
  dark?: boolean;
}) => {
  return (
    <div
      className={`relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-gray-100 ${
        dark ? "bg-[#0963bd]" : "bg-white"
      } shadow-[0_8px_30px_rgba(0,0,0,0.08)]`}
    >
      {children}
    </div>
  );
};

/* =========================================================
   CARD
========================================================= */

const Card = ({
  children,
  title,
  description,
}: CardProps) => {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        y: -5,
        transition: {
          duration: 0.3,
        },
      }}
      className="relative min-h-[440px] overflow-hidden rounded-xl md:rounded-[22px] border border-gray-200 bg-[#fafafa]"
    >
      {/* Visual Area */}
      <div className="relative h-[285px] overflow-hidden">
        {children}
      </div>

      {/* Content */}
      <motion.div
        variants={fadeUpVariants}
        className="absolute bottom-2 left-2 right-2 rounded-xl md:rounded-[18px] border border-gray-200 bg-white px-4 py-4 sm:px-5 sm:py-5"
      >
        <h3 className="mb-1.5 md:mb-2 text-base md:text-xl font-semibold tracking-tight text-gray-900">
          {title}
        </h3>

        <p className="text-sm md:text-[15px] leading-5 md:leading-6 text-gray-600">
          {description}
        </p>
      </motion.div>
    </motion.article>
  );
};

/* =========================================================
   AI ACCELERATED DEVELOPMENT
========================================================= */

const AIAcceleratedCard = () => {
  return (
    <Card
      title="AI-accelerated development"
      description="Smart tooling and automation reduces iteration cycles by 75%, letting you focus on what matters most — building great products."
    >
      <DotBackground />
      {/* Faster Iterations */}

      <motion.div
        className="absolute left-[65px] top-[50px] z-20"
        variants={itemVariants}
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Badge
          icon={<Zap size={13} strokeWidth={2.5} />}
          text="Faster Iterations"
        />
      </motion.div>

      {/* Early Bug Detection */}

      <motion.div
        className="absolute right-[45px] top-[48px] z-20"
        variants={itemVariants}
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          y: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          },
        }}
      >
        <Badge
          icon={<Bug size={13} strokeWidth={2.5} />}
          text="Early Bug Detection"
        />
      </motion.div>

      {/* Smarter Estimates */}

      <motion.div
        className="absolute bottom-[75px] left-[65px] z-20"
        variants={itemVariants}
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          y: {
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          },
        }}
      >
        <Badge
          icon={<Settings size={13} strokeWidth={2.5} />}
          text="Smarter Estimates"
        />
      </motion.div>

      {/* AI Integrated */}

      <motion.div
        className="absolute bottom-[75px] right-[45px] z-20"
        variants={itemVariants}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
        }}
      >
        <Badge
          icon={<Cpu size={13} strokeWidth={2.5} />}
          text="AI Integrated"
        />
      </motion.div>

      {/* Center AI */}

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute h-32 w-32 rounded-full bg-[#0963bd]/10 blur-2xl"
          animate={{
            scale: [0.8, 1.25, 0.8],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1],
          }}
          transition={{
            opacity: {
              duration: 0.6,
            },
            scale: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
        >
          <CenterLogo>
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="h-10 w-10 rotate-45 rounded-[6px] bg-[#0963bd]" />

              <motion.div
                className="absolute -right-2 -top-2 text-xl font-bold text-[#0963bd]"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                +
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 h-2 w-2 rounded-full bg-[#0963bd]"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </CenterLogo>
        </motion.div>
      </div>
    </Card>
  );
};

/* =========================================================
   FULL STACK OWNERSHIP
========================================================= */

const FullStackCard = () => {
  return (
    <Card
      title="Full-stack ownership"
      description="Web, mobile, deployment — we handle everything end-to-end so you don't have to coordinate multiple vendors."
    >
      {/* Outer ring */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#dce7f2] bg-[#f6faff]"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Middle ring */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d5e4f3]"
        animate={{
          scale: [1, 0.94, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Inner ring */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d0e1f3] bg-[#f5f9fd]"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8eaff] blur-xl"
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center */}

      <motion.div
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <CenterLogo>
          <div className="text-center">
            <img src={codefluxLogo} alt="" className="w-[40px]"/>
          </div>
        </CenterLogo>
      </motion.div>

      {/* Badges */}

      <motion.div
        className="absolute left-[58px] top-[50px] z-20"
        variants={itemVariants}
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Badge
          icon={<Zap size={13} />}
          text="Faster Iterations"
        />
      </motion.div>

      <motion.div
        className="absolute right-[45px] top-[48px] z-20"
        variants={itemVariants}
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Badge
          icon={<Smartphone size={13} />}
          text="Mobile Apps"
        />
      </motion.div>

      <motion.div
        className="absolute left-[55px] top-[135px] z-20"
        variants={itemVariants}
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Badge
          icon={<Link2 size={13} />}
          text="Seamless Integration"
        />
      </motion.div>

      <motion.div
        className="absolute right-[45px] top-[135px] z-20"
        variants={itemVariants}
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Badge
          icon={<Code2 size={13} />}
          text="Web Development"
        />
      </motion.div>
    </Card>
  );
};

/* =========================================================
   30 DAY DELIVERY
========================================================= */

const ThirtyDayCard = () => {
  return (
    <Card
      title="30-day delivery"
      description="From idea to production in exactly 30 days"
    >
      <DotBackground />

      {/* Quote 1 */}

      <motion.div
        className="absolute right-[30px] top-[35px] z-10 w-[270px]"
        variants={itemVariants}
        animate={{
          y: [0, -6, 0],
          rotate: [-1, 0, -1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-md">
              👨🏻
            </div>

            <p className="text-[11px] leading-4 text-gray-700">
              Spidiy team turned a messy brief into production in under a
              month.”
            </p>
          </div>
        </div>
      </motion.div>

      {/* Quote 2 */}

      <motion.div
        className="absolute left-[45px] top-[100px] z-20 w-[270px]"
        variants={itemVariants}
        animate={{
          y: [0, 5, 0],
          rotate: [1, 0, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      >
        <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-md">
              👨🏽
            </div>

            <p className="text-[11px] leading-4 text-gray-700">
              “We expected a prototype. We got a production-ready app in a
              month.”
            </p>
          </div>
        </div>
      </motion.div>

      {/* Quote 3 */}

      <motion.div
        className="absolute right-[50px] top-[165px] z-30 w-[270px]"
        variants={itemVariants}
        animate={{
          y: [0, -5, 0],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-md">
              👨🏻
            </div>

            <p className="text-[11px] leading-4 text-gray-700">
              “From idea to app in four sprints. The speed felt unfair—in a
              good way.”
            </p>
          </div>
        </div>
      </motion.div>

      {/* Delivery Badge */}

      <motion.div
        className="absolute bottom-[65px] left-[22px] z-40"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Badge
          icon={<Zap size={13} />}
          text="Fast Delivery"
        />
      </motion.div>
    </Card>
  );
};

/* =========================================================
   BATTLE TESTED FOUNDATION
========================================================= */

const BattleTestedCard = () => {
  const nodes = [
    {
      className: "left-[95px] top-[35px]",
      content: <img src={awsLogo} alt="aws" className="w-6"/>,
    },
    {
      className: "right-[95px] top-[35px]",
      content: <img src={azureLogo} alt="aws" className="w-6"/>,
    },
    {
      className: "left-[65px] top-[115px]",
      content: <img src={dotnetLogo} alt="aws" className="w-6"/>,
    },
    {
      className: "right-[65px] top-[115px]",
      content: <img src={pythonLogo} alt="aws" className="w-6"/>,
    },
    {
      className: "left-[95px] bottom-[35px]",
      content: <img src={reactLogo} alt="aws" className="w-6"/>,
    },
    {
      className: "right-[95px] bottom-[35px]",
      content: <img src={kubernetesLogo} alt="aws" className="w-6"/>,
    },
  ];

  return (
    <Card
      title="Battle-tested foundation"
      description="Production-ready boilerplates, not toy examples"
    >
      {/* Background */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f7fbff]"
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Connecting Lines */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[1px] w-[220px] bg-gray-200"
        animate={{
          rotate: [25, 28, 25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[1px] w-[220px] bg-gray-200"
        animate={{
          rotate: [-25, -28, -25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Technology Nodes */}

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className={`absolute ${node.className} z-20 flex h-14 w-14 items-center justify-center rounded-full border border-gray-100 bg-white text-xl shadow-sm`}
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          animate={{
            y: [0, index % 2 === 0 ? -6 : 6, 0],
          }}
          transition={{
            opacity: {
              duration: 0.5,
              delay: index * 0.1,
            },
            scale: {
              duration: 0.5,
              delay: index * 0.1,
            },
            y: {
              duration: 3 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            },
          }}
        >
          {node.content}
        </motion.div>
      ))}

      {/* Center */}

      <motion.div
        className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#ffffff] text-center shadow-[0_10px_30px_rgba(9,99,189,.25)]">
          <div>
           <img src={codefluxLogo} alt="" className="w-[40px]"/>
          </div>
        </div>
      </motion.div>
    </Card>
  );
};

/* =========================================================
   FLEXIBLE PAYMENT
========================================================= */

const FlexiblePaymentCard = () => {
  return (
    <Card
      title="Flexible payment"
      description="Payment options that work for your budget"
    >
      {/* Rings */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Center */}

      <motion.div
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#ffffff] shadow-lg">
          <div className="text-center">
            <img src={codefluxLogo} alt="" className="w-[40px]"/>
          </div>
        </div>
      </motion.div>

      {/* Western Union */}

      <motion.div
        className="absolute left-[75px] top-[40px] z-20 rounded-full bg-white px-4 py-2 text-[13px] font-bold shadow-sm"
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-gray-800">
            <img src={mastercardLogo} alt="" className="w-[24px]"/>
        </span>
      </motion.div>

      {/* BCA */}

      <motion.div
        className="absolute right-[75px] top-[45px] z-20 rounded-full bg-white px-5 py-2 text-[15px] font-bold text-[#2368a4] shadow-sm"
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={visaLogo} alt="" className="w-[40px]"/>
      </motion.div>

      {/* Stripe */}

      <motion.div
        className="absolute left-[50px] top-[135px] z-20 rounded-full bg-white px-5 py-2 text-[14px] font-bold text-[#526b91] shadow-sm"
        animate={{
          x: [0, -5, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={payIdLogo} alt="" className="w-[48px]"/>
      </motion.div>

      {/* Mastercard */}

      <motion.div
        className="absolute right-[55px] top-[135px] z-20 flex h-12 w-16 items-center justify-center rounded-full bg-white shadow-sm"
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={nabLogo} alt="" className="w-[40px]"/>
      </motion.div>

      {/* Citi */}

      <motion.div
        className="absolute bottom-[42px] left-1/2 z-20 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-[13px] font-semibold text-gray-700 shadow-sm"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={commBankLogo} alt="" className="w-[80px]"/>
      </motion.div>
    </Card>
  );
};

/* =========================================================
   TRANSPARENCY
========================================================= */

const TransparencyCard = () => {
  return (
    <Card
      title="100% transparency"
      description="No hidden fees, no surprises"
    >
      {/* Invoice */}

      <motion.div
        className="absolute left-1/2 top-[20px] w-[330px] -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
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
        }}
        transition={{
          duration: 0.7,
        }}
      >
        {/* Header */}

        <div className="mb-3 border-b border-gray-200 pb-3 text-lg font-semibold">
          Invoice
        </div>

        {/* Team size */}

        <motion.div
          className="mb-4 flex items-center justify-between rounded-full bg-gray-50 px-4 py-2 text-[10px]"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>Total Team Size</span>

          <span className="font-semibold">
            1 people
          </span>
        </motion.div>

        <div className="mb-3 text-sm font-medium">
          Team Members
        </div>

        {/* Invoice Row 1 */}

        <motion.div
          className="flex items-center justify-between border-b border-gray-100 py-3 text-[11px]"
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
        >
          <span className="text-gray-500">
            Fullstack Developer × 1 headcount × 1mo
          </span>

          <span className="font-semibold">
            $$
          </span>
        </motion.div>

        {/* Invoice Row 2 */}

        <motion.div
          className="flex items-center justify-between py-3 text-[11px] text-gray-300"
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
        >
          <span>
            Fullstack Developer × 1 headcount × 1mo
          </span>

          <span>$$</span>
        </motion.div>
      </motion.div>

      {/* Transparent pricing badge */}

      <motion.div
        className="absolute bottom-[55px] left-1/2 z-20 -translate-x-1/2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[11px] font-medium text-gray-700 shadow-sm"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="mr-1 inline-flex">
          <Search size={12} />
        </span>

        Simple, Transparent Pricing
      </motion.div>
    </Card>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const DifferentApproach = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-12 md:py-20 sm:px-6 lg:px-0">
      <div className="mx-auto container-wrapper-transparent">
        <CompHeader
            highlighter="OUR SOLUTIONS"
            title={<p>A Different <span className="text-sky-600">Approach</span></p>}
            subheading="Why settle for generic solutions when you can have a battle-tested, AI-accelerated approach that delivers results? Join the 10% that succeed."
            variant="default"
          />

        <div className="grid grid-cols-1 gap-2 md:gap-4 lg:grid-cols-2">
          <AIAcceleratedCard />
          <FullStackCard />
          <ThirtyDayCard />
          <BattleTestedCard />
          <FlexiblePaymentCard />
          <TransparencyCard />

        </div>
      </div>
    </section>
  );
};

export default DifferentApproach;