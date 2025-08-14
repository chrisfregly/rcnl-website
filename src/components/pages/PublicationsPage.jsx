import { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import UnderlineEffect from "../common/effects/UnderlineEffect";
import ParticleEffect from "../common/effects/ParticleEffect";
import publications from "../../data/publications.json"

const effect = <ParticleEffect className="absolute top-0 h-screen -z-10" />;

function PublicationsPage() {

  const [search, setSearch] = useState("");

  const [pubs, setPubs] = useState(publications);
  useEffect(() => {
    setPubs(publications.filter(pub => 
      pub.title.toLowerCase().includes(search.toLowerCase()) || 
      pub.authors.map(author => author.name).join().toLowerCase().includes(search.toLowerCase()) ||
      pub.journal.toLowerCase().includes(search.toLowerCase()) ||
      pub.date.includes(search.toLowerCase())
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
                <UnderlineEffect underline={true} height="h-5">Publications</UnderlineEffect>
              </h1>
              <div className="text-sm mt-4 sm:mt-0 border-b-2 border-blue w-full sm:max-w-72 py-1">
                <input className="w-full focus:outline-none" placeholder="Search" type="text" value={search} onChange={e => setSearch(e.target.value)} />
              </div>
            </div>
            <div className="mt-4 text-xs font-light flex flex-col">
              <p>† corresponding author</p>
              <p>§ high school student supervised by Dr. Fregly</p>
              <p>* graduate student/post-doctoral fellow supervised by Dr. Fregly</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {
                pubs.map(publication => 
                  <Publication key={publication.title} title={publication.title} journal={publication.journal} volume={publication.volume} authors={publication.authors} date={publication.date} file={publication.file} />)
              }
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default PublicationsPage;

function Publication({title, journal, volume, authors, date, file}) {

  return (
    <a href={"assets/publications/"+file} target="_blank" rel="noreferrer">
      <div className="group bg-white border-2 border-blue p-4 grow-0 h-full min-h-72 hover:bg-blue text-slate-900 hover:text-white ease-in-out duration-200">
        <div className="py-2 h-full flex flex-col justify-between relative top-0 ease-in-out duration-200 group-hover:-top-3">
          <div>
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="text-sm font-light">
              {authors
                .map(author => `${author.name}${author.tag === "postgraduate" ? "*" : ""}${author.tag === "highschool" ? "§" : ""}${author.tag === "corresponding_author" ? "†" : ""}`)
                .join(", ")}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-blue group-hover:text-white">{journal} {volume ? `Volume ${volume}` : ""}</p>
            <p className="font-light text-sm">Published {date}</p>
          </div>
        </div>
      </div>
    </a>
  )
}