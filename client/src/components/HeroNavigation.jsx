import { Link } from "react-router-dom";

export default function HeroNavigation({ style, text, link }) {
  return (
    <Link
      to={link}
      className={`w-[500px] h-28 border-2 transition duration-300 cursor-pointer rounded-md letter-animation delay-small ${style}`}
    >
      <div className="p-4 flex justify-center items-center h-full">
        <h1 className="text-large font-semibold">{text}</h1>
      </div>
    </Link>
  );
}
