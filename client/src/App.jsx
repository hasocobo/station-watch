import { Outlet, useNavigate } from "react-router-dom";
import Header from './components/Header/Header';
import { useState } from "react";
import axios from "axios";
const App = () => {
  return (
    <div className='relative w-full'>
      <div className='h-dvh min-h-dvh z-10 w-full relative'>
        <header className=' w-full top-0'>
          <Header />
        </header>
        <main className='text-neutral-100'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default App

