import React, { useEffect, useState } from 'react';
import StationCard from './StationCard';
import { useLabs } from '../../Context/LabProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Stations() {
  const [stations, setStations] = useState();

  const { labs } = useLabs();
  const { labId } = useParams();
  const lab = labs.find((lab) => lab._id === labId);

  useEffect(() => {
    const fetchStations = async () => {
      const responses = await Promise.all(
        lab.stations.map((stationId) =>
          axios.get(`localhost:8000/api/stations/${stationId}`)
        )
      ).catch((e) => () => console.log(e));
      console.log(responses);
    };
    fetchStations();
  }, []);

  return (
    <div className="mx-auto max-w-[80vw] overflow-y-auto bg-white p-6">
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
        {/*lab.stations.map((station) => (
          <StationCard
            key={station._id}
            link={station._id}
            title={station.title}
            cycles={station.cycles}
            status={station.status}
            statusColor={station.statusColor}
            componentId={station.componentId}
            textColor={station.textColor}
          />
        ))*/}
      </div>
    </div>
  );
}
