import { useEffect, useState } from 'react'
import Icon from '../../Icon/Icon'
import Select from '../CreateTest/Select'


export default function TestHistory(data) {
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
            <th>Project ID</th>
            <th>Test ID</th>
            <th>Hardware</th>
            <th>Software</th>
            <th>Test Start Date</th>
            <th>Test Due</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/*data.map((item) => (
            <tr
              key={item.id}
              className="border-b transition duration-200 hover:bg-stone-50"
            >
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className='w-60'>

              </td>
              <td className='w-60'>
  
              </td>
              <td className="px-0 py-0">
                <button
                  className={`h-10 w-28 rounded-sm text-sm font-semibold
                  text-white transition duration-300 hover:bg-green-500 
                  ${item.assigned === true ? ` bg-stone-200 hover:bg-stone-300` : ` bg-green-400 hover:bg-green-500`}`}
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
          ))*/}
        </tbody>
      </table>
    </div>
  )
}
