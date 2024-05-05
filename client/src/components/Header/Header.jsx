import { Link, useLocation } from "react-router-dom"
import NavItem from "./NavItem"
import Logo from "../../../src/assets/logo2.png"
import { useState } from "react"


export default function Header() {
  let pageName = useLocation().pathname;

  return (
    <div className="sticky w-full bg-white border-b font-semibold text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to={"/"} className="hover:cursor-pointer">
              <img src={Logo} alt="station watch logo" className="w-32" />
            </Link>
            <div className="w-full flex items-center gap-4 justify-center">
              <NavItem
                name={"Test Oluştur"}
                link={"/testolustur"}
                style={/*selectedItem === 'Test Oluştur'*/ pageName === '/testolustur' ? 'selected' : ''}
              />
              <NavItem
                name={"Bekleyen Testler"}
                link={"/bekleyentestler"}
                style={pageName === '/bekleyentestler' ? 'selected' : ''}
              />
              <NavItem
                name={"Laboratuvarlar"}
                link={"/laboratuvarlar"}
                style={pageName === '/laboratuvarlar' ? 'selected' : ''}
              />
              <NavItem
                name={"Test Geçmişi"}
                link={"/testgecmisi"}
                style={pageName === '/testgecmisi' ? 'selected' : ''}
              />
              <NavItem
                name={"Bildirimler"}
                link={"/bildirimler"}
                style={pageName === '/bildirimler' ? 'selected' : ''}
              />
              <NavItem
                name={"Ekle"}
                link={"/ekle"}
                style={pageName === '/ekle' ? 'selected' : ''}
              />
            </div>
            <div className="flex shrink-0 items-center justify-center w-12 h-12 border rounded-[50%] bg-sky-50 relative hover:cursor-pointer">
              <div className="absolute">
                A
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}