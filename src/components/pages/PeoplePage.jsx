import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import UnderlineEffect from "../common/effects/UnderlineEffect";
import people from "../../data/people.json"

function PeoplePage() {

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col items-center w-full px-8 text-slate-900">
        <div className="max-w-[72em] w-full flex flex-col">
          
          <div className="mt-12">
            <h1 className="text-4xl font-bold">
              <UnderlineEffect underline={true}>People</UnderlineEffect>
            </h1>
            <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-y-6 md:gap-y-8 gap-x-4 md:mt-8">
              {
                people.map(person => 
                  <Person key={person.name} name={person.name} titles={person.titles} role={person.role} description={person.description} website={person.website} email={person.email} image={person.image} />)
              }
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PeoplePage;

function Person({name, titles, role, description, website, email, image}) {

  const href = website || (email ? "mailto:" + email : undefined);
  const Container = href ? "a" : "div";
  return (
    <Container href={href} target={href ? "_blank" : undefined} rel={href ? "noreferrer" : undefined}>
      <div className="flex items-center h-full min-h-48 gap-4 px-4 py-4 quiet-card bg-white border border-slate-200 sm:px-6">
        <div className="shrink-0 w-16 h-16 border rounded-full sm:w-20 sm:h-20 border-slate-200 overflow-clip">
          <img alt="" loading="lazy" className="h-full w-full object-cover" src={`assets/people/${image}`}/>
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <p className="text-sm font-bold text-blue">{role}</p>
          <h2 className="text-lg font-bold">{name}{titles?.length > 0 ? "," : ""} {(titles || []).join(", ")}</h2>
          <p className="text-sm font-normal">{description}</p>
        </div>
      </div>
    </Container>
  )
}
