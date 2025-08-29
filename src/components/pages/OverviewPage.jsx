import ParticleEffect from "../common/effects/ParticleEffect";
import UnderlineEffect from "../common/effects/UnderlineEffect";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

function OverviewPage() {

  return (
    <>
      <Navbar />

      <ParticleEffect className="absolute top-0 h-screen -z-10" />

      <div className="flex flex-col items-center w-full px-8 min-h-dvh text-slate-900">
        <div className="max-w-[72em] w-full flex flex-col">
          
          <h1 className="mt-12 text-4xl font-bold">
            <UnderlineEffect underline={true} height="h-5">Overview</UnderlineEffect>
          </h1>

          <div className="mt-4 md:mt-8">
            ADD HERE - In layman's terms, A paragraph or two about what the lab works on and has accomplished.
          </div>
          <div className="mt-4 md:mt-8">
            ADD HERE - Some cool images, graphics or video of what the lab works on.
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default OverviewPage;
