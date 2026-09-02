import Button from "./Button"
export default function CTA({label, loc}){
  return(
    <div className="mt-5 font-bold text-xl">
      <Button variant="secondary" to={loc}>{label}</Button>
    </div>
  )
}

