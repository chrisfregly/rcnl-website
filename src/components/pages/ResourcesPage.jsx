import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import UnderlineEffect from "../common/effects/UnderlineEffect";
import resources from "../../data/resources.json"

function ResourcesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col items-center w-full px-8 text-slate-900">
        <div className="max-w-[72em] w-full flex flex-col">
          
          <div className="mt-12">
            <h1 className="text-4xl font-bold">
              <UnderlineEffect underline={true}>Resources</UnderlineEffect>
            </h1>
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-8">
              {
                resources.map(resource => 
                  <Resource key={resource.description} name={resource.name} description={resource.description} file={resource.file} />)
              }
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ResourcesPage;

function Resource({name, description, file}) {
  return (
    <a href={"assets/resources/"+file} target="_blank" rel="noreferrer">
      <div className="flex flex-col justify-end h-full min-h-32 quiet-card bg-white border border-slate-200 text-slate-900">
        <div className="p-4">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm font-normal">{description}</p>
        </div>
      </div>
    </a>
  )
}
