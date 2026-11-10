import { useEffect } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import UnderlineEffect from '../common/effects/UnderlineEffect';

export default function RecoveryPage({ notFound = false }) {
  const heading = notFound ? 'Page not found' : 'Unable to load this page';
  useEffect(() => {
    document.title = `${heading} | Rice Computational Neuromechanics Lab`;
    document.querySelector('main')?.focus({ preventScroll: true });
  }, [heading]);

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 w-full px-8 text-slate-900">
        <div className="mx-auto mt-12 max-w-[72em]">
          <h1 className="text-4xl font-bold"><UnderlineEffect underline>{heading}</UnderlineEffect></h1>
          <div className="mt-8 max-w-2xl border border-slate-200 bg-white p-6">
            <p className="leading-relaxed">{notFound ? 'This address does not match a page on the lab website. Check the URL or return to the homepage.' : 'Something prevented this page from loading. Try again, or return to the homepage to continue browsing.'}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a href="/" className="primary-link inline-flex min-h-11 items-center bg-blue px-5 py-3 text-white">Return to homepage</a>
              {!notFound && <button type="button" onClick={() => window.location.reload()} className="min-h-11 px-4 py-2 text-blue underline underline-offset-4">Try again</button>}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
