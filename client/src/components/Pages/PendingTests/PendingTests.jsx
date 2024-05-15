import { useEffect, useState } from 'react'
import Icon from '../../Icon/Icon'

const labs = [{ name: 'Lab 1' }, { name: 'Ömür Labı' }, { name: 'Lab 99' }]

const stations = [
  { name: '35' },
  { name: '31' },
  { name: '33' },
  { name: 'Sıraya Gir' }
]

const exampleData = [
  {
    id: 32655,
    projectName: 'Test',
    createdBy: 'Hasan',
    creationDate: '26/05/2024',
    labAssignment: {},
    stationAssignment: {},
    assigned: false
  },
  {
    id: 3211655,
    projectName: 'Random',
    createdBy: 'Atakan',
    creationDate: '27/05/2024',
    labAssignment: {},
    stationAssignment: {},
    assigned: false
  },
  {
    id: 3262255,
    projectName: 'Aquila',
    createdBy: 'Cüneyt',
    creationDate: '25/05/2024',
    labAssignment: {},
    stationAssignment: {},
    assigned: false
  },
  {
    id: 3269955,
    projectName: 'Amet ',
    createdBy: 'Ali',
    creationDate: '23/05/2024',
    labAssignment: {},
    stationAssignment: {},
    assigned: false
  },
  {
    id: 32628511,
    projectName: 'Dolor sit',
    createdBy: 'Veli',
    creationDate: '21/05/2024',
    labAssignment: {},
    stationAssignment: {},
    assigned: false
  },
  {
    id: 3262855,
    projectName: 'Lorem ipsum ',
    createdBy: 'Berat',
    creationDate: '28/05/2024',
    labAssignment: {},
    stationAssignment: {},
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
            <th>Aquila ID</th>
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
              <td>
                <select
                  className="block w-full rounded-md bg-blue-50 px-4 py-3"
                  defaultValue={item.labAssignment}
                >
                  <option value="lab1">Lab 1</option>
                  <option value="lab2">Lab 2</option>
                </select>
              </td>
              <td>
                <select
                  className="block w-full rounded-md bg-blue-50 px-4 py-3"
                  defaultValue={item.stationAssignment}
                >
                  <option value="station1">Station 1</option>
                  <option value="station2">Station 2</option>
                </select>
              </td>
              <td className="px-0 py-0">
                <button
                  className={`h-12 w-28 rounded-md text-sm font-semibold
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
