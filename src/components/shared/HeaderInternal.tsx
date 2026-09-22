import { useRef, useState } from 'react';
import FlyoutNav from './FlyoutNav';
import ChevronDownIcon from '../../shared/svg/ChevronDown';
import MenuIcon from '../../shared/svg/MenuIcon';
import Button from '../Button';
import logo from "../../assets/codeflux-logo.png";

const HeaderInternal = () => {
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);


  const Logo = () => {
    return <a href="/"><img src={logo} alt="Logo" className="w-[160px] md:w-[220px] h-auto"/></a>;
  };


  const Actions = () => {
    return (
      <div className="flex items-center justify-end gap-1 md:gap-3">
        {/* <button type="button" aria-label="Search" className="flex h-12 w-12 items-center justify-center border border-white/20 bg-[rgba(10,17,29,0.48)] cursor-pointer">
          <Icon name="search" />
        </button>

        <button type="button" aria-label="Open menu" className="flex h-12 w-12 items-center justify-center cursor-pointer bg-gradient-to-br from-[#1681a2] to-[#08a5df] shadow-[0_12px_28px_rgba(255,218,82,0.12)]">
          <Icon name="menu" />
        </button> */}

        <Button label="Contact Us" className="mr-2 hidden md:inline-flex min-h-8 md:min-h-12 items-center rounded-full bg-gradient-to-br from-[#1681a2] to-[#08a5df] px-4 md:px-7 text-xs md:text-[14px] md:font-extrabold text-white shadow-[0_12px_28px_rgba(255,218,82,0.12)]"/>
      </div>
    );
  };

  const Nav = () => {
    const links = ["Home", "Services", "Pages", "Blog", "Contact"];
    return (
      <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6 text-sm font-bold text-white/90">
        {links.map((link, index) => (
          <a key={link} href="/" className="flex items-center">
            {link}
            {index < 3 && <span className="ml-1 text-[11px]"></span>}
          </a>
        ))}
        <a>
            <button
            type="button"
            name="Menu"
            onClick={() => setFlyoutOpen(!flyoutOpen)}
            className="nav-link flex items-center gap-1 cursor-pointer"
            >
            <ChevronDownIcon
                className={`h-8 w-8 transition-transform duration-200 ${
                flyoutOpen ? 'rotate-180' : ''
                }`}
            />
            </button>
        </a>
      </nav>
    );
  };

  return (
    <header ref={headerRef} className='sticky container-wrapper-transparent flex items-center justify-between  rounded-lg px-2 py-1.5'>
      <Logo />
      <div className='text-right flex items-right justify-end w-1/2'>
        <Nav/>
        <button
            type="button"
            name="Menu"
            aria-label="Menu"
            onClick={() => setFlyoutOpen(!flyoutOpen)}
            className="lg:hidden inline-flex items-center justify-center text-gray-700 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
            <MenuIcon className="h-10 w-10 text-white"/>
        </button>
      </div>

      <FlyoutNav open={flyoutOpen} setOpen={setFlyoutOpen}/>
      <Actions />
    </header>
  );
}

export default HeaderInternal;