import { useState } from 'react';
import Logo from '../../assets/rcnl-logo.svg?react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import UnderlineEffect from './UnderlineEffect';

function Navbar() {

  const location = useLocation();
  const [openMobileNav, setOpenMobileNav] = useState(false)

  return (
    <>
      <nav className='fixed bg-white w-full px-8 py-4 flex flex-col justify-center items-center border-b-2 border-slate-200 z-50'>
        <div className='max-w-[72em] w-full flex items-center justify-between'>
          <Link to={"/"}>
            <Logo className="h-6 sm:h-7 md:h-8 fill-blue" />
          </Link>
          <div className='hidden md:flex gap-4 text-sm text-slate-900'>
            <NavLink to={"Overview"} location={location.pathname} />
            <NavLink to={"Research"} location={location.pathname} />
            <NavLink to={"Publications"} location={location.pathname} />
            <NavLink to={"People"} location={location.pathname} />
            <NavLink to={"Resources"} location={location.pathname} />
            <NavLink to={"Contact"} location={location.pathname} />
          </div>
          <div className='visible md:hidden' onClick={() => setOpenMobileNav(!openMobileNav)}>
            {
              openMobileNav ? 
                <MdClose className='text-2xl sm:text-3xl fill-blue' /> :
                <GiHamburgerMenu className='text-lg sm:text-xl fill-blue'/>
            }
          </div>
        </div>
        {
          openMobileNav ? 
            <div className='w-full h-screen flex flex-col justify-center items-center'>
              <div className='mt-[-8em] flex flex-col items-center gap-1'>
                <NavLink to={"Overview"} location={location.pathname} />
                <NavLink to={"Research"} location={location.pathname} />
                <NavLink to={"Publications"} location={location.pathname} />
                <NavLink to={"People"} location={location.pathname} />
                <NavLink to={"Resources"} location={location.pathname} />
                <NavLink to={"Contact"} location={location.pathname} />
              </div>
            </div> :
            <></>
        }
      </nav>

      {/* ensures components after navbar do not get lost behind the navbar */}
      <div className='invisible w-full px-8 py-4 flex flex-col justify-center items-center'>
        <Logo className="h-6 sm:h-7 md:h-8 fill-slate-900" />
      </div>
    </>
  )
}

function NavLink({ to, location }) {
  return (
    <Link to={`/${ to.toLowerCase() }`} className='select-none'>
      <UnderlineEffect underline={location.includes(to.toLowerCase())}>
        { to }
      </UnderlineEffect>
    </Link>
  )
}

export default Navbar
