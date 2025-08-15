import { cloneElement } from "react";
import Navbar from "../common/Navbar";
import UnderlineEffect from "../common/effects/UnderlineEffect";
import ParticleEffect from "../common/effects/ParticleEffect";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidPrinter } from "react-icons/bi";
import { MdMarkunreadMailbox } from "react-icons/md";
import Footer from "../common/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />

      <ParticleEffect className="absolute top-0 h-screen -z-10" />

      <div className="min-h-dvh w-full px-8 flex flex-col items-center text-slate-900">
        <div className="max-w-[72em] w-full flex flex-col">
          
          <h1 className="text-4xl font-bold mt-12">
            <UnderlineEffect underline={true} height="h-5">Contact</UnderlineEffect>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mt-4 md:mt-8">
            <div className="flex w-full justify-center md:justify-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
                <Contact name={"Email"} href={"mailto:fregly@rice.edu"} info={"fregly@rice.edu"} icon={<MdEmail />} />
                <Contact name={"Phone"} href={"tel:7133484906"} info={"(713) 348-4906"} icon={<FaPhoneAlt />} />
                <Contact name={"Fax"} href={"tel:7133485423"} info={"(713) 348-5423"} icon={<BiSolidPrinter />} />
                <Contact name={"Mail"} href={"https://delivery.rice.edu/overview/rices-addresses-for-mailing-and-shipping-services"} info={
                  <>
                  <p>P.O. Box 1892 MS-321</p>
                  <p>Houston, TX 77251-1892</p>
                  </>
                } icon={<MdMarkunreadMailbox />} />
              </div>
            </div>

            <iframe className="border-2 h-72 w-full md:h-full border-slate-200 rounded-xl md:rounded-2xl" allowFullScreen={true}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.9925263890127!2d-95.40280908488693!3d29.719975740782047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68cceacce233949!2sDepartment+of+Mechanical+Engineering+and+Materials+Science!5e0!3m2!1sen!2sus!4v1501714104659" />
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default ContactPage;

function Contact({name, href, info, icon}) {

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="group flex flex-col justify-between md:max-w-56 md:max-h-56 w-full h-36 md:w-[22vw] md:h-[22vw] border-2 border-blue p-4 bg-white hover:bg-blue hover:text-white ease-in-out duration-200">
        <div className="flex items-center justify-start">
          { icon ? cloneElement(icon, {className: "fill-blue group-hover:fill-white text-xl"}) : <></> }
        </div>
        <div className="relative top-0 ease-in-out duration-200 group-hover:-top-3">
          <h1 className="font-bold">{name}</h1>
          <div className="text-sm font-light">{info}</div>
        </div>
      </div>
    </a>
  )
}