import React from 'react'
import StationCard from './StationCard'
import { useLabs } from '../../Context/LabProvider';
import { useParams } from 'react-router-dom';

export default function Stations() {
  const { labs } = useLabs();
  const { labId } = useParams();
  const lab = labs.find(lab => lab.id === labId);

  return (
    <div className="mx-auto max-w-[80vw] bg-white p-6 overflow-y-auto">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-6">
            <div className="text-lg text-slate-500">
              <span className="font-bold text-slate-800">8</span> dolu istasyon
            </div>
            <div className="text-lg text-slate-500">
              <span className="font-bold text-slate-800">2</span> boş istasyon
            </div>
          </div>
          <div className="flex items-center rounded-lg border border-slate-300 hover:border-sky-300 bg-white p-1 shadow-sm">
            <input
              type="text"
              placeholder="Ara"
              className="pl-2 text-base outline-none"
            />
            <button className="ml-2 rounded-full px-2 py-2 text-slate-500 material-icons">
              search
            </button>
          </div>
        </div>
      </div>
      <div className="grid mt-8 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {lab.stations.map((station) => (
          <StationCard
            key={station.id}
            link={station.id}
            title={station.title}
            cycles={station.cycles}
            status={station.status}
            statusColor={station.statusColor}
            componentId={station.componentId}
            textColor={station.textColor}
          />
        ))}
      </div>
    </div>
  )
}
