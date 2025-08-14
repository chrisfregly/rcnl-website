import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import UnderlineEffect from "../common/effects/UnderlineEffect";
import ParticleEffect from "../common/effects/ParticleEffect";
import resources from "../../data/resources.json"

function ResourcesPage() {
  return (
    <>
      <Navbar />

      <ParticleEffect className="absolute top-0 h-screen -z-10" />

      <div className="w-full min-h-dvh px-8 flex flex-col items-center text-slate-900">
        <div className="max-w-[72em] w-full flex flex-col">
          
          <div className="mt-12">
            <h1 className="text-4xl font-bold">
              <UnderlineEffect underline={true} height="h-5">Resources</UnderlineEffect>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 md:mt-8">
              {
                resources.map(resource => 
                  <Resource key={resource.description} name={resource.name} description={resource.description} file={resource.file} />)
              }
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default ResourcesPage;

function Resource({name, description, file}) {
  return (
    <a href={"assets/resources/"+file} target="_blank" rel="noreferrer">
      <div className="group flex flex-col justify-end h-32 bg-white border-2 border-blue hover:bg-blue text-slate-900 hover:text-white ease-in-out duration-200">
        <div className="p-4 relative top-0 ease-in-out duration-200 group-hover:-top-3">
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-sm font-light">{description}</p>
        </div>
      </div>
    </a>
  )
}
