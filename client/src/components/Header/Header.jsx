import { Link, useLocation } from 'react-router-dom';
import NavItem from './NavItem';
import Logo from '../../../src/assets/logo2.png';
import Avatar from './Avatar';
import { useUser } from '../Context/UserProvider';

export default function Header({ onMenuClick }) {
  const { user } = useUser();
  let pageName = useLocation().pathname.slice(1).split('/')[0];

  return (
    <div className="sticky relative w-full border-b bg-white text-sm font-semibold">

      <div className="mx-auto max-w-7xl">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={'/'} className="hover:cursor-pointer">
              <img src={Logo} alt="station watch logo" className="md:w-32 w-20" />
            </Link>
            <i onClick={onMenuClick} className="material-symbols-outlined hover:cursor-pointer md:hidden 
            hover:bg-slate-100 rounded-xl size-10 flex justify-center items-center">
              menu
            </i>
            <div className="hidden w-full items-center justify-center md:flex">
              <div className="flex gap-4">
                <NavItem
                  icon={'add_circle'}
                  name={'Test Oluştur'}
                  link={'/testolustur'}
                  style={pageName === 'testolustur' ? 'selected' : ''}
                />
                <NavItem
                  icon={'timer'}
                  name={'Bekleyen Testler'}
                  link={'/bekleyentestler'}
                  style={pageName === 'bekleyentestler' ? 'selected' : ''}
                />
                <NavItem
                  icon={'history'}
                  name={'Test Geçmişi'}
                  link={'/testgecmisi'}
                  style={pageName === 'testgecmisi' ? 'selected' : ''}
                />
                <NavItem
                  icon={'labs'}
                  name={'Laboratuvarlar'}
                  link={'/laboratuvarlar'}
                  style={pageName === 'laboratuvarlar' ? 'selected' : ''}
                />
              </div>
            </div>
            <div className="hidden md:block">
              <Avatar user={user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
