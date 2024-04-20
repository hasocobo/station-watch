import { Link, NavLink } from "react-router-dom"
import NavItem from "./NavItem"
import Icon from "../Icon/Icon"
import Button from "../Button/Button"
import SearchBar from "./SearchBar"
import Logo from "../../../src/assets/logo2.png"
import { useState } from "react"



export default function Header() {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <div className="sticky w-full bg-white border-b font-semibold text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="hover:cursor-pointer" onClick={() => setSelectedItem('')}>
              <img src={Logo} alt="station watch logo" className="w-32" />
            </div>
            <div className="w-full flex items-center gap-4 justify-center">
              <NavItem
                name={"Test Oluştur"}
                link={"/"}
                onClick={() => setSelectedItem('Test Oluştur')}
                style={selectedItem === 'Test Oluştur' ? 'selected' : ''}
              />
              <NavItem
                name={"Bekleyen Testler"}
                link={"/"}
                onClick={() => setSelectedItem('Bekleyen Testler')}
                style={selectedItem === 'Bekleyen Testler' ? 'selected' : ''}
              />
              <NavItem
                name={"Laboratuvarlar"}
                link={"/"}
                onClick={() => setSelectedItem('Laboratuvarlar')}
                style={selectedItem === 'Laboratuvarlar' ? 'selected' : ''}
              />
              <NavItem
                name={"Test Geçmişi"}
                link={"/"}
                onClick={() => setSelectedItem('Test Geçmişi')}
                style={selectedItem === 'Test Geçmişi' ? 'selected' : ''}
              />
              <NavItem
                name={"Bildirimler"}
                link={"/"}
                onClick={() => setSelectedItem('Bildirimler')}
                style={selectedItem === 'Bildirimler' ? 'selected' : ''}
              />
              <NavItem
                name={"Ekle"}
                link={"/"}
                onClick={() => setSelectedItem('Ekle')}
                style={selectedItem === 'Ekle' ? 'selected' : ''}
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