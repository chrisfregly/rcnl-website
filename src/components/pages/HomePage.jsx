import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import UnderlineEffect from '../common/effects/UnderlineEffect';

function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 w-full px-8 pb-24 text-slate-900">
        <div className="mx-auto max-w-[72em] pt-12 sm:pt-16">
          <div className="home-introduction">
            <h1 className="text-3xl font-bold sm:text-5xl lg:text-[3.5rem]">
              Rice <UnderlineEffect underline>Computational Neuromechanics</UnderlineEffect> Lab
            </h1>
            <div className="home-mission">
              <p className="text-base leading-relaxed text-slate-700 lg:text-lg">
                Making model-based personalized treatment design for neurologic and orthopedic movement impairments a clinical reality
              </p>
              <Link to="/overview" className="primary-link mt-6 inline-flex min-h-11 items-center rounded-sm bg-blue px-6 py-3 text-base text-white">Learn More</Link>
            </div>
          </div>
          <figure className="mt-10 min-w-0 lg:mt-12">
            <img src="/assets/campus/rice-lovett-hall.jpg" alt="Lovett Hall and its courtyard on the Rice University campus" width="1088" height="680" fetchPriority="high" className="campus-photo border border-slate-200" />
            <figcaption className="mt-3 text-sm leading-relaxed text-slate-700">
              Lovett Hall, Rice University. Photo by{' '}
              <a className="underline" href="https://commons.wikimedia.org/wiki/File:Rice_University.jpg">Anatol Stefanowitsch</a>
              {' (cropped on desktop) · '}<a className="underline" href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>
            </figcaption>
          </figure>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
