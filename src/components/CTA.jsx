import NavItem from "./NavItem";

export default function CTA({label, loc}){
  return(
    <div className="p-5 font-bold text-2xl flex justify-end">
      <NavItem className="" to={loc}>{label}</NavItem>
    </div>
  )
}

