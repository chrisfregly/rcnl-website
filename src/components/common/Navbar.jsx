import { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/rcnl-logo.svg?react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import UnderlineEffect from './effects/UnderlineEffect';

const pages = ['Overview', 'Research', 'Publications', 'People', 'Resources', 'Contact'];

function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => setOpen(false);
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  const links = pages.map(page => (
    <Link key={page} to={`/${page.toLowerCase()}`} onClick={() => setOpen(false)}
      aria-current={pathname === `/${page.toLowerCase()}` ? 'page' : undefined}
      className="inline-flex min-h-11 items-center py-2">
      <UnderlineEffect underline={pathname === `/${page.toLowerCase()}`}>{page}</UnderlineEffect>
    </Link>
  ));

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav ref={navRef} aria-label="Main navigation"
        onKeyDown={event => {
          if (event.key === 'Escape' && open) {
            setOpen(false);
            toggleRef.current?.focus();
          }
        }}
        onBlur={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
        }}
        className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white px-8 py-3">
        <div className="mx-auto flex w-full max-w-[72em] items-center justify-between gap-4">
          <Link to="/" aria-label="RCNL home" onClick={() => setOpen(false)}>
            <Logo aria-hidden="true" className="h-6 sm:h-7 md:h-8 fill-blue" />
          </Link>
          <div className="hidden gap-4 text-sm text-slate-900 md:flex">{links}</div>
          <button ref={toggleRef} type="button" aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-blue md:hidden">
            {open ? <MdClose aria-hidden="true" className="text-2xl" /> : <GiHamburgerMenu aria-hidden="true" className="text-xl" />}
          </button>
        </div>
        <div id="mobile-navigation" hidden={!open}
          className="mx-auto max-h-[calc(100dvh-72px)] max-w-[72em] overflow-y-auto md:hidden">
          <div className="flex flex-col py-4">{links}</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
