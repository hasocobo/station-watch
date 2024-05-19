export default function Select({
  title,
  name,
  id,
  value,
  onChange,
  options,
  style = '',
  optionStyle
}) {
  return (
    <div className={`${style} `}>
      {title && (
        <label htmlFor={name} className="text-lg font-semibold text-slate-600">
          {title}
        </label>
      )}
      <select
        key={name}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`rounded-sm border-b-2 px-4 py-2 border-sky-200 bg-slate-100 font-semibold text-slate-600 transition duration-300 ${optionStyle}`}
      >
        {options.length && options.map((option) => (
          <option key={option.name || option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
