import { useParams } from "react-router-dom";
import { useLabs } from "../../Context/LabProvider";


export default function StationView() {
  const { labs } = useLabs();
  const { labId, stationId } = useParams();
  const lab = labs.find(lab => lab.id === labId);
  const station = lab.stations.find(station => station.id === parseInt(stationId));
  return (
    <div className="flex justify-center">
      <div className="w-96 h-80 bg-sky-50">
        <p className="font-semibold text-center">
          {station.title}
          <div>
            work in progress
          </div>
        </p>
      </div>
    </div>
  );
}