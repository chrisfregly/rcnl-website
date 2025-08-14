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

      <div className="w-full min-h-dvh px-8 flex flex-col items-center text-slate-900">
        <div className="max-w-[72em] w-full flex flex-col">
          
          <div className="mt-12">
            <div className="flex flex-col sm:flex-row w-full justify-between sm:items-end">
              <h1 className="text-4xl font-bold">
                <UnderlineEffect underline={true} height="h-5">Funded Projects</UnderlineEffect>
              </h1>
              <div className="text-sm mt-4 sm:mt-0 border-b-2 border-blue w-full sm:max-w-72 py-1">
                <input className="w-full focus:outline-none" placeholder="Search" type="text" value={search} onChange={e => setSearch(e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 md:mt-8">
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
      <div className="group bg-white border-2 border-blue p-4 grow-0 h-full min-h-72 hover:bg-blue text-slate-900 hover:text-white ease-in-out duration-200">
        <div className="py-2 h-full flex flex-col justify-between relative top-0 ease-in-out duration-200 group-hover:-top-3">
          <div>
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="text-sm font-light">
              {role}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-blue group-hover:text-white">{funder}</p>
            <p className="font-light text-sm">From {startDate} to {endDate}</p>
          </div>
        </div>
      </div>
    </a>
  )
}