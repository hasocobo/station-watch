import { useEffect, useState } from 'react'
import Icon from '../../Icon/Icon'
import Select from '../CreateTest/Select'

const labs = [
  { name: 'Lab 1', id: 101 },
  { name: 'Ömür Labı', id: 102 },
  { name: 'Lab 99', id: 103 }
]

const stations = [
  { name: '15', id: 6565652 },
  { name: '25', id: 6546565465 },
  { name: '55', id: 65454664564 }
]

const exampleData = [
  {
    id: 32655,
    projectName: 'Test',
    createdBy: 'Ayşe',
    creationDate: '26/05/2024',
    labAssignment: labs,
    stationAssignment: stations,
    assigned: false
  },
  {
    id: 3211655,
    projectName: 'Random',
    createdBy: 'Atakan',
    creationDate: '27/05/2024',
    labAssignment: labs,
    stationAssignment: stations,
    assigned: false
  },
  {
    id: 3262255,
    projectName: 'Hız testi',
    createdBy: 'Mehmet',
    creationDate: '25/05/2024',
    labAssignment: labs,
    stationAssignment: stations,
    assigned: false
  },
  {
    id: 3269955,
    projectName: 'Amet ',
    createdBy: 'Ali',
    creationDate: '23/05/2024',
    labAssignment: labs,
    stationAssignment: stations,
    assigned: false
  },
  {
    id: 32628511,
    projectName: 'Dolor sit',
    createdBy: 'Veli',
    creationDate: '21/05/2024',
    labAssignment: labs,
    stationAssignment: stations,
    assigned: false
  },
  {
    id: 3262855,
    projectName: 'Lorem ipsum ',
    createdBy: 'Hasan',
    creationDate: '28/05/2024',
    labAssignment: labs,
    stationAssignment: stations,
    assigned: false
  }
]

export default function PendingTests({ pendingTests = exampleData }) {
  const [data, setData] = useState(pendingTests)
  useEffect(() => {
    try {
    } catch (error) {}
  }, [])

  function assignJob(test) {
    let updatedPendingTests = ''
    setData((prevTests) => {
      updatedPendingTests = prevTests.map((prevTest) => {
        if (prevTest.id === test.id) {
          return { ...prevTest, assigned: !prevTest.assigned }
        } else {
          return prevTest
        }
      })
      return updatedPendingTests
    })
    // fetch('api/tests', POST: ...)
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="bg-stone-50">
          <tr className="border-b">
            <th></th>
            <th>Test ID</th>
            <th>Project Name</th>
            <th>Created By</th>
            <th>Creation Date</th>
            <th>Lab Assignment</th>
            <th>Station Assignment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b transition duration-200 hover:bg-stone-50"
            >
              <td></td>
              <td>{item.id}</td>
              <td>{item.projectName}</td>
              <td>{item.createdBy}</td>
              <td>{item.creationDate}</td>
              <td className='w-60'>
                <Select
                  optionStyle={'w-full max-w-full py-3 px-4'}
                  options={item.labAssignment}
                  id={item.id}
                />
              </td>
              <td className='w-60'>
                <Select
                  optionStyle={'w-full max-w-full px-4 py-3'}
                  options={item.stationAssignment}
                  id={item.id}
                />
              </td>
              <td className="px-0 py-0">
                <button
                  className={`h-10 w-28 rounded-sm text-sm font-semibold
                  text-white transition duration-300 hover:bg-green-500 
                  ${item.assigned === true ? ` bg-stone-200 hover:bg-stone-300` : ` bg-green-400 hover:bg-green-500`}`}
                  onClick={() => assignJob(item)}
                >
                  {item.assigned === true ? (
                    <div className="flex items-center justify-center">
                      {' '}
                      Assigned <Icon name={'check'} />{' '}
                    </div>
                  ) : (
                    'Assign'
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
