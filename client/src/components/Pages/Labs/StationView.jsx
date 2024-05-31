import { Link, useParams } from 'react-router-dom';
import { useLabs } from '../../Context/LabProvider';

export default function StationView() {
  const { labs } = useLabs();
  const { labId, stationId } = useParams();
  const lab = labs.find((lab) => lab._id === labId);
  const station = lab.stations.find((station) => station._id === stationId);
  return (
    <div className="relative overflow-x-hidden">
      <div className="top absolute mx-20 w-full pl-24 pt-8 text-base ">
        <p className="font-bold text-slate-600 gap-2 flex items-center text-lg p-2 bg-slate-50 rounded-lg w-fit">
          <Link to={`/laboratuvarlar/${lab._id}`} className='text-slate-600 text-xl hover:text-slate-700'>
            {lab.name}
          </Link>
          <span className="font-bold text-sky-700"> {'  /  '} </span>
          {station.name}
        </p>
      </div>
      <div className="flex justify-center px-4 py-24">
        <div className="h-[30rem] rounded-md border shadow sm:w-[60rem]">
          <p className="text-center font-semibold">
            {station.name}
            <span>work in progress</span>
          </p>
        </div>
      </div>
    </div>
  );
}
