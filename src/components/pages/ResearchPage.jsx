import { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import UnderlineEffect from "../common/effects/UnderlineEffect";
import ParticleEffect from "../common/effects/ParticleEffect";
import research from "../../data/research.json"

const effect = <ParticleEffect className="absolute top-0 h-screen -z-10" />;

function ResearchPage() {

  const [search, setSearch] = useState("");

  const [projects, setProjects] = useState(research);
  useEffect(() => {
    setProjects(research.filter(proj => 
      proj.title.toLowerCase().includes(search.toLowerCase()) || 
      proj.funder.toLowerCase().includes(search.toLowerCase())
    ))
  }, [search])

  return (
    <>
      <Navbar />

      { effect }

      <div className="flex flex-col items-center w-full px-8 min-h-dvh text-slate-900">
        <div className="max-w-[72em] w-full flex flex-col">
          
          <div className="mt-12">
            <div className="flex flex-col justify-between w-full sm:flex-row sm:items-end">
              <h1 className="text-4xl font-bold">
                <UnderlineEffect underline={true} height="h-5">Funded Projects</UnderlineEffect>
              </h1>
              <div className="w-full py-1 mt-4 text-sm border-b-2 sm:mt-0 border-blue sm:max-w-72">
                <input className="w-full focus:outline-none" placeholder="Search" type="text" value={search} onChange={e => setSearch(e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 md:mt-8">
              {
                projects.map(project => 
                  <Project key={project.title} title={project.title} funder={project.funder} role={project.role} startDate={project.startDate} endDate={project.endDate} file={project.file} />)
              }
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default ResearchPage;

function Project({title, funder, role, startDate, endDate, file}) {

  return (
    <a href={"assets/research/"+file} target="_blank" rel="noreferrer">
      <div className="h-full p-4 duration-200 ease-in-out bg-white border-2 group border-blue grow-0 min-h-72 hover:bg-blue text-slate-900 hover:text-white">
        <div className="relative top-0 flex flex-col justify-between h-full py-2 duration-200 ease-in-out group-hover:-top-3">
          <div>
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="text-sm font-light">
              {role}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-blue group-hover:text-white">{funder}</p>
            <p className="text-sm font-light">From {startDate} to {endDate}</p>
          </div>
        </div>
      </div>
    </a>
  )
}