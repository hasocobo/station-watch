export default function StationCard({
  title,
  cycles,
  status,
  statusColor,
  componentId,
  textColor
}) {
  return (
    <div className="rounded-md border flex flex-col bg-white shadow-md transition-shadow duration-200 hover:shadow-xl">
      <div className=" bg-zinc-50 px-6 py-5 text-center text-xl font-semibold text-slate-700">
        {title}
      </div>
      <div className="px-6 pb-6 pt-3 flex grow flex-col">
        {cycles && (
          <div className="mb-4 flex items-center justify-center gap-1 text-center text-lg font-semibold text-slate-600">
            <i className="material-symbols-outlined text-slate-400">cycle</i>
            <div>
              {cycles}.{' '}
              <span className="text-base font-normal text-slate-500">
                çevrim
              </span>{' '}
            </div>
          </div>
        )}
        {componentId && (
          <div className="mb-4 rounded-md bg-sky-100 p-2 text-center font-semibold text-sky-800">
            {componentId}
          </div>
        )}
        <div
          className={`mt-auto rounded-md py-2 flex justify-center items-center font-semibold ${statusColor} ${textColor}`}
        >
          {status}
        </div>{' '}
      </div>
    </div>
  )
}
