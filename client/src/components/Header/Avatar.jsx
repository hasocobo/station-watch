import { useEffect, useRef, useState } from 'react'
import UserIcon from './UserIcon'
import { Link } from 'react-router-dom'

export default function Avatar({ user }) {
  const [expanded, setExpanded] = useState(false)
  const popoverRef = useRef(null)

  useEffect(() => {
    expanded
      ? document.addEventListener('click', handleClickOutside)
      : document.removeEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [expanded])

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setExpanded(false)
    }
  }

  return (
    <div ref={popoverRef} className="relative">
      <UserIcon onClick={() => setExpanded(!expanded)} user={user} />
      {expanded && (
        <div
          className="absolute right-[-90px] top-[65px]
         flex flex-col rounded-md border bg-white shadow sm:block sm:w-60"
        >
          <header className="border-b">
            <div className="flex items-center gap-2 px-4 py-4">
              <UserIcon user={user} />
              <div className="flex flex-col">
                <p className="font-semibold text-slate-700">{user.name}</p>
                <p className="font-normal text-slate-500">{user.role}</p>
              </div>
            </div>
          </header>
          <main className='bg-white'>
            <div className='flex flex-col bg-white'>
              <Link to={''} className="flex py-3 px-5 items-center gap-2 hover:bg-sky-50 ">
                <i className="material-icons text-slate-400">
                  person
                </i>
                <p className='text-slate-600'>Your Profile</p>
              </Link>
              <Link to={``} className='flex py-3 px-5 items-center gap-2 hover:bg-sky-50'>
                <i className="material-icons text-slate-400">
                  logout
                </i>
                <p className='text-slate-600'>Log out</p>
              </Link>
            </div>
          </main>
        </div>
      )}
    </div>
  )
}
