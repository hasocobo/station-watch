import { useEffect, useState } from 'react';
import Icon from '../../Icon/Icon';
import Select from '../CreateTest/Select';
import axios from 'axios';

const exampleTests = [
  { _id: '64556', creationDate: "2024-06-01", createdBy: "Hasan", description: "Motor Testi, Başarılı" },
  { _id: '64557', creationDate: "2024-05-30", createdBy: "Ceren", description: "Devir Testi, Başarılı" },
  { _id: '64558', creationDate: "2024-06-01", createdBy: "Hasan", description: "Parça Testi, Başarısız, Performans labında tekrar dene" },

];

export default function TestHistory() {
  const [data, setData] = useState(exampleTests);
  /*useEffect(() => {
    const controller = new AbortController();
    try {
      const fetchLabs = async () => {
        const response = await axios.get('http://localhost:8000/api/tests', {
          signal: controller.signal
        });
        const tests = response.data;
        const finishedTests = tests.filter(
          (test) => test.status === 'finished'
        );

        setData(finishedTests);
        console.log(finishedTests);
      };
      fetchLabs();
    } catch (error) {}
    return () => controller.abort();
  }, []);
*/
  function assignJob(test) {
    let updatedPendingTests = '';
    setData((prevTests) => {
      updatedPendingTests = prevTests.map((prevTest) => {
        if (prevTest.id === test.id) {
          return { ...prevTest, assigned: !prevTest.assigned };
        } else {
          return prevTest;
        }
      });
      return updatedPendingTests;
    });
    // fetch('api/tests', POST: ...)
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="bg-stone-50">
          <tr className="border-b">
            <th></th>
            <th>Test ID</th>
            <th>Description</th>
            <th>Done By</th>
            <th>Test Start Date</th>
            <th>Test Finish Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 && data.map((item) => (
            <tr
              key={item._id}
              className="border-b transition duration-200 hover:bg-stone-50"
            >
              <td></td>
              <td>{item._id.slice(0, 7)}...</td>
              {<td className='text-wrap w-48'>{item.description && item.description}</td>}
              {<td>{item.createdBy && item.createdBy}</td>}
              <td className="">
                {item.creationDate && item.creationDate.slice(0, 10)}
              </td>
              <td>{new Date().toISOString().slice(0,10)}</td>
              <td className=""></td>
              <td className="px-0 py-0">
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
