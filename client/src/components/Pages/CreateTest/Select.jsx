export default function Select({ title, options }) {
  return (
    <div>
      <h1 className="font-semibold text-xl">{title}</h1>
      <select name="lab" id="lab" className="py-2 px-4 md:w-[45rem] mt-2 transition duration-300 font-semibold rounded-md bg-blue-50">
        {options.map((option) =>
          <option key={option.name} value={option.name}>{option.name}</option>
        )}
      </select>
    </div>
  );
}