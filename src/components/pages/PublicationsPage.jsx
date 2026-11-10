import SearchInput from '../common/SearchInput';
import { useState } from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import UnderlineEffect from "../common/effects/UnderlineEffect";
import publications from "../../data/publications.json"

function PublicationsPage() {

  const [search, setSearch] = useState("");

  const query = search.trim().toLocaleLowerCase();
  const pubs = publications.filter(pub =>
    [pub.title, ...(pub.authors || []).map(author => author.name), pub.journal, pub.date].some(value => String(value ?? '').toLocaleLowerCase().includes(query))
  );

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col items-center w-full px-8 text-slate-900">
        <div className="max-w-[72em] w-full flex flex-col">
          
          <div className="mt-12">
            <div className="flex flex-col justify-between w-full md:flex-row md:items-start gap-6">
              <div className="min-w-0">
              <h1 className="text-4xl font-bold">
                <UnderlineEffect underline={true}>Publications</UnderlineEffect>
              </h1>
            <div className="flex flex-col mt-4 text-sm text-slate-600">
              <p>† corresponding author</p>
              <p>§ high school student supervised by Dr. Fregly</p>
              <p>* graduate student/post-doctoral fellow supervised by Dr. Fregly</p>
            </div>
              </div>
              <div className="w-full py-1 text-sm md:max-w-80 md:shrink-0">
                <label htmlFor="publications-search" className="sr-only">Search publications</label>
                <SearchInput id="publications-search" placeholder="Title, author, journal, or date" value={search} onChange={setSearch} />
                <p role="status" aria-live="polite" aria-atomic="true" className="mt-2 text-right text-sm text-slate-600">{pubs.length} { pubs.length === 1 ? 'publication' : 'publications' } found</p>
              </div>
            </div>

            {pubs.length === 0 && (
              <div className="my-8">
                <h2 className="text-xl font-bold">No publications found</h2>
                <p className="mt-2">Try a different search term.</p>
                {search && <button type="button" className="mt-4 min-h-11 px-4 py-2 bg-blue text-white" onClick={() => { setSearch(''); document.getElementById('publications-search')?.focus(); }}>Clear search</button>}
              </div>
            )}
            <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
              {
                pubs.map(publication => 
                  <Publication key={publication.title} title={publication.title} journal={publication.journal} volume={publication.volume} authors={publication.authors} date={publication.date} file={publication.file} />)
              }
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PublicationsPage;

function Publication({title, journal, volume, authors, date, file}) {

  return (
    <a href={"assets/publications/"+file} target="_blank" rel="noreferrer">
      <div className="h-full p-4 quiet-card bg-white border border-slate-200 grow-0 min-h-72 text-slate-900">
        <div className="flex flex-col justify-between gap-6 h-full py-2">
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm font-normal">
              {authors
                .map(author => `${author.name}${author.tag === "postgraduate" ? "*" : ""}${author.tag === "highschool" ? "§" : ""}${author.tag === "corresponding_author" ? "†" : ""}`)
                .join(", ")}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-blue">{journal} {volume ? `Volume ${volume}` : ""}</p>
            <p className="text-sm font-normal">Published {date}</p>
          </div>
        </div>
      </div>
    </a>
  )
}
