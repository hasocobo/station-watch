import { Link, useParams } from "react-router-dom"

export default function Icon({ name }) {
  return (
    <div className="material-symbols-outlined flex items-center justify-center icon cursor-pointer">
      <div className="icon">
        {name}
      </div>
    </div>
  )
}