import ilphoto from "../assets/il-2026.png"
import MarkedItem from "../components/MarkedItem"
import SkillTags from "../components/SkillTags";

export default function About() {
  return(
    <section className="md:ml-30 mt-30 mr-40 text-xl ">
      <img
        src={ilphoto}
        alt=""
        className="
          absolute 
          -left-145 
          top-0 
          h-auto 
          w-300 
          object-cover 
          mix-blend-darken 
          pointer-events-none 
          select-none 
          -z-10
          opacity-40
        "
      />
      <div className="max-w-3/4 space-y-6 font-extralight">
        <h1 className="text-5xl text-brand font-bold">About me</h1>
        <ul className="space-y-6 list-inside">
          <MarkedItem>I've spent the last 20 years moving between code and design — sometimes leading with one, sometimes the other, usually doing both at once.</MarkedItem> 
          <MarkedItem>Most recently, I spent 4+ years as the frontend owner of AudienceMaker, a data-audience platform built by a genuinely strong engineering team with a deep focus on capability. My job was making all that power feel as good to use as it is to have — modernizing the React architecture, building a design system from scratch, and shipping integrations under real deadlines.</MarkedItem>
          <MarkedItem>Before that, I spent 21 years at a health-marketing company doing everything from interactive 3D medical software to full digital campaigns — the kind of long tenure that teaches you a system end-to-end rather than just your one corner of it.</MarkedItem>
          <MarkedItem>Outside of work, I write generative music code in SuperCollider and tinker with my Neovim dev environment more than is probably necessary.</MarkedItem>
        </ul>
      </div>
      <SkillTags className="mt-8 ml-6" version="dev" direction="block"/>
    </section>
  );
}
