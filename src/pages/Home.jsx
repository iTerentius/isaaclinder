import { Link } from "react-router";
import NavItem from "../components/NavItem";
import ilphoto from "../assets/il-2026.png"
import CTA from "../components/CTA";
export default function Home() {
  return(
    <section className="ml-0 mt-10 md:mt-15 mr-0 md:mr-30 md:ml-60">
      <img
        src={ilphoto}
        alt=""
        className="
          absolute 
          -left-80  
          top-0 
          h-auto 
          w-300 
          object-cover 
          mix-blend-darken 
          pointer-events-none 
          select-none 
          -z-10
          opacity-60
        "
      />
      <h1 className="font-sans leading-[1.2] text-5xl font-bold">Frontend Engineer who takes platforms from purely functional to <span className="underline text-brand">genuinely good.</span></h1>
      <div className="max-w-4xl flex items-start flex-col">
        <p className="text-2xl mt-6 font-extralight">React · Design Systems · Performance · 20+ years across code and design</p>
        <CTA label="See my work >" loc="/about" />
      </div>
      {/* <img className="mix-blend-darken" src={ilphoto} /> */}
    </section>
  );
}
