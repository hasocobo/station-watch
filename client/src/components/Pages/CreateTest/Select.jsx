export default function Select({
  title,
  name,
  value,
  onChange,
  options,
  style,
  optionStyle
}) {
  return (
    <div className={`${style}`}>
      <h1 className="text-xl font-semibold">{title}</h1>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`w-[45rem] rounded-md bg-blue-50 px-4 py-2 font-semibold transition duration-300 ${optionStyle}`}
      >
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
