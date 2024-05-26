import React from 'react'
import StationCard from './StationCard'

const stations = [
  {
    id: 1,
    title: 'İstasyon 1',
    cycles: '57',
    status: 'AKTİF',
    statusColor: 'bg-green-100',
    textColor: 'text-green-800'
  },
  {
    id: 2,
    title: 'İstasyon 2',
    cycles: '5',
    status: 'AKTİF',
    statusColor: 'bg-green-100',
    textColor: 'text-green-800'
  },
  {
    id: 3,
    title: 'İstasyon 3',
    cycles: '73',
    status: 'DURDURULDU',
    statusColor: 'bg-yellow-100',
    textColor: 'text-yellow-800',
  },
  {
    id: 4,
    title: 'İstasyon 4',
    cycles: '0',
    status: 'BOŞ',
    statusColor: 'bg-blue-100',
    textColor: 'text-blue-800'
  },
  {
    id: 5,
    title: 'İstasyon 5',
    cycles: '34',
    status: 'AKTİF',
    statusColor: 'bg-green-100',
    textColor: 'text-green-800'
  },
  {
    id: 6,
    title: 'İstasyon 6',
    cycles: '10',
    status: 'DURDURULDU',
    statusColor: 'bg-yellow-100',
    textColor: 'text-yellow-800'
  },
  {
    id: 7,
    title: 'İstasyon 7',
    cycles: '89',
    status: 'AKTİF',
    statusColor: 'bg-green-100',
    textColor: 'text-green-800'
  },
  {
    id: 8,
    title: 'İstasyon 8',
    cycles: '0',
    status: 'BOŞ',
    statusColor: 'bg-blue-100',
    textColor: 'text-blue-800'
  },
  {
    id: 9,
    title: 'İstasyon 9',
    cycles: '55',
    status: 'AKTİF',
    statusColor: 'bg-green-100',
    textColor: 'text-green-800'
  },
  {
    id: 10,
    title: 'İstasyon 10',
    cycles: '47',
    status: 'AKTİF',
    statusColor: 'bg-green-100',
    textColor: 'text-green-800'
  },
]


export default function Labs() {
  return (
    <div className="mx-auto max-w-[80vw] bg-white p-6">
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
        {stations.map((station) => (
          <StationCard
            key={station.id}
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
