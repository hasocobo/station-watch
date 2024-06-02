import React, { useState } from 'react';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const categories = [
  {
    name: 'Recent',
    posts: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: 'Popular',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: 'Trending',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
]

export default function AddNew() {
  return (
    <div className="flex w-full justify-center overflow-y-hidden">
      <div className="w-full overflow-y-hidden">
        <TabGroup className={"bg-white w-full"}>
          <TabList className="flex shadow w-fit ">
              <Tab
                key={"Add New Machine"}
                className="rounded py-3 px-6 text-nowrap text-base/6 font-semibold text-slate-600 focus:outline-none data-[selected]:bg-slate-100/90 data-[hover]:bg-slate-200 "
              >
                Add New Machine
              </Tab>
              <Tab
                key={"Add New Station"}
                className="rounded py-3 px-6 text-base/6 text-nowrap font-semibold text-slate-600 focus:outline-none data-[selected]:bg-slate-100/90 data-[hover]:bg-slate-200"
              >
                Add New Station
              </Tab>
              <Tab
                key={"Add New Lab"}
                className="rounded py-3 px-6 text-base/6 text-nowrap font-semibold text-slate-600 focus:outline-none data-[selected]:bg-slate-100/90 data-[hover]:bg-slate-200"
              >
                Add New Lab
              </Tab>
            
          </TabList>
          <TabPanels className="mt-3  overflow-y-hidden">
              <TabPanel className="rounded-xl bg-white/5 p-3 shadow border border-red-50">
                Makine Ekle
              </TabPanel>
              <TabPanel className="rounded-xl bg-white/5 p-3 border border-red-50">
                İstasyon Ekle
              </TabPanel>
              <TabPanel className="rounded-xl bg-white/5 p-3 border border-red-50">
                Lab Ekle
              </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}

