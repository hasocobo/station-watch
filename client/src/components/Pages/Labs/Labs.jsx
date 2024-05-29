import { useLabs } from '../../Context/LabProvider'
import LabCard from './LabCard'

export default function Labs() {
  const { labs } = useLabs();
  return (
    <div className="mx-auto max-w-[80vw] overflow-y-auto bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-6">
            <div className="text-lg text-slate-500">
              <span className="font-bold text-slate-800">{labs.length } </span>
              laboratuvar mevcut
            </div>
          </div>
          <div className="flex items-center rounded-lg border border-slate-300 bg-white p-1 shadow-sm hover:border-sky-300">
            <input
              type="text"
              placeholder="Ara"
              className="pl-2 text-base outline-none"
            />
            <button className="material-icons ml-2 rounded-full px-2 py-2 text-slate-500">
              search
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {labs.map((lab) => <LabCard key={lab.id} name={lab.name} link={lab.id} stationAmount={lab.stations.length} />)}
      </div>
    </div>
  )
}
