import { SiAcademia } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import Logo from '../../assets/rcnl-logo.svg?react';

function Footer() {

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full px-8 pt-8 pb-4 mt-16 bg-white border-t-2 border-slate-200'>
        <div className='max-w-[72em] w-full flex items-center justify-between'>
          <Link to={"/"}>
            <Logo className="h-6 sm:h-7 md:h-8 fill-slate-900" />
          </Link>
          <div className="flex items-center gap-2">
            <a href="https://rice.academia.edu/BJFregly" target="_blank" rel="noreferrer">
              <SiAcademia className="text-lg fill-slate-700"/>
            </a>
            <a href="mailto:fregly@rice.edu">
              <TbMailFilled className="text-2xl fill-slate-700" />
            </a>
            <a href="https://github.com/rcnl-org" target="_blank" rel="noreferrer">
              <FaGithub className="text-xl fill-slate-700" />
            </a>
          </div>
        </div>
        <div className="max-w-[72em] w-full flex justify-end">
          <div className="mt-1 text-xs font-thin">Built by <a className="underline" href="https://www.chrisfregly.com" target="_blank" rel="noreferrer">Chris Fregly</a></div>
        </div>
      </div>
    </>
  )
}

export default Footer;
