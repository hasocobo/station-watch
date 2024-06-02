import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../Context/UserProvider';
import NavItem from './NavItem';
import UserIcon from './UserIcon';

const allowedRoles = ['engineer', 'admin'];

export default function SidebarMenu({ isOpen, handleClick }) {
  const [closed, setIsClosed] = useState(true);

  const { user } = useUser();
  const role = user.role.charAt(0).toUpperCase() + user.role.slice(1);

  useEffect(() => {
    if (!isOpen) {
      // Add a delay before setting isClosing to true
      const timeoutId = setTimeout(() => {
        setIsClosed(true);
      }, 250); // Adjust the delay as needed

      return () => clearTimeout(timeoutId);
    } else {
      setIsClosed(false);
    }
  }, [isOpen]);

  return (
    <dialog
      className={`${
        isOpen ? 'block' : closed ? 'hidden' : ''
      } flex h-dvh h-full min-h-dvh`}
    >
      <div className="fixed bottom-0 left-0 right-0 top-0 z-20 z-30 flex h-dvh h-full min-h-dvh min-h-dvh bg-stone-200 opacity-[50%]"></div>
      <div
        className={`${
          isOpen ? 'open' : 'closed'
        } check-out-bar fixed relative inset-y-0 left-0 z-40 h-dvh min-h-dvh w-60 overflow-y-auto bg-white shadow-lg sm:w-80 `}
      >
        <div className="fixed right-0 top-1 z-50 flex flex-col">
          <div
            className="flex size-10 items-center justify-center
             rounded-full transition duration-200 hover:cursor-pointer hover:bg-slate-100"
            onClick={handleClick}
          >
            <i className="material-symbols-outlined">close</i>
          </div>
        </div>
        <div className="">
          <div className="border-b border-slate-100">
            <div className="flex items-center gap-2 px-4 py-4">
              <UserIcon user={user} />
              <div className="flex flex-col">
                <p className="font-semibold text-slate-700">
                  {user.name + ' ' + user.surname}
                </p>
                <p className="font-normal text-slate-500">{role}</p>
              </div>
            </div>
          </div>
          <div onClick={handleClick}>
            <div className="flex flex-col border-b border-slate-100 text-sm font-semibold">
              <Link
                to={''}
                className="flex items-center gap-2 px-4 py-3 transition duration-200 hover:bg-slate-50 "
              >
                <i className="material-icons text-slate-400">person</i>
                <p className="text-slate-600">Your Profile</p>
              </Link>
              {allowedRoles.includes(user.role) && (
                <Link
                  to={'/ekle'}
                  className="flex items-center gap-2 px-4 py-3 transition duration-200 hover:bg-slate-50 "
                >
                  <i className="material-icons text-slate-400">add</i>
                  <p className="text-slate-600">Add New</p>
                </Link>
              )}
              {}
              <Link
                to={`/login`}
                onClick={() => localStorage.clear()}
                className="flex items-center gap-2 px-4 py-3 transition duration-200 hover:bg-slate-50"
              >
                <i className="material-icons text-slate-400">logout</i>
                <p className="text-slate-600">Log out</p>
              </Link>
            </div>
            <div className="flex flex-col border-slate-100">
              <NavItem
                icon={'add_circle'}
                name={'Test Oluştur'}
                link={'/testolustur'}
                style={
                  'px-4 p-4 justify-start font-semibold text-sm hover:bg-slate-50 '
                }
              />
              <NavItem
                icon={'timer'}
                name={'Bekleyen Testler'}
                link={'/bekleyentestler'}
                style={'px-4 p-4 font-semibold text-sm hover:bg-slate-50'}
              />
              <NavItem
                icon={'history'}
                name={'Test Geçmişi'}
                link={'/testgecmisi'}
                style={'px-4 p-4 font-semibold text-sm hover:bg-slate-50'}
              />
              <NavItem
                icon={'labs'}
                name={'Laboratuvarlar'}
                link={'/laboratuvarlar'}
                style={'px-4 p-4 font-semibold text-sm hover:bg-slate-50'}
              />
            </div>{' '}
          </div>
        </div>
      </div>
    </dialog>
  );
}
