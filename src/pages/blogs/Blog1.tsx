import "../../blog.css";

const Blog1 = () => {

  const RenderHeader = () => {
    return <header className="px-[76px] py-[86px] container-wrapper-transparent">
        <a href="/blogs" className="block text-xs mb-16 text-gray-900">← All Blogs</a>
        <div className="text-xs text-gray-800">
          <span className="text-sky-500 font-bold mr-4">Market note</span>
          <time datetime="2026-08-10" className="mr-4">10 August 2026</time>
          <span>5 minute read</span>
        </div>
        <h1 className="text-[#01182e] blogh1">Humanoid robots should enter through a trial</h1>
        <p className="text-gray-600 text-base">A neutral framework for assessing humanoids without assuming that human shape means general capability.</p>
        <div className="pt-4 border-t border-t-gray-200 text-gray-600 text-xs">
          <span className="mr-10">Published by RobotAtom Research</span>
          <span>Reviewed 10 August 2026</span>
        </div>
      </header>
  }

  const RenderContentAside = () => {
    return <aside className="grid gap-2 sticky top-[110px]">
      <strong className="font-bold text-sky-950 text-xs">In this article</strong>
      <a href="#human-shaped-access-can-be-valuable-but-it-is-not-proof-of-fit" className="text-xs text-gray-900 hover:text-sky-400">Human-shaped access can be valuable—but it is not proof of fit</a>
      <a href="#what-a-serious-trial-should-measure" className="text-xs text-gray-900 hover:text-sky-400">What a serious trial should measure</a>
      <a href="#robotatom-s-default-position" className="text-xs text-gray-900 hover:text-sky-400">RobotAtom's default position</a>
    </aside>
  }

  const RenderContentBody = () => {
    return <div className="blog-body">
      <section id="human-shaped-access-can-be-valuable-but-it-is-not-proof-of-fit">
        <h2 className="blogh2 text-[#01182e]">Human-shaped access can be valuable—but it is not proof of fit</h2>
        <p className="text-gray-600 mb-6">Humanoids may be useful where the environment, tools and access points were designed for people. That advantage should be tested against the actual job and against simpler alternatives such as a fixed arm, mobile manipulator or purpose-built machine.</p>
        <p className="text-gray-600">Current industry material still identifies limits in speed, repeatability, battery duration, fall safety, cost and standardisation. Published deployments are useful evidence for specific tasks, not proof of universal capability.</p>
      </section>
      <section id="what-a-serious-trial-should-measure" className="mt-[78px]">
        <h2 className="blogh2 text-[#01182e]">What a serious trial should measure</h2>
        <ul>
          <li className="relative px-6 py-4 border-t border-t-gray-200 text-gray-600">The exact task sequence and restrictions placed on the site.</li>
          <li className="relative px-6 py-4 border-t border-t-gray-200 text-gray-600">Productive time, intervention rate and recovery method.</li>
          <li className="relative px-6 py-4 border-t border-t-gray-200 text-gray-600">Object variation, dexterity, accuracy and cycle time.</li>
          <li className="relative px-6 py-4 border-t border-t-gray-200 text-gray-600">Battery, charging and useful duty across the planned shift.</li>
          <li className="relative px-6 py-4 border-t border-t-gray-200 text-gray-600">Fall zones, stop behaviour, power-loss state and human separation.</li>
          <li className="relative px-6 py-4 border-t border-t-gray-200 text-gray-600">Maintenance, on-site support and evidence required before scale-up.</li>
        </ul>
      </section>
      <section id="robotatom-s-default-position" className="mt-[78px]">
        <h2 className="blogh2 text-[#01182e]">RobotAtom's default position</h2>
        <p className="text-gray-600">A humanoid candidate should be marked trial evidence required unless the exact configuration has already demonstrated the customer's task under comparable conditions. The recommendation should also state why conventional alternatives did not meet the hard requirements.</p>
      </section>
      <section aria-labelledby="source-heading" className="mb-16 mt-[78px]">
        <h2 id="source-heading" className="blogh2 text-[#01182e]">Sources</h2>
        <p className="text-gray-600 mb-6">Material claims were reviewed against the following primary sources. External links open the publisher's website.</p>
        <ol className="text-gray-600 text-sm">
          <li className="mb-2">
            <a href="https://ifr.org/ifr-press-releases/news/humanoid-robots-vision-and-reality-paper-published-by-ifr" target="_blank" rel="noreferrer">IFR — Humanoid robots: vision and reality <span aria-hidden="true">↗</span></a>
          </li>
          <li className="mb-2">
            <a href="https://ifr.org/downloads/press_docs/Humanoids_Position_Infograph_2025.pdf" target="_blank" rel="noreferrer">IFR — Humanoid position infographic <span aria-hidden="true">↗</span></a>
          </li>
          <li className="mb-2">
            <a href="https://www.figure.ai/news/production-at-bmw" target="_blank" rel="noreferrer">Figure — BMW production deployment report <span aria-hidden="true">↗</span></a>
          </li>
        </ol>
      </section>
      <p className="border-2 border-gray-600 text-gray-600 text-sm px-4 py-3">This article provides general information. A robotics project still requires site-specific engineering, safety and regulatory review.</p>
    </div>
  }

  const Render = () => {
    return  <article>
      <RenderHeader/>
      <div className="blog-layout container-wrapper-transparent px-[76px] py-[86px]">
        <RenderContentAside/>
        <RenderContentBody/>
      </div>
    </article>
  }

  return <Render/>;
};

export default Blog1;
