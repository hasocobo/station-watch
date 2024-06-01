import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import { useState } from 'react';
import axios from 'axios';
import SidebarMenu from './components/Header/SidebarMenu';
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="relative w-full">
      <div className="relative z-10 flex h-dvh min-h-dvh w-full flex-col">
        <header className=" top-0 w-full">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
        </header>
        <main className="grow overflow-y-auto text-neutral-100">
          <Outlet />
        </main>

        <SidebarMenu isOpen={isSidebarOpen} handleClick={() => setIsSidebarOpen(!isSidebarOpen)}/>
      </div>
    </div>
  );
};
export default App;
