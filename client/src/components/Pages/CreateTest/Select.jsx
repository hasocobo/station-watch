export default function Select({ title, name, value, onChange, options, style, optionStyle }) {
  return (
    <div className={`${style}`}>
      <h1 className="font-semibold text-xl">{title}</h1>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`py-2 px-4 w-[45rem] transition duration-300 font-semibold rounded-md bg-blue-50 ${optionStyle}`}
      >
        {options.map((option) =>
          <option key={option.name} value={option.name}>{option.name}</option>
        )}
      </select>
    </div>
  );
}