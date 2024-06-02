import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SidebarMenu from './components/Header/SidebarMenu';
import { useUser } from './components/Context/UserProvider';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { setUser } = useUser();
  useEffect(() => {
    const controller = new AbortController();
    try {
      const fetchUser = async () => {
        const response = await axios.get(`http://localhost:8000/api/users/${localStorage.getItem('userId')}`, {
          signal: controller.signal
        })
        setUser(response.data);
        console.log(response)
      }

      fetchUser();
    } catch (error) {
      console.log(error);
    }
    return () => controller.abort();
  }, [])
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
