import Icon from "../Icon/Icon"

export default function SearchBar() {
  return (
    <div className="relative flex">
      <input type="text" className="border-2 rounded-lg w-96 h-8 px-2 hover:border-red-400 transition duration-300" placeholder="Ara"/>
      <div className="absolute top-1 right-2">
        <Icon name={"search"}/>
      </div>
    </div>
  )
}