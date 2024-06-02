import React, { useState } from 'react';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Description, Field, Input, Label, Button } from '@headlessui/react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition
} from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

import clsx from 'clsx';

const labs = [
  { id: 1, name: 'Performans Labı' },
  { id: 2, name: 'Tekstil Labı' },
];

export default function AddNew() {
  const [stationName, setStationName] = useState('');
  const [machineName, setMachineName] = useState('');
  const [selected, setSelected] = useState(labs[1]);
  const [labName, setLabName] = useState('');

  return (
    <div className="flex w-full justify-center overflow-y-hidden">
      <div className="w-full overflow-y-hidden">
        <TabGroup className={'w-full bg-white'}>
          <TabList className="max-w-screen mx-auto flex w-fit shadow ">
            <Tab
              key={'Add New Lab'}
              className="text-nowrap rounded px-2 py-1 text-sm/6 font-semibold text-slate-600 focus:outline-none data-[hover]:bg-slate-200 data-[selected]:bg-slate-100/90 lg:px-6 lg:py-3 lg:text-base/6"
            >
              Add New Lab
            </Tab>
            <Tab
              key={'Add New Station'}
              className="text-nowrap rounded px-2 py-1 text-sm/6 font-semibold text-slate-600 focus:outline-none data-[hover]:bg-slate-200 data-[selected]:bg-slate-100/90 lg:px-6 lg:py-3 lg:text-base/6"
            >
              Add New Station
            </Tab>
            <Tab
              key={'Add New Machine'}
              className="text-nowrap rounded px-2 py-1 text-sm/6 font-semibold text-slate-600 focus:outline-none data-[hover]:bg-slate-200 data-[selected]:bg-slate-100/90 lg:px-6 lg:py-3 lg:text-base/6 "
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
                  <Listbox value={selected} onChange={setSelected}>
                    <Description className="text-sm/6 mt-4 text-slate-700/50">
                      Choose a lab to assign your station
                    </Description>
                    <ListboxButton
                      className={clsx(
                        'relative block w-full rounded-lg bg-slate-600/5 py-1.5 pl-3 pr-8 text-left text-sm/6 text-slate-600',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                      )}
                    >
                      {selected.name}
                      <ChevronDownIcon
                        className="fill-slate/60 group pointer-events-none absolute right-2.5 top-2.5 size-4"
                        aria-hidden="true"
                      />
                    </ListboxButton>
                    <Transition
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <ListboxOptions
                        anchor="bottom"
                        className="w-[var(--button-width)] rounded-xl border border-white/5  p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
                      >
                        {labs.map((lab) => (
                          <ListboxOption
                            key={lab.name}
                            value={lab}
                            className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
                          >
                            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                            <div className="text-sm/6 text-slate-700">
                              {lab.name}
                            </div>
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </Transition>
                  </Listbox>
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
                  <Input
                    value={machineName}
                    onChange={(e) => setMachineName(e.target.value)}
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
