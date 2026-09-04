import ilphoto from "../assets/il-2026.png"
import CTA from "../components/CTA";
import SkillTags from "../components/SkillTags";
export default function Home() {
  return(
    <section className="mt-10 md:mt-25 mr-0 md:mr-30 md:ml-30">
      <img
        src={ilphoto}
        alt=""
        className="
          md:block
          absolute
          left-0
          md:-left-100
          bottom-30
          md:top-0
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
      <h1 className="font-sans leading-[1.2] text-4xl md:text-5xl font-bold">Frontend Engineer who takes platforms built to work, and makes them work <span className="underline text-brand">beautifully.</span></h1>
      <div className="flex items-start flex-col">
        <p className="text-lg md:text-2xl mt-6 font-extralight">React · Design Systems · Performance · 20+ years across code and design</p>
        <SkillTags className="mt-2" version="dev" direction="inline"/>
        <CTA className="mt-10" label="See my work >" loc="/work" />
      </div>
    </section>
  );
}
