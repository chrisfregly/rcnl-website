import './OverviewPage.css';
import { Link } from 'react-router-dom';
import UnderlineEffect from '../common/effects/UnderlineEffect';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

function OverviewPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 overview-page w-full px-8 text-slate-900">
        <div className="mx-auto max-w-[72em]">
          <h1 className="overview-title text-4xl font-bold">
            <UnderlineEffect underline>Overview</UnderlineEffect>
          </h1>
          <div className="overview-opening">
            <section aria-labelledby="overview-purpose" className="overview-purpose">
              <h2 id="overview-purpose" className="overview-statement text-lg font-bold">Understanding movement. Personalizing treatment.</h2>
              <p className="mt-4 max-w-[70ch] text-base leading-relaxed">
                The Rice Computational Neuromechanics Lab studies how computer models of an individual’s body and movement can help guide treatment design. Our goal is to make personalized, model-based treatment planning a clinical reality for people with neurologic and orthopedic movement impairments.
              </p>
              <p className="mt-4 max-w-[70ch] leading-relaxed text-slate-700">
                People differ in how their joints, muscles, and nervous systems work together. We develop tools to capture those differences in a computational model, then use simulations to explore how an individual might move under different treatment strategies.
              </p>
            </section>

            <section aria-labelledby="overview-research" className="overview-research">
              <h2 id="overview-research" className="text-lg font-bold">Research in practice</h2>
              <div className="overview-section-body">
              <p className="leading-relaxed text-slate-700">
                Our project portfolio has included post-stroke walking rehabilitation, surgical and rehabilitation planning for pelvic sarcomas, knee osteoarthritis and joint mechanics, and methods for measuring human motion. These projects connect computational methods with questions about movement and treatment.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                <Link className="inline-flex min-h-11 items-center text-blue underline underline-offset-4" to="/research">Explore funded projects</Link>
                <Link className="inline-flex min-h-11 items-center text-blue underline underline-offset-4" to="/publications">Read our publications</Link>
              </div>
              </div>
            </section>
          </div>

          <section aria-labelledby="overview-pipeline" className="overview-pipeline">
            <h2 id="overview-pipeline" className="text-lg font-bold">From movement data to treatment simulations</h2>
            <p className="mt-4 max-w-[70ch] leading-relaxed text-slate-700">
              The Neuromusculoskeletal Modeling (NMSM) Pipeline brings this approach into a shared research toolset. Built with OpenSim and MATLAB, it links model personalization with treatment optimization.
            </p>
            <ol className="overview-workflow">
              <li className="overview-workflow-step">
                <h3 className="text-base font-bold">Personalize the model</h3>
                <p className="mt-3 leading-relaxed text-slate-700">
                  Use motion-capture measurements, forces, and muscle activity recordings to adjust joint, muscle-tendon, neural control, and foot-ground contact properties for an individual.
                </p>
              </li>
              <li className="overview-workflow-step">
                <h3 className="text-base font-bold">Explore treatment options</h3>
                <p className="mt-3 leading-relaxed text-slate-700">
                  Reproduce measured movement, check the model’s predictive behavior, and use optimization to investigate treatment strategies tailored to that individual’s goals.
                </p>
              </li>
            </ol>
            <a className="mt-4 inline-flex min-h-11 items-center text-blue underline underline-offset-4" href="https://nmsm.rice.edu/">Explore the NMSM Pipeline and documentation</a>
          </section>

          <section aria-labelledby="overview-collaborate" className="overview-collaborate">
            <h2 id="overview-collaborate" className="text-lg font-bold">Tools for a shared research effort</h2>
            <div className="overview-section-body">
            <p className="max-w-[70ch] leading-relaxed text-slate-700">
              Our GitHub organization hosts the NMSM Pipeline codebase, tutorials, examples, and test suite. Researchers can explore the tools, report issues, suggest features, or contribute to their development. If your work connects with these questions, explore our team and get in touch.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              <a className="inline-flex min-h-11 items-center text-blue underline underline-offset-4" href="https://github.com/rcnl-org">Explore our code on GitHub</a>
              <Link className="inline-flex min-h-11 items-center text-blue underline underline-offset-4" to="/people">Meet the team</Link>
              <Link className="inline-flex min-h-11 items-center text-blue underline underline-offset-4" to="/contact">Contact the lab</Link>
            </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default OverviewPage;
