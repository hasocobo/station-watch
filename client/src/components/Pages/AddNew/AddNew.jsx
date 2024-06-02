import React, { useState } from 'react';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Description, Field, Input, Label, Button } from '@headlessui/react';

import clsx from 'clsx';

const categories = [
  {
    name: 'Recent',
    posts: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2
      }
    ]
  },
  {
    name: 'Popular',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12
      }
    ]
  },
  {
    name: 'Trending',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2
      }
    ]
  }
];

export default function AddNew() {
  const [stationName, setStationName] = useState('');
  const [machineName, setMachineName] = useState('');
  const [labName, setLabName] = useState('');
  return (
    <div className="flex w-full justify-center overflow-y-hidden">
      <div className="w-full overflow-y-hidden">
        <TabGroup className={'w-full bg-white'}>
          <TabList className="mx-auto flex w-fit shadow ">
            <Tab
              key={'Add New Lab'}
              className="text-nowrap rounded px-6 py-3 text-base/6 font-semibold text-slate-600 focus:outline-none data-[hover]:bg-slate-200 data-[selected]:bg-slate-100/90"
            >
              Add New Lab
            </Tab>
            <Tab
              key={'Add New Station'}
              className="text-nowrap rounded px-6 py-3 text-base/6 font-semibold text-slate-600 focus:outline-none data-[hover]:bg-slate-200 data-[selected]:bg-slate-100/90"
            >
              Add New Station
            </Tab>
            <Tab
              key={'Add New Machine'}
              className="text-nowrap rounded px-6 py-3 text-base/6 font-semibold text-slate-600 focus:outline-none data-[hover]:bg-slate-200 data-[selected]:bg-slate-100/90 "
            >
              Add New Machine
            </Tab>
          </TabList>
          <TabPanels className="mt-3 overflow-y-hidden">
            <TabPanel className="rounded-xl bg-white/5 p-3">
              <Field>
                <div className="mx-auto w-fit">
                  <Label className="text-base/6 font-semibold text-slate-700">
                    Lab Name
                  </Label>
                  <Description className="text-sm/6 text-slate-700/50">
                    Enter a name for your lab to create
                  </Description>
                  <Input
                    value={labName}
                    onChange={(e) => setLabName(e.target.value)}
                    className={clsx(
                      'mt-3 block w-80 rounded-lg border-none bg-slate-800/5 px-3 py-1.5 text-sm/6 text-slate-500',
                      'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                  />
                  <div className="flex w-full justify-end">
                    <Button className="mt-4 inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                      Add Lab
                    </Button>
                  </div>
                </div>
              </Field>
            </TabPanel>
            <TabPanel className="rounded-xl bg-white/5 p-3">
              <Field>
                <div className="mx-auto w-fit">
                  <Label className="text-base/6 font-semibold text-slate-700">
                    Station Name
                  </Label>
                  <Description className="text-sm/6 text-slate-700/50">
                    Enter a name for your station to create
                  </Description>
                  <Input
                    className={clsx(
                      'mt-3 block w-80 rounded-lg border-none bg-slate-800/5 px-3 py-1.5 text-sm/6 text-slate-500',
                      'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                  />
                  <div className="flex w-full justify-end">
                    <Button className="mt-4 inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                      Add Station
                    </Button>
                  </div>
                </div>
              </Field>
            </TabPanel>
            <TabPanel className="rounded-xl p-3 shadow">
              <Field>
                <div className="mx-auto w-fit">
                  <Label className="text-base/6 font-semibold text-slate-700">
                    Machine Name
                  </Label>
                  <Description className="text-sm/6 text-slate-700/50">
                    Enter a model name for your machine
                  </Description>
                  <Input value={machineName} onChange={(e) => setMachineName(e.target.value)}
                    className={clsx(
                      'mt-3 block w-80 rounded-lg border-none bg-slate-800/5 px-3 py-1.5 text-sm/6 text-slate-500',
                      'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                  />
                  <div className="flex w-full justify-end">
                    <Button className="mt-4 inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                      Add Machine
                    </Button>
                  </div>
                </div>
              </Field>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
