import { SiAcademia } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { TbMailFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Logo from '../../assets/rcnl-logo.svg?react';

function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-slate-200 bg-white px-8 pt-8 pb-20">
      <div className="mx-auto flex w-full max-w-[72em] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <Link to="/" aria-label="RCNL home" className="flex min-w-0 flex-col items-start gap-1">
          <Logo aria-hidden="true" className="h-6 fill-slate-900 sm:h-7 md:h-8" />
          <span className="text-sm leading-tight text-slate-700">Rice Computational<br />Neuromechanics Lab</span>
        </Link>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <div className="flex items-center gap-2" role="group" aria-label="Lab links">
            <a aria-label="B.J. Fregly on Academia" className="social-link" href="https://rice.academia.edu/BJFregly" target="_blank" rel="noreferrer">
              <SiAcademia aria-hidden="true" className="text-lg fill-slate-700" />
            </a>
            <a aria-label="Email B.J. Fregly" className="social-link" href="mailto:fregly@rice.edu">
              <TbMailFilled aria-hidden="true" className="text-2xl fill-slate-700" />
            </a>
            <a aria-label="RCNL on GitHub" className="social-link" href="https://github.com/rcnl-org" target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" className="text-xl fill-slate-700" />
            </a>
          </div>
          <p className="text-xs leading-relaxed text-slate-600">Built by <a className="underline underline-offset-2" href="https://www.chrisfregly.com" target="_blank" rel="noreferrer">Chris Fregly</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
