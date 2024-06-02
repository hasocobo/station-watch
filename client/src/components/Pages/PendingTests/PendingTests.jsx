import { useEffect, useState } from 'react';
import Icon from '../../Icon/Icon';
import Select from '../CreateTest/Select';
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild
} from '@headlessui/react';
import axios from 'axios';
import { useUser } from '../../Context/UserProvider';

const allowedRoles = ['engineer', 'admin'];

const labs = [
  { name: 'Lab 1', id: 101 },
  { name: 'Ömür Labı', id: 102 },
  { name: 'Lab 99', id: 103 }
];

const stations = [
  { name: '15', id: 6565652 },
  { name: '25', id: 6546565465 },
  { name: '55', id: 65454664564 }
];

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
];

export default function PendingTests({ pendingTests = exampleData }) {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState({ status: false, item: null });

  function open(item) {
    setIsOpen({ status: true, item: item });
  }

  function close() {
    setIsOpen({ status: false, item: null });
  }

  const [data, setData] = useState(pendingTests);

  useEffect(() => {
    const controller = new AbortController();
    try {
      const fetchLabs = async () => {
        const response = await axios.get('http://localhost:8000/api/tests', {
          signal: controller.signal
        });
        const tests = response.data;
        const pendingTests = tests.filter((test) => test.status === 'pending');

        setData(pendingTests);
        console.log(pendingTests);
      };
      fetchLabs();
    } catch (error) {
      console.log(error);
    }

    return () => controller.abort();
  }, []);

  useEffect(() => {
    try {
    } catch (error) {}
  }, []);

  function assignJob(test) {
    let updatedPendingTests = '';
    setData((prevTests) => {
      updatedPendingTests = prevTests.map((prevTest) => {
        if (prevTest._id === test._id) {
          return { ...prevTest, assigned: !prevTest.assigned };
        } else {
          return prevTest;
        }
      });
      close();
      return updatedPendingTests;
    });
    // fetch('api/tests', POST: ...)
  }

  return (
    <>
      <Transition appear show={isOpen.status}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-start justify-center py-60">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-96 max-w-md rounded-md border bg-white p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-semibold text-slate-800"
                  >
                    Are you sure?
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-slate-800/50">
                    Are you sure you want to assign the test created by{' '}
                    <span className="font-semibold text-slate-800/75">
                      Hasan{' '}
                    </span>
                    to{' '}
                    <span className="font-semibold text-slate-800/75">
                      Machine 37546
                    </span>{' '}
                    in
                    <span className="font-semibold text-slate-800/75">
                      {' '}
                      Lab 88
                    </span>{' '}
                    ?
                  </p>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <Button
                        className="inline-flex items-center gap-2 rounded-md bg-green-50 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner 
                        shadow-white/10 transition duration-200 focus:outline-none data-[hover]:bg-green-100 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                        onClick={close}
                      >
                        <p className="text-green-700">Cancel</p>
                      </Button>
                      <Button
                        className="inline-flex items-center gap-2 rounded-md bg-green-400 px-3 py-1.5 text-sm/6 
                        font-semibold text-white shadow-inner shadow-white/10 transition duration-200 focus:outline-none data-[hover]:bg-green-500 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                        onClick={() => assignJob(isOpen.item)}
                      >
                        Assign
                      </Button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div
        className={'overflow-x-auto ' + (isOpen.status ? 'blur-[2px] ' : '')}
      >
        <table className="w-full table-auto">
          <thead className="bg-stone-50">
            <tr className="border-b">
              <th></th>
              <th>Test ID</th>
              <th>Description</th>
              <th>Created By</th>
              <th>Creation Date</th>
              {allowedRoles.includes(user.role) && (
                <th>Lab Assignment</th>
              )}
              {allowedRoles.includes(user.role) && (
                <th>Station Assignment</th>
              )}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((item) => (
                <tr
                  key={item._id}
                  className="border-b transition duration-200 hover:bg-stone-50"
                >
                  <td></td>
                  <td>{item._id && item._id.slice(0, 7)}...</td>
                  <td>{item.description && item.description}</td>
                  <td>{item.creationBy && item.creationBy.name}</td>
                  <td>{item.creationDate.slice(0, 10)}</td>
                  {allowedRoles.includes(user.role) && (
                    <td className="w-60">
                      {/*<Select
                    optionStyle={'w-full max-w-full py-3 px-4'}
                    options={item.labAssignment}
                    id={item.id}
                  />*/}
                    </td>
                  )}
                  {allowedRoles.includes(user.role) && (
                    <td className="w-60">
                      {/*<Select
                    optionStyle={'w-full max-w-full px-4 py-3'}
                    options={item.stationAssignment}
                    id={item.id}
                />*/}
                    </td>
                  )}
                  <td className="px-0 py-0">
                    {allowedRoles.includes(user.role) && (
                      <button
                        className={`h-10 w-28 rounded-sm text-sm font-semibold
                  text-white transition duration-300 hover:bg-green-500 
                  ${item.assigned === true ? ` bg-stone-200 hover:bg-stone-300` : ` bg-green-400 hover:bg-green-500`}`}
                        onClick={() => {
                          open(item);
                        }}
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
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
