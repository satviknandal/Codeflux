import reacticon from "../../assets/icons/reactjs-icon.webp";
import angularicon from "../../assets/icons/angular-icon.webp";
import vueicon from "../../assets/icons/vuejs-original.svg";
import typescripticon from "../../assets/icons/typescript-original.svg";
import fluttericon from "../../assets/icons/flutter-original.svg";
//BE
import dotneticon from "../../assets/icons/dotnetcore-original.svg";
import phplaravelicon from "../../assets/icons/laravel-icon.webp";
import nodejsicon from "../../assets/icons/nodejs-icon.webp";
import javaicon from "../../assets/icons/java-icon.webp";
import pythonicon from "../../assets/icons/python-icon.webp";
//cloud
import postgreicon from "../../assets/icons/postgresql-icon.webp";
import mongodbicon from "../../assets/icons/mongodb-icon.webp";
import redisicon from "../../assets/icons/redis-icon.webp";
import awsicon from "../../assets/icons/amazon-aws-icon.webp";
import azureicon from "../../assets/icons/microsoft-azure-icon.webp";
import gcpicon from "../../assets/icons/googlecloud-original.svg";
import dockericon from "../../assets/icons/docker-original.svg";
import kubernetesicon from "../../assets/icons/kubernetes-plain.svg";
import { CardContainerVariant, ContainerVariant, ItemVariant, ItemVariantLeft, ItemVariantRight } from "../../shared/MotionSetting";
import { motion } from "framer-motion";
import CompHeader from "../shared/CompHeader";


interface SoftwareTechnologyStackProps {
    width?: string;
}


const programmingTech = [
  { name: "Python", icon: reacticon },
  { name: "Microsoft.Net", icon: angularicon },
  { name: "Javascript", icon: vueicon },
  { name: "TypeScript", icon: typescripticon},
  { name: "C#", icon: fluttericon },
  { name: "Java", icon: javaicon },
  { name: "Laravel", icon: phplaravelicon },
];


const frontendTech = [
  { name: "React", icon: reacticon },
  { name: "Angular", icon: angularicon },
  { name: "Vue.JS", icon: vueicon },
  { name: "Flutter", icon: fluttericon },
  { name: "React Native", icon: fluttericon },
  { name: "Xamarin", icon: fluttericon },
  { name: "Ionic", icon: fluttericon },
];

const backendTech = [
  { name: "Node.js", icon: nodejsicon },
  { name: "Django", icon: dotneticon },
  { name: "Laravel", icon: phplaravelicon },
  { name: "Express.JS", icon: pythonicon }
];


const dbTech = [
  { name: "PostgreSQL", icon: postgreicon },
  { name: "MySQL", icon: dockericon },
  { name: "MongoDB", icon: mongodbicon },
  { name: "Redis", icon: redisicon },
  { name: "ElasticSearch", icon: awsicon },
  { name: "Cassandra", icon: azureicon }
];

const devopsCloudTech = [
  { name: "Docker", icon: dockericon },
  { name: "Kubernetes", icon: kubernetesicon },
  { name: "Terraform", icon: kubernetesicon },
  { name: "AWS", icon: awsicon },
  { name: "Azure", icon: azureicon },
  { name: "GCP", icon: gcpicon },
];


const architecturePatterns = [
  { name: "Microservices", icon: postgreicon },
  { name: "Monolithic (Strategic)", icon: mongodbicon },
  { name: "Event-Driven Architecture", icon: redisicon },
  { name: "Serverless", icon: awsicon },
  { name: "MVC", icon: azureicon },
  { name: "MVVM", icon: gcpicon },
  { name: "Domain-Driven Design (DDD)", icon: dockericon }
];


const businessAITech = [
  { name: "OpenAI API", icon: '' },
  { name: "iPaaS", icon: '' },
  { name: "LangChain", icon: '' },
  { name: "SAP", icon: '' },
  { name: "Microsoft Dynamics 365", icon: '' },
];

const SoftwareTechnologyStack = ({width = "w-full"}: SoftwareTechnologyStackProps) => {

    const renderTechStack = (title: string, technologies: any) => {
        return <div className="w-full p-4 mb-2 md:mb-4 border border-gray-100 rounded-md bg-white" style={{boxShadow: "0 10px 28px rgba(15, 23, 42, 0.04)"}}>
            <div className="mb-3 text-sm uppercase font-semibold">{title}</div>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech: any) => (
                <div
                    key={tech.name}
                    className="flex min-h-[42px] items-center rounded-xl border border-[#e2e8f0] bg-[#f8fbff] px-4 py-2 transition-colors hover:bg-[#dbeafe]"
                >
                    {tech.icon && <img
                        src={tech.icon}
                        alt={`${tech.name} icon`}
                        loading="lazy"
                        decoding="async"
                        className="mr-2 w-5 h-5 md:h-[22px] md:w-[22px]"
                    />}
                    <span className="text-xs md:text-sm font-semibold md:font-medium text-[#0f172a]">
                      {tech.name}
                    </span>
                </div>
                ))}
            </div>
        </div>
    }

    const renderCard = () => {
      return (
        <section className="mx-auto flex flex-col items-center">
          <CompHeader
              highlighter="Technology Stack"
              title="Technology Stack for Enterprise Software Development"
              subheading="Codeflux selects production-ready technologies based on integration needs, maintainability, security requirements, cloud fit, and long-term product ownership."
              variant="default"
          />
          
          <motion.div variants={CardContainerVariant} className={`mt-4 md:mt-12 w-full md:${width}`}>
                <motion.div variants={ItemVariantLeft}>{renderTechStack("Programming Languages", programmingTech)}</motion.div>
                <motion.div variants={ItemVariantLeft}>{renderTechStack("Frontend Technologies", frontendTech)}</motion.div>
                <motion.div variants={ItemVariantRight}>{renderTechStack("Backend Technologies", backendTech)}</motion.div>
                <motion.div variants={ItemVariantLeft}>{renderTechStack("Databases", dbTech)}</motion.div>
                <motion.div variants={ItemVariantLeft}>{renderTechStack("DevOps & Cloud", devopsCloudTech)}</motion.div>
                <motion.div variants={ItemVariantLeft}>{renderTechStack("Architecture Design and Patterns", architecturePatterns)}</motion.div>
                <motion.div variants={ItemVariantRight}>{renderTechStack("Business Platforms, Integrations and AI", businessAITech)}</motion.div>
          </motion.div>
          <motion.div variants={ItemVariant} className="bg-[#eff6ff] py-3 md:py-4 px-3 md:px-6 border border-[#dbeafe] rounded-lg mt-2 md:mt-8 text-xs md:text-[14px] w-full md:w-[80%] text-gray-800">
            <strong>Technology choices are documented for handover.</strong> Source code access, platform ownership, integration needs, and vendor dependencies are reviewed based on the agreed project scope.
          </motion.div>
        </section>
      );
    }

  const renderGreyCard = () => {
    return <motion.div 
          variants={ContainerVariant}
          initial="hidden"
          whileInView="visible"
          className={`py-6 md:py-16`}
          viewport={{ once: true, amount: 0.3 }}
        >
        <div className='container-wrapper-transparent'>
          {renderCard()}
        </div>
    </motion.div>
  }

  return renderGreyCard();
};

export default SoftwareTechnologyStack;
