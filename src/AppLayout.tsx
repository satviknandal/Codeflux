import { Outlet, useLocation } from "react-router";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import AppFlow from "./components/home/AppFlow";

const AppLayout: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const RenderHomeLayout = () => {
    return <div className="hero min-h-[650px] md:min-h-[880px]">
      <Header/>
      <AppFlow/>
    </div>
  }

  return (
    <main
      className={`
        min-h-screen
        text-slate-50
        [--content-gutter:clamp(22px,6vw,72px)]
        [--content-max:1300px]
        [--content-width:min(calc(100%-(var(--content-gutter)*2)),var(--content-max))]
        ${
          isHome
            ? `
              bg-[linear-gradient(90deg,rgba(16,29,41,0.06)_1px,transparent_1px),linear-gradient(#eef2f4_0%,#f7f8f8_44%,#e9eef1_100%)]
              bg-[length:18px_18px,auto]
            `
            : ""
        }
      `}
    >
      <div className={`max-w-content mx-auto`}>
        <section className={isHome ? "hero" : ""}>
            {isHome ? <RenderHomeLayout/> : <Header/>}
        </section>
      </div>
      <div className={isHome ? "max-w-content mx-auto" : "relative top-[89px] mb-20 max-w-content bg-white mx-auto"}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default AppLayout;
