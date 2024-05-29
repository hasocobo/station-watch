import { createContext, useContext, useState } from 'react'


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
      },
    ]
  }
]


const LabContext = createContext(null)

export default function LabProvider({ children }) {
  const [labs, setLabs] = useState(exampleLabs);

  return (
    <LabContext.Provider value={{ labs, setLabs }}>
      {children}
    </LabContext.Provider>
  )
}

export const useLabs = () => useContext(LabContext)
