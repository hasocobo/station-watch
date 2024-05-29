import { Link, useLocation } from 'react-router-dom'
import NavItem from './NavItem'
import Logo from '../../../src/assets/logo2.png'
import Avatar from './Avatar'
import { useUser } from '../Context/UserProvider'

export default function Header() {
  const { user } = useUser()
  let pageName = useLocation().pathname.slice(1).split("/")[0];

  return (
    <div className="sticky w-full border-b bg-white text-sm font-semibold">
      <div className="mx-auto max-w-7xl">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={'/'} className="hover:cursor-pointer hidden md:block">
              <img src={Logo} alt="station watch logo" className="w-32" />
            </Link>
            <div className="flex w-full items-center justify-center">
              <div className="flex gap-4">
                <NavItem
                  icon={"add_circle"}
                  name={'Test Oluştur'}
                  link={'/testolustur'}
                  style={pageName === 'testolustur' ? 'selected' : ''}
                />
                <NavItem
                  icon={"timer"}
                  name={'Bekleyen Testler'}
                  link={'/bekleyentestler'}
                  style={pageName === 'bekleyentestler' ? 'selected' : ''}
                />
                <NavItem
                  icon={"history"}
                  name={'Test Geçmişi'}
                  link={'/testgecmisi'}
                  style={pageName === 'testgecmisi' ? 'selected' : ''}
                />
                <NavItem
                  icon={"labs"}
                  name={'Laboratuvarlar'}
                  link={'/laboratuvarlar'}
                  style={pageName === 'laboratuvarlar' ? 'selected' : ''}
                />
              </div>
            </div>
            <Avatar user={user} />
          </div>
        </div>
      </div>
    </div>
  )
}
