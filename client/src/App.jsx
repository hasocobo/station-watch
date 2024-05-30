import { Outlet, useNavigate } from 'react-router-dom'
import Header from './components/Header/Header'
import { useState } from 'react'
import axios from 'axios'
const App = () => {
  return (
    <div className="relative w-full">
      <div className="relative z-10 flex h-dvh min-h-dvh w-full flex-col">
        <header className=" top-0 w-full">
          <Header />
        </header>
        <main className="grow text-neutral-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default App
