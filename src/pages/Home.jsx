import { Link } from "react-router";
import ilphoto from "../assets/isaac-linder.jpeg"
export default function Home() {
  return(
    <section>
      <h1 className="font-sans text-5xl font-bold">Frontend Engineer who takes platforms from purely functional to <span className="underline">genuinely good.</span></h1>
      <h3 className="text-2xl mt-6">React · Design Systems · Performance · 20+ years across code and design</h3>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <img src={ilphoto} />
    </section>
  );
}
