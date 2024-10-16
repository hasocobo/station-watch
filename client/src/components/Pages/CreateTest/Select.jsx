export default function Select({
  children,
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
        <label htmlFor={name} className="text-base mb-1 font-semibold text-slate-700 text-nowrap">
          {title}
        </label>
      )}
      <select
        key={name}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`rounded-sm border-b-2 px-4 py-2 border-sky-200 bg-slate-50 font-semibold text-slate-500 transition duration-300 ${optionStyle}`}
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
