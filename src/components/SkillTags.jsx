import { cn } from "../lib/cn";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function SkillTags({version="dev", direction="inline", className, children}) {
  const isMobile = useMediaQuery('(max-width: 767px)'); 
  const skills = {
    "dev": [
      "React",
      "JavaScript",
      "Adobe/Figma & Design Systems",
      "Performance Optimization",
      "WordPress/PHP",
      "SQL",
      "REST/API Integration"
    ]
  }
  const buildSkills = (version) => {
    return (
      <ul className={cn('font-mono text-brand')}>
        {skills[version].map((item, index) => (
          <li className={cn('', isMobile ? "block" : direction)} key={index}>{
            (direction !== "inline" || isMobile || index > 0) && 
              <span className="px-1">+</span>
          }{item}</li>
        ))}
      </ul>
    );
  }
  const formattedSkills = buildSkills(version);
  return (
    <>
      <div className={cn('text-sm mt-10 flex gap-2 items-baseline', className)}>
        <p className="font-bold">Skills: </p>
        {formattedSkills}
      </div>
      {children}
    </>
  )
}
