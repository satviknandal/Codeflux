import React from "react";
import CompHeader from "../shared/CompHeader";
import openaiicon from "../../assets/ai-icons/openai.svg";
import anthropicicon from "../../assets/ai-icons/anthropic.svg";
import mistralicon from "../../assets/ai-icons/mistral.svg";
import llamaicon from "../../assets/ai-icons/llama.svg";
import tensorflowicon from "../../assets/ai-icons/tensorflow.svg";
import pytorchicon from "../../assets/ai-icons/pytorch.svg";
import huggingfaceicon from "../../assets/ai-icons/huggingface.svg";

import awsicon from "../../assets/ai-icons/aws.svg";
import azureicon from "../../assets/ai-icons/azure.svg";
import gcpicon from "../../assets/ai-icons/gcp.svg";
import nvidiaicon from "../../assets/ai-icons/nvidia.svg";
import langchainicon from "../../assets/ai-icons/langchain.svg";


import jaxicon from "../../assets/ai-icons/jax.png";
import pineconeicon from "../../assets/ai-icons/pinecone.svg";
import weaviateicon from "../../assets/ai-icons/weaviate.svg";
import qdranticon from "../../assets/ai-icons/qdrant.svg";
import vercelicon from "../../assets/ai-icons/vercel.svg";
import kubernetesicon from "../../assets/ai-icons/kubernetes.svg";

interface Technology {
  name: string;
  src: string;
  wide?: boolean;
}

const techRow1: Technology[] = [
  { name: "OpenAI", src: openaiicon },
  { name: "Anthropic", src: anthropicicon },
  { name: "Mistral", src: mistralicon },
  { name: "LLaMA", src: llamaicon },
  { name: "TensorFlow", src: tensorflowicon },
  { name: "PyTorch", src: pytorchicon },
  { name: "Hugging Face", src: huggingfaceicon },
];

const techRow2: Technology[] = [
  { name: "AWS", src: awsicon },
  { name: "Azure", src: azureicon },
  { name: "GCP", src: gcpicon },
  { name: "NVIDIA", src: nvidiaicon},
  { name: "LangChain", src: langchainicon, wide: true },
  { name: "LangGraph", src: langchainicon, wide: true },
  { name: "LlamaIndex", src: llamaicon, wide: true },
];

const techRow3: Technology[] = [
  { name: "JAX", src: jaxicon, wide: true },
  { name: "Pinecone", src: pineconeicon, wide: true },
  { name: "Weaviate", src: weaviateicon, wide: true },
  { name: "Qdrant", src: qdranticon },
  { name: "Vercel", src: vercelicon },
  { name: "Kubernetes", src: kubernetesicon },
];

/**
 * Duplicate the items so the marquee can continuously scroll.
 */
const marqueeItems = (items: Technology[]) => [
  ...items,
  ...items,
  ...items,
  ...items,
];

interface TechRowProps {
  technologies: Technology[];
  direction: "left" | "right";
}

const TechRow: React.FC<TechRowProps> = ({
  technologies,
  direction,
}) => {
  const items = marqueeItems(technologies);

  return (
    <div className="relative overflow-hidden">
      {/* Left gradient fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent md:w-40"/>

      {/* Right gradient fade */}
      <div
        className="
          pointer-events-none absolute
          inset-y-0 right-0
          z-10 w-24
          bg-gradient-to-l
          from-[var(--bg)]
          to-transparent
          md:w-40
        "
      />

      <div
        className={`
          flex w-max gap-2
          will-change-transform
          md:gap-5
          ${
            direction === "left"
              ? "animate-tech-scroll-left"
              : "animate-tech-scroll-right"
          }
        `}
      >
        {items.map((technology, index) => (
          <div
            key={`${technology.name}-${index}`}
            className="
              group
              flex h-20 w-20
              shrink-0
              flex-col
              items-center
              justify-center
              gap-1 md:gap-3
              rounded-lg
              border
              border-white/10
              bg-white/[0.05]
              shadow-[0_10px_28px_-16px_rgba(15,23,42,0.18)]
              transition-all
              duration-300
              hover:-translate-y-[3px]
              hover:shadow-[0_18px_40px_-16px_rgba(0,123,255,0.25)]
              md:h-30
              md:w-30
              md:rounded-[1.125rem]
            "
          >
            <img
              src={technology.src}
              alt={technology.name}
              loading="lazy"
              className={`max-w-[35%] md:max-w-[60%] object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert opacity-50 ${technology.wide ? "h-7 md:h-8" : "h-10 md:h-10"}`}
            />

            <span className="whitespace-nowrap text-xs font-medium md:font-semibold tracking-[-0.01em] text-white/70 md:text-sm">
              {technology.name} 
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const AITechStack: React.FC = () => {
  return (
    <section
      id="tech"
      className="
        overflow-hidden
        border-t
        border-[var(--border)]
        bg-[var(--bg)]
        py-12
        md:py-20
        bg-purple-950
        bg-gradient-to-br
        from-purple-950
        to-[#0b2862]
      "
    >
      {/* Section Header */}
      <div className="container-wrapper-transparent mx-auto px-5 md:px-8 lg:px-10">
        <CompHeader
            highlighter="Technology"
            title={<p className="bg-[linear-gradient(to_right,#7c37fc,#00c6ff,#E40CD3)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">A Stack Built on the Best Of Modern AI.</p>}
            subheading="We’re provider-agnostic by design, choosing the right model, framework, and runtime for every workload."
            variant="pinkgradient"
        />
      </div>

      {/* Marquees */}
      <div className="mt-12 flex flex-col gap-2 md:gap-5">
        <TechRow
          technologies={techRow1}
          direction="left"
        />

        <TechRow
          technologies={techRow2}
          direction="right"
        />

        <TechRow
          technologies={techRow3}
          direction="left"
        />
      </div>
    </section>
  );
};

export default AITechStack;