import awsicon from "../../assets/icons/amazon-aws-icon.webp";
import azureicon from "../../assets/icons/microsoft-azure-icon.webp";
import gcpicon from "../../assets/icons/googlecloud-original.svg";
import dockericon from "../../assets/icons/docker-original.svg";

//datastorage
import sqldbicon from "../../assets/icons/sql.svg";
import nosqldbicon from "../../assets/icons/no-sql.svg";
import datalakeicon from "../../assets/icons/data-lakes.svg";
import amazons2icon from "../../assets/icons/amazon-s2.svg";

//data processing
import pandasicon from "../../assets/icons/pandas.svg";
import numpyicon from "../../assets/icons/num-py.svg";
import scipyicon from "../../assets/icons/sci-py.svg";

//feature engineering
import featuretoolsicon from "../../assets/icons/featuretools.svg";
import feasticon from "../../assets/icons/feast.svg";
import tectonicon from "../../assets/icons/tecton.svg";
import dataroboticon from "../../assets/icons/data-robot-paxata.svg";


//ml
import scikiticon from "../../assets/icons/scikit-learn.svg";
import kerasicon from "../../assets/icons/keras.svg";

//model
import fastapiicon from "../../assets/icons/fast-api.svg";

//visualization
import tableauicon from "../../assets/icons/tableau.svg";
import matplotlibicon from "../../assets/icons/matplotlib.svg";
import plotlyicon from "../../assets/icons/plotly.svg";

//devops
import giticon from "../../assets/icons/git.svg";
import jenkinsicon from "../../assets/icons/jenkins.svg";

//monitoring
import mlflowicon from "../../assets/icons/ml-flow.svg";
import neptuneicon from "../../assets/icons/neptune.svg";

import tensorflowicon from "../../assets/icons/tensorflow.webp";
import { CardContainerVariant, ContainerVariant, ItemVariantLeft, ItemVariantRight } from "../../shared/MotionSetting";
import { motion } from "framer-motion";
import CompHeader from "../shared/CompHeader";


interface AITechnologyStackProps {
    width?: string;
}


const dataStorageTech = [
  { name: "SQL databases", icon: sqldbicon },
  { name: "NoSQL databases", icon: nosqldbicon },
  { name: "Data Lakes", icon: datalakeicon },
  { name: "Amazon S2", icon: amazons2icon}
];

const dataProcessingTech = [
  { name: "Pandas", icon: pandasicon },
  { name: "NumPy", icon: numpyicon },
  { name: "SciPy", icon: scipyicon }
];

const featureEngineeringTech = [
  { name: "Featuretools", icon: featuretoolsicon },
  { name: "Feast", icon: feasticon },
  { name: "Tecton", icon: tectonicon },
  { name: "DataRobot Paxata", icon: dataroboticon }
];

const mlLibraryTech = [
  { name: "Tensorflow", icon: tensorflowicon },
  { name: "PyTorch", icon: jenkinsicon },
  { name: "Scikit-learn", icon: scikiticon },
  { name: "Keras", icon: kerasicon }
];

const modelsTech = [
  { name: "TensorFlow Serving", icon: tensorflowicon },
  { name: "TorchServe", icon: jenkinsicon },
  { name: "FastAPI", icon: fastapiicon }
];

const visualizationTech = [
  { name: "Tableau", icon: tableauicon },
  { name: "Matplotlib", icon: matplotlibicon },
  { name: "Plotly", icon: plotlyicon }
];

const devopsTech = [
  { name: "Git", icon: giticon },
  { name: "Jenkins", icon: jenkinsicon },
  { name: "Docker", icon: dockericon }
];

const cloudTech = [
  { name: "AWS", icon: awsicon },
  { name: "GCP", icon: gcpicon },
  { name: "Microsoft Azure", icon: azureicon },
];

const monitoringTech = [
  { name: "TensorBoard", icon: tensorflowicon },
  { name: "MLflow", icon: mlflowicon },
  { name: "Neptune", icon: neptuneicon }
];


const AITechnologyStack = ({
    width = "w-full"
}: AITechnologyStackProps) => {

    const renderTechStack = (title: string, technologies: any) => {
        return <div className="w-full p-4 mb-2 border border-pink-100/60 rounded-md bg-white" style={{boxShadow: "0 10px 28px rgba(15, 23, 42, 0.04)"}}>
            <div className="mb-2 md:mb-3 text-sm uppercase font-semibold">{title}</div>
            <div className="flex flex-wrap gap-1 md:gap-2">
                {technologies.map((tech: any) => (
                <div
                    key={tech.name}
                    className="flex flex-col md:min-h-[42px] items-center rounded-lg md:rounded-xl border border-[#fff5fe] bg-[#fff5fe]/70 px-4 py-2 md:px-6 md:py-4 transition-colors hover:bg-[#dbeafe]"
                >
                    <img
                        src={tech.icon}
                        alt={`${tech.name} icon`}
                        loading="lazy"
                        decoding="async"
                        className="mb-2 h-[24px] md:h-[36px]"
                    />
                    <p className="text-sm font-medium text-[#0f172a]">
                    {tech.name}
                    </p>
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
              title={<p className='bg-[linear-gradient(to_right,#6025F5,#E40CD3,#FF5555)] bg-clip-text text-transparent'>Technology Stack for AI Development</p>}
              subheading="Codeflux selects production-ready technologies based on integration needs, maintainability, security requirements, cloud fit, and long-term product ownership."
              variant="pinkdefault"
          />
          <motion.div variants={CardContainerVariant} className={`flex flex-wrap gap-3 mt-4 md:mt-12 w-full md:${width}`}>
                <motion.div className="w-full md:w-[49%]" variants={ItemVariantLeft}>{renderTechStack("Data Storage", dataStorageTech)}</motion.div>
                <motion.div className="w-full md:w-[49%]" variants={ItemVariantLeft}>{renderTechStack("Data Processing and Preparation", dataProcessingTech)}</motion.div>
                <motion.div className="w-full md:w-[49%]" variants={ItemVariantRight}>{renderTechStack("Feature Engineering and Management", featureEngineeringTech)}</motion.div>
                <motion.div className="w-full md:w-[49%]" variants={ItemVariantLeft}>{renderTechStack("ML Libraries and Frameworks", mlLibraryTech)}</motion.div>
                <motion.div className="w-full md:w-[49%]" variants={ItemVariantLeft}>{renderTechStack("Model Deployment and Serving", modelsTech)}</motion.div>
                <motion.div className="w-full md:w-[49%]" variants={ItemVariantLeft}>{renderTechStack("Visualization Tools", visualizationTech)}</motion.div>
                <motion.div className="w-full md:w-[49%]" variants={ItemVariantRight}>{renderTechStack("DevOps Tools", devopsTech)}</motion.div>
                <motion.div className="w-full md:w-[49%]" variants={ItemVariantRight}>{renderTechStack("Cloud Infrastructure", cloudTech)}</motion.div>
                <motion.div className="w-full md:w-[49%]" variants={ItemVariantRight}>{renderTechStack("Monitoring and Tracking Tools", monitoringTech)}</motion.div>
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

export default AITechnologyStack;
