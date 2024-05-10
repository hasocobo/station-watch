import Icon from '../Icon/Icon'

export default function SearchBar() {
  return (
    <div className="relative flex">
      <input
        type="text"
        className="h-8 w-96 rounded-lg border-2 px-2 transition duration-300 hover:border-red-400"
        placeholder="Ara"
      />
      <div className="absolute right-2 top-1">
        <Icon name={'search'} />
      </div>
    </div>
  )
}
