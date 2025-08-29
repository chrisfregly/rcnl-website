import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import UnderlineEffect from "../common/effects/UnderlineEffect";
import ParticleEffect from "../common/effects/ParticleEffect";
import people from "../../data/people.json"

function PeoplePage() {

  return (
    <>
      <Navbar />

      <ParticleEffect className="absolute top-0 h-screen -z-10" />

      <div className="flex flex-col items-center justify-center w-full px-8 text-slate-900">
        <div className="max-w-[72em] w-full flex flex-col">
          
          <div className="mt-12">
            <h1 className="text-4xl font-bold">
              <UnderlineEffect underline={true} height="h-5">People</UnderlineEffect>
            </h1>
            <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 gap-y-4 sm:gap-y-6 md:gap-y-8 gap-x-4 md:mt-8">
              {
                people.map(person => 
                  <Person key={person.name} name={person.name} titles={person.titles} role={person.role} description={person.description} website={person.website} email={person.email} image={person.image} />)
              }
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  )
}

export default PeoplePage;

function Person({name, titles, role, description, website, email, image}) {

  return (
    <a href={website ? website : email ? "mailto:" + email : ""} target="_blank" rel="noreferrer">
      <div className="flex items-center h-48 gap-4 px-4 py-4 duration-200 ease-in-out bg-white border-2 group border-blue sm:px-6 md:px-8 hover:bg-blue hover:text-white">
        <div className="relative top-0 w-16 h-16 duration-200 ease-in-out border-2 rounded-full sm:w-20 sm:h-20 md:w-24 md:h-24 border-blue group-hover:border-white overflow-clip group-hover:-top-3">
          <img className="w-full" src={`assets/people/${image}`}/>
        </div>
        <div className="relative top-0 flex flex-col duration-200 ease-in-out max-w-52 sm:max-w-36 md:max-w-48 group-hover:-top-3">
          <p className="text-sm font-bold text-blue group-hover:text-light-blue">{role}</p>
          <h1 className="text-lg font-bold">{name}{titles.length !== 0 ? "," : ""} {titles.join(", ")}</h1>
          <p className="text-sm font-light">{description}</p>
        </div>
      </div>
    </a>
  )
}
