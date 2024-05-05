import { useState } from "react"
import Button from "../../Button/Button"
import Icon from "../../Icon/Icon"
import Select from "./Select"
import check from "../../../assets/check.png"

const labs = [
  { name: "Lab 1" },
  { name: "Ömür Labı" },
  { name: "Lab 99" }
]

const stations = [
  { name: "35" },
  { name: "31" },
  { name: "33" },
  { name: "Sıraya Gir" }
]
const machines = [
  { name: "70499" },
  { name: "70558" },
  { name: "74015" }
]
const aquilaIds = [
  { name: "357162322" },
  { name: "325689723" },
  { name: "777845236" }
]
const testTypes = [
  { name: "Yıpranma" },
  { name: "Dayanıklılık" },
  { name: "Hız" }
]
const programs = [
  { name: "Eco" },
  { name: "Fast" },
  { name: "Long" }
]
const yukleme = [
  { name: "0,75" },
  { name: "1" },
  { name: "1,5" }
]
const sicaklik = [
  { name: "30°C" },
  { name: "60°C" },
  { name: "50°C" }
]
const maksDevir = [
  { name: "1200rpm" },
  { name: "1500rpm" },
  { name: "600rpm" }
]

export default function CreateTest() {
  const [selectedOptions, setSelectedOptions] = useState({
    aquilaId: aquilaIds[0].name,
    lab: labs[0].name,
    istasyon: stations[0].name,
    makine: machines[0].name,
    testTipi: testTypes[0].name,
    program: programs[0].name,
    yukleme: yukleme[0].name,
    sicaklik: sicaklik[0].name,
    devir: maksDevir[0].name,
    detay: ''
  })

  const [step, setStep] = useState(1);

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions({ ...selectedOptions, [name]: value })
  }

  const renderSwitch = () => {
    switch (step) {
      case 1:
        return (

          <div className="flex flex-col relative justify-between h-full">
            <div className="flex top-[-50px] left-0 right-0 absolute w-full justify-center">⚫○○</div>
            <div className="flex flex-col gap-20 grow">
              <Select
                title={"Başlatılmış projeye test ataması için seçiniz (aquila id)"}
                name={"aquilaId"}
                value={selectedOptions.aquilaId}
                onChange={handleSelectChange}
                options={aquilaIds}
                style={"flex gap-2 flex-col"}
              />
              <Select
                title={"Laboratuvar Seçiniz"}
                name={"lab"}
                value={selectedOptions.lab}
                onChange={handleSelectChange}
                options={labs}
                style={"flex gap-2 flex-col"}
              />
              <Select
                title={"İstasyon Seçiniz"}
                name={"istasyon"}
                value={selectedOptions.istasyon}
                onChange={handleSelectChange}
                options={stations}
                style={"flex gap-2 flex-col"}
              />
            </div>
            <div className="flex justify-end " onClick={() => setStep(step + 1)}>
              <Button
                style={"w-40 bg-sky-300 text-[1.1rem] font-semibold text-sm hover:bg-sky-400 rounded-lg"}
                name={"İleri"}
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="flex flex-col relative justify-between h-full">
            <div className="flex top-[-50px] left-0 right-0 absolute w-full justify-center">○⚫○</div>
            <div className="flex grow">
              <div className="w-[55%] flex flex-col gap-10">
                <Select
                  title={"Makine"}
                  options={machines}
                  name={"makine"}
                  value={selectedOptions.makine}
                  onChange={handleSelectChange}
                  style={"flex flex-row gap-20 items-center justify-between"}
                  optionStyle={"w-[25rem]"}
                />
                <Select
                  title={"Test Tipi"}
                  options={testTypes}
                  name={"testTipi"}
                  value={selectedOptions.testTipi}
                  onChange={handleSelectChange} style={"flex flex-row gap-20 items-center justify-between"}
                  optionStyle={"w-[25rem]"}
                />
                <Select
                  title={"Program"}
                  options={programs}
                  name={"program"}
                  value={selectedOptions.program}
                  onChange={handleSelectChange} style={"flex flex-row gap-20 items-center justify-between"}
                  optionStyle={"w-[25rem]"}
                />
                <Select
                  title={"Yükleme"}
                  options={yukleme}
                  name={"yukleme"}
                  value={selectedOptions.yukleme}
                  onChange={handleSelectChange} style={"flex flex-row gap-20 items-center justify-between"}
                  optionStyle={"w-[25rem]"}
                />
                <Select
                  title={"Sıcaklık"}
                  options={sicaklik}
                  name={"sicaklik"}
                  value={selectedOptions.sicaklik}
                  onChange={handleSelectChange} style={"flex flex-row gap-20 items-center justify-between"}
                  optionStyle={"w-[25rem]"}
                />
                <Select
                  title={"Devir"}
                  options={maksDevir}
                  name={"devir"}
                  value={selectedOptions.devir}
                  onChange={handleSelectChange} style={"flex flex-row gap-20 items-center justify-between"}
                  optionStyle={"w-[25rem]"}
                />
              </div>
              <div className="w-[45%] flex items-start justify-end">
                <div className="flex flex-col">
                  <h1 className="font-semibold self-center text-xl mb-2">Detay Ekle</h1>
                  <textarea
                    name="detay"
                    id="detay"
                    cols="40"
                    value={selectedOptions.detay}
                    onChange={handleSelectChange}
                    rows="10"
                    className="border-2 border-stone-300 rounded-lg resize-none">
                  </textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="" onClick={() => setStep(step - 1)}>
                <Button
                  style={"w-40 bg-red-400 text-[1.1rem] font-semibold text-sm hover:bg-red-500 rounded-lg"}
                  name={"Geri"}
                />
              </div>
              <div className="" onClick={() => setStep(step + 1)}>
                <Button
                  style={"w-40 bg-sky-300 text-[1.1rem] font-semibold text-sm hover:bg-sky-400 rounded-lg"}
                  name={"İleri"}
                />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="flex flex-col relative justify-between h-full ">
            <div className="flex top-[-50px] left-0 right-0 absolute w-full justify-center">○○⚫</div>
            <div className="grow">
              <div className="flex h-full">
                <div id="left" className="flex justify-center w-[50%]">
                  <div className="w-fit flex flex-col gap-8">
                    <p>
                      <span className="text-lg font-semibold">Proje ID: </span>
                      <span className="text-lg">{selectedOptions.aquilaId}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Laboratuvar: </span>
                      <span className="text-lg">{selectedOptions.lab}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">İstasyon: </span>
                      <span className="text-lg">{selectedOptions.istasyon}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Makine ID: </span>
                      <span className="text-lg">{selectedOptions.makine}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Test Tipi: </span>
                      <span className="text-lg">{selectedOptions.testTipi}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Program: </span>
                      <span className="text-lg">{selectedOptions.program}</span>
                    </p>
                  </div>
                </div>
                <div id="right" className="flex justify-center shrink-0 w-[50%]">
                  <div className="w-fit flex flex-col gap-12">
                    <p>
                      <span className="text-lg font-semibold">Yükleme: </span>
                      <span className="text-lg">{selectedOptions.yukleme}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Sıcaklık: </span>
                      <span className="text-lg">{selectedOptions.sicaklik}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Maksimum Devir: </span>
                      <span className="text-lg">{selectedOptions.devir}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Not: </span>
                      <span className="text-lg">{selectedOptions.detay}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-12">
              <div className="" onClick={() => setStep(step - 1)}>
                <Button
                  style={"w-40 bg-red-400 text-[1.1rem] font-semibold text-sm hover:bg-red-500 rounded-lg"}
                  name={"Geri"}
                />
              </div>
              <div className="" onClick={() => setStep(step + 1)}>
                <Button
                  style={"w-40 bg-green-300 text-[1.1rem] font-semibold text-sm hover:bg-green-400 rounded-lg"}
                  name={"Onayla"}
                />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="flex flex-col relative items-center h-full">
            <img src={check} alt="check" width={"400px"} height={"400px"} />
            <h1 className="font-bold text-3xl">Test talebiniz alınmıştır!</h1>
          </div>
        )

      default:
        break;
    }
  }



  return (
    <div className="max-w-[70vw] mx-auto h-full">
      <div className="py-20 relative h-full">
        {renderSwitch()}
      </div>
    </div>
  )
}