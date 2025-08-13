import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import ParticleEffect from "./ParticleEffect";

function HomePage() {
  return (
    <>
      <Navbar />

      <ParticleEffect className="absolute top-0 h-screen -z-10" />

      <div className="w-full px-8 flex flex-col justify-center items-center">
        <div className="max-w-[72em] w-full flex flex-col">

          <div className="mt-8 sm:mt-16 md:mt-32 text-slate-900 w-full flex flex-col select-none">
            <h1 className="font-bold text-2xl sm:text-4xl md:text-6xl max-w-xs sm:max-w-lg md:max-w-2xl">
              Rice Computational Neuromechanics Lab
            </h1>
            <p className="mt-2 text-slate-500 text-sm sm:text-base md:text-xl max-w-xs sm:max-w-lg md:max-w-3xl">
              Making model-based personalized treatment design for neurologic and orthopedic movement impairments a clinical reality
            </p>
            <div className="my-4 sm:mt-6 md:mt-8 w-full flex select-none">
              <Link to={"/overview"}>
                <p className="text-xs sm:text-sm md:text-base bg-blue p-4 text-white rounded-sm">
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
