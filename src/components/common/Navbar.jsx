import { useLayoutEffect, useRef, useState } from 'react';
import Logo from '../../assets/rcnl-logo.svg?react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import UnderlineEffect from './effects/UnderlineEffect';
import './Navbar.css';

const pages = ['Overview', 'Research', 'Publications', 'People', 'Resources', 'Contact'];

function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const navRef = useRef(null);
  const rowRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const [collapsed, setCollapsed] = useState(true);

  useLayoutEffect(() => {
    let active = true;
    const measure = () => {
      if (!active) return;
      const row = rowRef.current;
      const nav = navRef.current;
      const needed = logoRef.current.getBoundingClientRect().width
        + linksRef.current.getBoundingClientRect().width
        + parseFloat(getComputedStyle(row).columnGap);
      const shouldCollapse = needed > row.clientWidth;
      // Keep keyboard focus reachable when its current link becomes hidden.
      if (shouldCollapse && linksRef.current.contains(document.activeElement)) {
        requestAnimationFrame(() => { if (active) toggleRef.current?.focus(); });
      }
      if (!shouldCollapse) setOpen(false);
      setCollapsed(shouldCollapse);
      const style = getComputedStyle(nav);
      const height = row.getBoundingClientRect().height + parseFloat(style.paddingTop)
        + parseFloat(style.paddingBottom) + parseFloat(style.borderBottomWidth);
      nav.style.setProperty('--nav-header-height', `${height}px`);
    };
    const observer = new ResizeObserver(measure);
    for (const element of [rowRef.current, logoRef.current, linksRef.current]) observer.observe(element);
    measure();
    document.fonts.ready.then(measure);
    return () => { active = false; observer.disconnect(); };
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
        <div ref={rowRef} className="nav-row mx-auto flex w-full max-w-[72em] items-center justify-between gap-4">
          <Link ref={logoRef} className="shrink-0" to="/" aria-label="RCNL home" onClick={() => setOpen(false)}>
            <Logo aria-hidden="true" className="h-6 sm:h-7 md:h-8 fill-blue" />
          </Link>
          <div ref={linksRef} className="nav-desktop text-sm text-slate-900" data-collapsed={collapsed} aria-hidden={collapsed || undefined} inert={collapsed}>{links}</div>
          <button ref={toggleRef} type="button" aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}
            hidden={!collapsed} className="nav-toggle h-11 w-11 shrink-0 items-center justify-center text-blue">
            {open ? <MdClose aria-hidden="true" className="text-2xl" /> : <GiHamburgerMenu aria-hidden="true" className="text-xl" />}
          </button>
        </div>
        <div id="mobile-navigation" hidden={!collapsed || !open}
          className="nav-mobile mx-auto max-w-[72em] overflow-y-auto">
          <div className="flex flex-col py-4">{links}</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
