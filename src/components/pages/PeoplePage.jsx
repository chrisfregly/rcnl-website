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

      <div className="w-full px-8 flex flex-col justify-center items-center text-slate-900">
        <div className="max-w-[72em] w-full flex flex-col">
          
          <div className="mt-12">
            <h1 className="text-4xl font-bold">
              <UnderlineEffect underline={true} height="h-5">People</UnderlineEffect>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 sm:gap-y-6 md:gap-y-8 gap-x-4 mt-4 md:mt-8">
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
      <div className="group flex items-center gap-4 bg-white border-2 border-blue px-4 sm:px-6 md:px-8 py-4 h-48 hover:bg-blue hover:text-white ease-in-out duration-200">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-blue group-hover:border-white overflow-clip relative top-0 ease-in-out duration-200 group-hover:-top-3">
          <img className="w-full" src={`assets/people/${image}`}/>
        </div>
        <div className="flex flex-col max-w-52 sm:max-w-36 md:max-w-48 relative top-0 ease-in-out duration-200 group-hover:-top-3">
          <p className="text-sm font-bold text-blue group-hover:text-light-blue">{role}</p>
          <h1 className="text-lg font-bold">{name}{titles.length !== 0 ? "," : ""} {titles.join(", ")}</h1>
          <p className="text-sm font-light">{description}</p>
        </div>
      </div>
    </a>
  )
}
