import SearchInput from '../common/SearchInput';
import { useState } from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import UnderlineEffect from "../common/effects/UnderlineEffect";
import research from "../../data/research.json"

function ResearchPage() {

  const [search, setSearch] = useState("");

  const query = search.trim().toLocaleLowerCase();
  const projects = research.filter(proj =>
    [proj.title, proj.funder].some(value => String(value ?? '').toLocaleLowerCase().includes(query))
  );

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex flex-col items-center w-full px-8 flex-1 text-slate-900">
        <div className="max-w-[72em] w-full flex flex-col">
          
          <div className="mt-12">
            <div className="flex flex-col justify-between w-full md:flex-row md:items-start gap-6">
              <h1 className="text-4xl font-bold">
                <UnderlineEffect underline={true}>Funded Projects</UnderlineEffect>
              </h1>
              <div className="w-full py-1 text-sm md:max-w-80 md:shrink-0">
                <label htmlFor="projects-search" className="sr-only">Search projects</label>
                <SearchInput id="projects-search" placeholder="Title or funder" value={search} onChange={setSearch} />
                <p role="status" aria-live="polite" aria-atomic="true" className="mt-2 text-right text-sm text-slate-600">{projects.length} { projects.length === 1 ? 'project' : 'projects' } found</p>
              </div>
            </div>
            {projects.length === 0 && (
              <div className="my-8">
                <h2 className="text-xl font-bold">No projects found</h2>
                <p className="mt-2">Try a different search term.</p>
                {search && <button type="button" className="mt-4 min-h-11 px-4 py-2 bg-blue text-white" onClick={() => { setSearch(''); document.getElementById('projects-search')?.focus(); }}>Clear search</button>}
              </div>
            )}
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-8">
              {
                projects.map(project => 
                  <Project key={project.title} title={project.title} funder={project.funder} role={project.role} startDate={project.startDate} endDate={project.endDate} file={project.file} />)
              }
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ResearchPage;

function Project({title, funder, role, startDate, endDate, file}) {

  const Container = file ? "a" : "article";
  return (
    <Container href={file ? "/assets/research/" + file : undefined} target={file ? "_blank" : undefined} rel={file ? "noreferrer" : undefined}>
      <div className="h-full p-4 quiet-card bg-white border border-slate-200 grow-0 min-h-72 text-slate-900">
        <div className="flex flex-col justify-between gap-6 h-full py-2">
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm font-normal">
              {role}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-blue">{funder}</p>
            <p className="text-sm font-normal">From {startDate} to {endDate}</p>
            {!file && <p className="mt-2 text-sm">Project summary unavailable</p>}
          </div>
        </div>
      </div>
    </Container>
  )
}
