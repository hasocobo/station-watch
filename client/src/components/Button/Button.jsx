import { Link } from "react-router-dom"

export default function Button({ name, link, style }) {
  return (
    <button className={`p-2 rounded-[4px] duration-300 transition ${style}`} >
      <Link to={link} className="text-white">
        {name}
      </Link>
    </button>
  )
}