import { useState } from "react"
import Button from "../../Button/Button"
import Icon from "../../Icon/Icon"
import Select from "./Select"

const labs = [
  { name: "Lab1" },
  { name: "Lab 2" },
  { name: "Lab 3" }
]

const stations = [
  { name: "Station 1" },
  { name: "Fahrettin Altay" },
  { name: "Basmane" }
]

export default function CreateTest() {
  const [step, setStep] = useState(1);
  console.log(step);
  return (
    <div className="max-w-[66vw] mx-auto h-full">
      <div className="py-20 relative h-full">
        <div className="flex flex-col gap-20 ">
          <Select title={"Başlatılmış projeye test ataması için seçiniz (aquila id)"} options={stations} />
          <Select title={"Laboratuvar Seçiniz"} options={labs} />
          <Select title={"İstasyon Seçiniz"} options={stations} />
          <div className="self-end relative right-[100px]" onClick={() => setStep(step + 1)}>
            <Button
              style={"w-40 bg-sky-300 text-[1.1rem] font-semibold text-sm hover:bg-sky-400 rounded-lg"}
              name={"İlerle"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}