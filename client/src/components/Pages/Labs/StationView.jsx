import { Link, useParams } from 'react-router-dom';
import { useLabs } from '../../Context/LabProvider';

import { Button } from '@headlessui/react';

export default function StationView() {
  const { labs } = useLabs();
  const { labId, stationId } = useParams();
  const lab = labs.find((lab) => lab._id === labId);
  const station = lab.stations.find(
    (station) => station._id.toString() === stationId
  );
  return (
    <div className="relative overflow-x-hidden">
      <div className="top absolute w-full pl-4 pt-3 text-base sm:pl-6 sm:pt-4 md:pl-12 md:pt-6 lg:pl-24 lg:pt-8 ">
        <p className="flex w-fit items-center gap-2 rounded-lg bg-slate-50 p-2 text-sm font-bold text-slate-600 sm:text-base md:text-lg">
          <Link
            to={`/laboratuvarlar/${lab._id}`}
            className="text text-base text-slate-600 hover:text-slate-700 md:text-lg lg:text-xl"
          >
            {lab.name}
          </Link>
          <span className="font-bold text-sky-700"> {'  >  '} </span>
          {station.name}
        </p>
      </div>
      <div className="flex flex-col items-center px-4 py-24 ">
        <div className="h-[30rem] w-[20rem] rounded-md border px-5 py-4 shadow sm:px-8 sm:py-6  md:w-[25rem] md:px-10 md:py-8 lg:w-[30rem] lg:px-12 lg:py-10">
          <div className="flex justify-center h-full border ">
            <div className="text-nowrap text-base font-semibold text-slate-600 md:text-lg lg:text-lg">
              <div className="flex items-center gap-1 justify-center">
                <div className="flex items-center gap-1">
                  <i className="material-symbols-outlined text-slate-500">
                    id_card
                  </i>
                  <p>Project ID: </p>
                </div>
                <span className="text-nowrap text-base font-normal text-slate-500 md:text-lg lg:text-lg">
                  56898521
                </span>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <div className="flex items-center gap-1">
                  <i className="material-symbols-outlined text-slate-500">
                    badge
                  </i>
                  <p>Project Name: </p>
                </div>
                <span className="text-nowrap text-base font-normal text-slate-500 md:text-lg lg:text-lg">
                  
                </span>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <div className="flex items-center gap-1">
                  <i className="material-symbols-outlined text-slate-500">
                    id_card
                  </i>
                  <p>Project ID: </p>
                </div>
                <span className="text-nowrap text-base font-normal text-slate-500 md:text-lg lg:text-lg">
                  56898521
                </span>
              </div>
              <div className="flex items-center gap-1 justify-center">
                <div className="flex items-center gap-1">
                  <i className="material-symbols-outlined text-slate-500">
                    id_card
                  </i>
                  <p>Project ID: </p>
                </div>
                <span className="text-nowrap text-base font-normal text-slate-500 md:text-lg lg:text-lg">
                  56898521
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-3 sm:w-[60rem]">
          <Button className="mt-4 inline-flex items-center gap-2 rounded-md bg-green-50 px-3 py-1.5 text-base/6 font-semibold text-green-900 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-green-100 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Start Test
          </Button>
          <Button className="mt-4 inline-flex items-center gap-2 rounded-md bg-red-50 px-3 py-1.5 text-base/6 font-semibold text-red-900 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-red-100 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            Stop Test
          </Button>
        </div>
      </div>
    </div>
  );
}
