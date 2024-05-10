import { Link, useLocation } from 'react-router-dom'
import NavItem from './NavItem'
import Logo from '../../../src/assets/logo2.png'
import { useState } from 'react'

export default function Header() {
  let pageName = useLocation().pathname

  return (
    <div className="sticky w-full border-b bg-white text-sm font-semibold">
      <div className="mx-auto max-w-7xl">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={'/'} className="hover:cursor-pointer">
              <img src={Logo} alt="station watch logo" className="w-32" />
            </Link>
            <div className="flex w-full items-center justify-center gap-4">
              <NavItem
                name={'Test Oluştur'}
                link={'/testolustur'}
                style={pageName === '/testolustur' ? 'selected' : ''}
              />
              <NavItem
                name={'Bekleyen Testler'}
                link={'/bekleyentestler'}
                style={pageName === '/bekleyentestler' ? 'selected' : ''}
              />
              <NavItem
                name={'Laboratuvarlar'}
                link={'/laboratuvarlar'}
                style={pageName === '/laboratuvarlar' ? 'selected' : ''}
              />
              <NavItem
                name={'Test Geçmişi'}
                link={'/testgecmisi'}
                style={pageName === '/testgecmisi' ? 'selected' : ''}
              />
              <NavItem
                name={'Bildirimler'}
                link={'/bildirimler'}
                style={pageName === '/bildirimler' ? 'selected' : ''}
              />
              <NavItem
                name={'Ekle'}
                link={'/ekle'}
                style={pageName === '/ekle' ? 'selected' : ''}
              />
            </div>
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[50%] border bg-sky-50 hover:cursor-pointer">
              <div className="absolute">A</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
