import { Link } from 'react-router-dom'

export default function LabCard({ name, stationAmount, link }) {
  return (
    <Link to={link}>
      <div className="flex flex-col rounded-md border bg-white shadow-md transition-shadow duration-200 hover:shadow-xl">
        <div className=" bg-zinc-50 px-6 py-5 text-center text-xl font-semibold text-slate-700">
          {name}
        </div>
        <div className="flex grow flex-col px-6 pb-6 pt-3">
          <div className='flex justify-center items-center'>
            <i className="material-symbols-outlined text-slate-400">
              local_laundry_service
            </i>
            <div className=" flex items-center justify-center gap-1 text-center text-lg font-semibold text-slate-600">
              {stationAmount}{' '}
              <span className="text-base font-normal text-slate-500">
                istasyon
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
