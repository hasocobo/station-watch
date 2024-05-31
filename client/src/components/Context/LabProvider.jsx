import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const LabContext = createContext(null);

const exampleLabs = [
  {
    name: 'Ömür Labı',
    id: 'omur',
    stations: [
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
        textColor: 'text-yellow-800'
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
      }
    ]
  },
  {
    name: 'Test Labı',
    id: 'test',
    stations: [
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
        textColor: 'text-yellow-800'
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
        id: 10,
        title: 'İstasyon 10',
        cycles: '47',
        status: 'AKTİF',
        statusColor: 'bg-green-100',
        textColor: 'text-green-800'
      }
    ]
  },
  {
    name: 'Hız Labı',
    id: 'hiz',
    stations: [
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
        textColor: 'text-yellow-800'
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
      }
    ]
  }
]

export default function LabProvider({ children }) {
  const [labs, setLabs] = useState(exampleLabs);

  useEffect(() => {
    const controller = new AbortController();
    
    const fetchLabs = async () => {
      try {
        // Fetch labs
        const labsResponse = await axios.get('http://localhost:8000/api/labs', {
          signal: controller.signal
        });

        const labsData = labsResponse.data;

        // Fetch full station details for each lab
        const labsWithStations = await Promise.all(
          labsData.map(async (lab) => {
            const stations = await Promise.all(
              lab.stations.map(async (stationId) => {
                const stationResponse = await axios.get(`http://localhost:8000/api/stations/${stationId}`);
                return stationResponse.data;
              })
            );
            return { ...lab, stations };
          })
        );
        console.log(labsWithStations);
        setLabs(labsWithStations);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLabs();

    return () => controller.abort();
  }, []);

  return (
    <LabContext.Provider value={{ labs, setLabs }}>
      {children}
    </LabContext.Provider>
  );
}

export const useLabs = () => useContext(LabContext);
