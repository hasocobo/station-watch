import React, { useEffect, useState } from 'react';
import StationCard from './StationCard';
import { useLabs } from '../../Context/LabProvider';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useMemo } from 'react';

export default function Stations() {
  const { labs } = useLabs();
  const { labId } = useParams();
  const lab = labs.find((lab) => lab._id === labId);

  const emptyStations = useMemo(() => {
    return lab.stations.filter((station) => station.status === 'BOŞ');
  }, [lab.stations]);

  const stationAmount = useMemo(() => {
    return lab.stations.length;
  }, [lab.stations]);

  {
    /*
      useEffect(() => {
        const fetchStations = async () => {
          try {
            const responses = await Promise.all(
              lab.stations.map((stationId) =>
                axios.get(`http://localhost:8000/api/stations/${stationId}`)
              )
            );
            const data = responses.map(response => response.data);
            setStations(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchStations();
      }, [labs.stations]);*/
  }

  return (
    <div className="relative overflow-x-hidden">
      <div className="top absolute mx-20 w-full pl-24 pt-8 text-base ">
        <p className="w-fit rounded-lg bg-slate-50 p-2 text-xl font-bold text-sky-900">
          <Link
            to={`/laboratuvarlar/${lab._id}`}
            className="text-slate-600 hover:text-slate-700"
          >
            {lab.name}
          </Link>
        </p>
        <div className="mt-2 flex items-baseline gap-3">
          <div className="flex gap-4">
            <div className="text-lg text-slate-500">
              <span className="font-bold text-slate-800">{stationAmount - emptyStations.length}</span> dolu istasyon
            </div>
            <div className="text-lg text-slate-500">
              <span className="font-bold text-slate-800">{emptyStations.length}</span> boş istasyon
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-[80vw] overflow-y-auto bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <div></div>
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
          {lab.stations.map((station) => (
            <StationCard
              key={station._id}
              link={station._id}
              title={station.name}
              cycles={station.cycles}
              status={station.status}
              statusColor={station.statusColor}
              textColor={station.textColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
