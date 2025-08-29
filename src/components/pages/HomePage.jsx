import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import ParticleEffect from "../common/effects/ParticleEffect";

function HomePage() {
  return (
    <>
      <Navbar />

      <ParticleEffect className="absolute top-0 h-screen -z-10" />

      <div className="flex flex-col items-center justify-center w-full px-8">
        <div className="max-w-[72em] w-full flex flex-col">

          <div className="flex flex-col w-full mt-8 select-none sm:mt-16 md:mt-32 text-slate-900">
            <h1 className="max-w-xs text-2xl font-bold sm:text-4xl md:text-6xl sm:max-w-lg md:max-w-2xl">
              Rice Computational Neuromechanics Lab
            </h1>
            <p className="max-w-xs mt-2 text-sm text-slate-500 sm:text-base md:text-xl sm:max-w-lg md:max-w-3xl">
              Making model-based personalized treatment design for neurologic and orthopedic movement impairments a clinical reality
            </p>
            <div className="flex w-full my-4 select-none sm:mt-6 md:mt-8">
              <Link to={"/overview"}>
                <p className="p-4 text-xs text-white rounded-sm sm:text-sm md:text-base bg-blue">
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;
