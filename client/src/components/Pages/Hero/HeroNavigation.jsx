import { Link } from 'react-router-dom'

export default function HeroNavigation({ style, text, link }) {
  return (
    <Link
      to={link}
      className={`letter-animation delay-small h-28 w-[500px] cursor-pointer rounded-md border-2 transition duration-300 ${style}`}
    >
      <div className="flex h-full items-center justify-center p-4">
        <h1 className="text-lg text-slate-600 font-semibold">{text}</h1>
      </div>
    </Link>
  )
}
