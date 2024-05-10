import { Link } from 'react-router-dom'

export default function Button({ name, link, style }) {
  return (
    <button className={`rounded-[4px] p-2 transition duration-300 ${style}`}>
      <Link to={link} className="text-white">
        {name}
      </Link>
    </button>
  )
}
