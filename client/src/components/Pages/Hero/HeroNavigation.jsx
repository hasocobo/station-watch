import { Link } from 'react-router-dom'

export default function HeroNavigation({ style, text, link }) {
  return (
    <Link
      to={link}
      className={`letter-animation delay-small h-28 sm:w-[300px] lg:w-[500px] md:w-[350px] w-[250px] cursor-pointer rounded-xl
      md:rounded-lg border-2 transition duration-300 ${style}`}
    >
      <div className="flex h-full items-center justify-center p-4">
        <h1 className="md:text-lg text-base text-slate-600 font-semibold">{text}</h1>
      </div>
    </Link>
  )
}
