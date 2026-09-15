import "../../blog.css";
import BlogsAside from "../../components/blogs/BlogsAside";
import BlogSection from "../../components/blogs/BlogSection";
import BlogsHeader from "../../components/blogs/BlogsHeader";

const AgenticAIBlog = () => {

  const items = [
      {
          label: 'What are the characteristics of agentic AI systems?',
          link: 'agenticai-characteristics'
      },
      {
          label: 'What are the use cases of agentic AI?',
          link: 'agenticai-usecases'
      },
      {
          label: 'What are the benefits of agentic AI?',
          link: 'agenticai-benefits'
      },
      {
          label: 'What are the types of agentic AI systems?',
          link: 'agenticai-types'
      },
      {
          label: 'How does agentic AI work?',
          link: 'agenticai-work'
      },
      {
          label: 'What are the challenges with agentic AI systems?',
          link: 'agenticai-challenges'
      }
  ];

  const RenderContentBody = () => {
    return <div className="blog-body w-[75%]">
        <p className="text-gray-600 mb-6">AI agents can communicate with each other and other software systems to automate existing business processes. But beyond static automation, they make independent contextual decisions. They learn from their environment and adapt to changing conditions, enabling them to perform sophisticated workflows with accuracy.</p>
        <p className="text-gray-600">For example, an agentic AI system can optimize employee shift schedules. If an employee is off sick, the agent can communicate with other employees and readjust the schedule while still meeting project resource and time requirements.</p>
      <BlogSection
        id="agenticai-characteristics"
        title="What are the characteristics of agentic AI systems?"
      >
        <p className="text-gray-600 mb-6">Here are the key features of an agentic AI system.</p>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Proactive</p>
          <p className="text-gray-600 mb-3">Agentic AI acts proactively rather than waiting for direct input. Traditional systems are reactive, responding only when triggered and following predefined workflows. In contrast, agentic systems anticipate needs, identify emerging patterns, and take initiative to address potential issues before they escalate. Their proactive behavior is driven by environmental awareness and their ability to evaluate outcomes against long-term goals.</p>
          <p className="text-gray-600">For instance, in a supply chain setting, a traditional logistics platform updates delivery statuses when a user checks in or through periodic notifications. An agentic AI system, however, can monitor inventory levels, track weather conditions, and anticipate shipping delays. It can proactively raise alerts and even reroute shipments to reduce downtime.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Adaptable</p>
          <p className="text-gray-600 mb-3">A key feature of agentic AI is its ability to adapt to changing environments and specific domains. Traditional SaaS solutions are built to scale across industries and handle repetitive tasks, but they often lack the depth to understand unique domain-specific situations. Agentic systems fill this gap by using context awareness and domain knowledge, enabling AI agents to respond intelligently. They adjust their actions based on real-time input and can handle complex scenarios that standard solutions cannot.</p>
          <p className="text-gray-600">For example, while a generic customer service platform might respond with predefined answers, an agentic AI system supporting a healthcare provider understands medical terminology and complies with healthcare regulations. It can adapt to evolving patient concerns and delivers more accurate, context-sensitive support.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Collaborative</p>
          <p className="text-gray-600 mb-3">Agentic AI is designed to collaborate with humans and with other agentic AI systems. AI agents work as part of a broader team. They can understand shared goals, interpret human intent, and coordinate actions accordingly. They work well in settings that require human oversight or decision-making by considering inputs from multiple sources.</p>
          <p className="text-gray-600">For example, a treatment planning agent can coordinate with several different medical teams to prepare an integrated treatment and follow-up plan for a cancer patient.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Specialized</p>
          <p className="text-gray-600 mb-3">Agentic AI typically builds upon multiple hyperspecialized agents, with each focused on a narrow area of expertise. These AI-powered agents coordinate with each other, sharing insights and handing off tasks as needed. This approach enables significantly deeper domain-specific performance.</p>
          <p className="text-gray-600">Agentic AI typically builds upon multiple hyperspecialized agents, with each focused on a narrow area of expertise. These AI-powered agents coordinate with each other, sharing insights and handing off tasks as needed. This approach enables significantly deeper domain-specific performance.</p>
        </div>
      </BlogSection>
      <BlogSection
        id="agenticai-usecases"
        title="What are the use cases of agentic AI?"
      >
        <p className="text-gray-600 mb-6">Agentic AI has unlimited applications and can be fully customized to any requirement. We give some examples of early adoption.</p>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Supporting research and development</p>
          <p className="text-gray-600 mb-3">Research and development in any field requires a great deal of manual processes, such as testing hypotheses, gathering research information, collecting data, synthesizing insights across data sources, and more. Agentic AI can reduce the need for human intervention with these manual processes. It streamlines research and better coordinates teams that are working on research and development challenges.</p>
          <p className="text-gray-600">Agentic AI also facilitates multi-agent orchestration, where supervisors use multiple specialist models to construct complex research and development pipelines. For example, agentic AI could draw from recent research published on credible platforms, synthesize the results, plan further tests, and present researchers with the final product they need to investigate. This approach saves a significant amount of time and cost involved in research.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Code transformation</p>
          <p className="text-gray-600 mb-3">Agentc AI can use specialized AI-powered agents to remove the complexity of modernization and migration tasks. For example, agentic AI models for .NET can modernize Windows-based .NET applications to Linux significantly faster using machine learning, graph neural networks, Large language models (LLMs), and automated reasoning.</p>
          <p className="text-gray-600">Equally, agentic AI can decompose monolithic z/OS COBOL applications into individual components, reducing the timeframe of this process from months to minutes. Agentic AI offers unmatched speed, scale, and performance in automating application migration and modernization.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Incident response automation</p>
          <p className="text-gray-600 mb-3">Whenever an incident occurs, whether due to a vulnerability or a manual error, agentic AI can expedite the incident response process, saving your business time and improving time-to-recovery. Agentic AI can automate the entire incident response pathway, rolling back issues, creating incident reports, and notifying any team members who need to stay informed.</p>
          <p className="text-gray-600">Agentic AI enhances incident response speed while also providing a more specific and in-depth post-incident analysis to prevent the same errors from recurring in the future.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Customer service automation</p>
          <p className="text-gray-600 mb-3">In many customer service scenarios, the information that a customer needs is already online in a tutorial or help article. Agentic AI processes customer service inquiries and rapidly searches through available company documents to find a suitable answer that helps them out. If this alone isn’t enough to solve a query, agentic AI can then communicate with the user to gather more information about their case and direct them toward a solution. They are designed with modular components, such as reasoning engines, memory, cognitive skills, and tools, that enable them to remedy the vast majority of problems.</p>
          <p className="text-gray-600">AI-powered agents can operate independently, learn from their environment, adapt to changing conditions, and develop more effective strategies to assist customers. If, after several attempts, it cannot solve a customer’s issue, it then contacts a human support agent and assigns them to the case. Utilizing this form of AI in customer service scenarios alleviates the burden on human teams and enables the vast majority of customer-oriented services to operate 24/7.</p>
        </div>
      </BlogSection>
      <BlogSection
        id="agenticai-benefits"
        title="What are the benefits of agentic AI?"
      >
        <p className="text-gray-600 mb-6">There are several business benefits to using agentic AI.</p>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Increased efficiency</p>
          <p className="text-gray-600">Agentic artificial intelligence enables businesses to simplify the complexity of various challenging or specialized tasks through automation. Instead of relying on human-driven manual practices, using agentic AI can automate tedious processes, freeing up time for your employees. Your employees can use the extra time that agentic AI saves them on more demanding tasks, such as problem-solving, strategic planning, and other drivers of growth.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Increased user trust</p>
          <p className="text-gray-600 mb-3">Agentic AI can offer a higher degree of personalization when interacting with customers. By utilizing existing customer data, agentic AI can quickly produce tailored messaging, engage with the customer in their preferred tone, and offer practical product recommendations. Over time, agentic AI improves customer relationships and builds trust between customers and your business.</p>
          <p className="text-gray-600">Businesses can also utilize agentic artificial intelligence to analyze customer feedback, identify the most frequently occurring information, and provide it to product engineers. It can also directly respond to users who leave feedback, creating positive feedback loops where customers feel that their feedback is taken seriously by your company.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Continuous improvement</p>
          <p className="text-gray-600">Agentic AI can continuously learn and improve, adapting to any tasks assigned to it. It interacts, learns from feedback, and optimizes its decision-making based on this recursive loop. For businesses, this means that it continues to deliver its benefits at higher and higher levels over time.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Human augmentation</p>
          <p className="text-gray-600">Agentic AI can serve as a fantastic collaboration tool for human agents, enhancing their productivity and reducing the number of laborious manual tasks they must complete. By working alongside agentic AI models, human agents can overcome complex challenges, automate difficult decision-making pathways, and drive their efficiency.</p>
        </div>
      </BlogSection>
      <BlogSection
        id="agenticai-types"
        title="What are the types of agentic AI systems?"
      >
        <p className="text-gray-600 mb-3">Agentic AI can be single or multi-agent setups. In a single-agentic AI system, one AI agent handles all tasks sequentially. These are preferable when businesses need a faster solution that can work on a well-defined problem or process.</p>
        <p className="text-gray-600 mb-3">Multi-agentic AI, on the other hand, involves multiple AI agents collaborating to break down complex workflows into smaller segments. This approach is more scalable than single systems and is much more flexible for solving complex scenarios. The vast majority of agentic AI agents refer to this latter, more diverse form of AI deployment.</p>
        <p className="text-gray-600 mb-6">Here are a few different structures of multi-agent systems.</p>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Horizontal multi-agent</p>
          <p className="text-gray-600">Horizontal multi-agent AI is a system of working where every AI agent has the same level of technical proficiency and complexity. Each agent specializes in a narrow skill, bringing their findings together to solve a complex problem. This structure utilizes lateral collaboration and communication among the specialized AI agents.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Vertical multi-agent</p>
          <p className="text-gray-600">In a vertical multi-agent system, there is a hierarchical structure in which lower-level AI agents have ‘easier’ tasks compared to the higher ones. The highest levels of this structure handle tasks that require more processing power and LLMs, such as critical thinking, reasoning, and decision-making. Lower-level AI agents in this structure perform tasks such as collecting data, formatting it, or processing it to pass it to higher levels.</p>
        </div>
      </BlogSection>
      <BlogSection
        id="agenticai-work"
        title="How does agentic AI work?"
      >
        <p className="text-gray-600 mb-6">Agentic AI agents operate by using a structured pathway that moves through four stages — perceive, reason, act, and learn. Each stage in this process integrates several advanced AI technologies and methods.</p>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Perceive</p>
          <p className="text-gray-600 mb-3">At the perception stage, AI agents collect real-time data from a range of diverse sources, ingesting structured, semi-structured, and unstructured data. Agents directly interact with RESTful APIs, gRPC services, and GraphQL endpoints to ingest data as needed from cloud platforms, enterprise systems, and SaaS applications.</p>
          <p className="text-gray-600">In certain legacy systems or those that require interaction with document-heavy environments, optimal character recognition technology (OCR) and natural language processing can help sift through scanned documents for relevant information. At the perceive stage, agents also process data to determine what is useful based on the task context in which they are working.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Reason</p>
          <p className="text-gray-600 mb-3">The reasoning stage is powered by LLMs that help to interpret the context of the goals a model has, develop an action plan to follow, and adapt in real-time using new information received through the perceive stage. LLMs employ models that utilize semantic reasoning, error handling, and adjust to any ambiguous user inputs.</p>
          <p className="text-gray-600 mb-3">Beyond just processing ideas and developing strategy in this stage, some LLMs use predictive machine learning models to manage complex problems. For example, a predictive ML model can forecast surges in demand, enabling better preparation for future use cases.</p>
          <p className="text-gray-600">At this stage, LLMs use long-term memory systems to ensure that situational and context-dependent tasks remain consistent throughout the entire process.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Act</p>
          <p className="text-gray-600 mb-3">At the act stage, agentic AI takes action to achieve what was set out by the reasoning stage effectively. As agentic AI can access administrator-installed plugins on each of these external software systems, it can directly interact with and run tasks on these third-party applications.</p>
          <p className="text-gray-600 mb-3">The act stage orchestrates several subtasks that the agentic models will then tackle sequentially, with specific actions ranging from compiling code to interacting with software and documents, running simulations, migrating applications, and performing functions within a third-party application. For some agentic AI models, actions are gated by human-in-the-loop systems, where developers must verify what the model is doing and approve its actions.</p>
          <p className="text-gray-600">All actions taken by a model are closely monitored and logged, allowing businesses to align with governance and safeguard their use of this technology.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Learn</p>
          <p className="text-gray-600 mb-3">The learning stage of agentic AI is what enables these models to continually improve their functionality and effectiveness. The agent utilizes reinforcement learning techniques, such as proximal policy optimization (PPO) and Q-learning, to refine actions based on the success of a specific task within the broader system.</p>
          <p className="text-gray-600 mb-3">AI agents learn from autonomous agents, LLMs, or through human feedback, all of which can fine-tune the system to improve its functioning. There are several metrics that a model can use to track its performance, including latency, confidence, and success rate. Multi-agent AI typically distributes learning across different agents, sharing information in communal memory layers to enhance the entire system's performance.</p>
          <p className="text-gray-600">Over time, this style of reinforcement learning can utilize successful iterations to improve its overall functioning and enhance efficiency continually.</p>
        </div>
      </BlogSection>
      <BlogSection
        id="agenticai-challenges"
        title="What are the challenges with agentic AI systems?"
      >
        <p className="text-gray-600 mb-6">Several challenges are associated with agentic AI and building effective models.</p>
        <div className="mb-6">
          <p className="mb-2 font-semibold">System design</p>
          <p className="text-gray-600">The process of building a multi-agent architecture that effectively coordinates with other models, has specific knowledge of how to tackle certain tasks, and can perform high-level reasoning and strategic planning is a challenging task. Agentic AI is a cutting-edge area of technology that relies on numerous challenging AI strategies. Due to the complexity of designing an effective system, many companies will struggle to access an effective version of agentic AI.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Testing and debugging</p>
          <p className="text-gray-600">Agentic AI works independently and with minimal human intervention. This benefit also makes testing, debugging, and determining where an AI model has gone wrong a challenge. Developers must build traceability and reproducibility into the AI model, with special attention paid to tracing any errors and determining their causes.</p>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-semibold">Trust and transparancy</p>
          <p className="text-gray-600">Even in advanced AI systems, AI hallucinations can impact workflows, leading to significant errors and problems for the business operating the model. If models generate false information and then relay it to the rest of the AI agents, incorrect data can rapidly spread, escalating errors in the final output. Especially in industries such as finance and healthcare that have severe real-world implications, businesses must have a great deal of trust in their product before using it extensively.</p>
        </div>
      </BlogSection>
    </div>
  }

  const Render = () => {
    return  <article className="container-wrapper-transparent px-6 pb-24">
      <BlogsHeader
        data={{
          category: 'Tech', 
          date: '10 August 2026', 
          title: 'What is Agentic AI?', 
          desc: 'Agentic AI is an autonomous AI system that can act independently to achieve pre-determined goals. Traditional software follows pre-defined rules, and traditional artificial intelligence also requires prompting and step-by-step guidance. However, agentic AI is proactive and can perform complex tasks without constant human oversight. "Agentic" indicates agency — the ability of these systems to act independently, but in a goal-driven manner.'
        }}
      />
      <div className="flex items-start pt-8 gap-[100px]">
        <BlogsAside items={items}/>
        <RenderContentBody/>
      </div>
    </article>
  }

  return <Render/>;
};

export default AgenticAIBlog;