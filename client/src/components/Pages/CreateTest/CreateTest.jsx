import { useState } from 'react'
import Button from '../../Button/Button'
import Icon from '../../Icon/Icon'
import Select from './Select'
import check from '../../../assets/check.png'

const labs = [{ name: 'Lab 1' }, { name: 'Ömür Labı' }, { name: 'Lab 99' }]

const stations = [
  { name: '35' },
  { name: '31' },
  { name: '33' },
  { name: 'Sıraya Gir' }
]
const machines = [{ name: '70499' }, { name: '70558' }, { name: '74015' }]
const aquilaIds = [
  { name: '357162322' },
  { name: '325689723' },
  { name: '777845236' }
]
const testTypes = [
  { name: 'Yıpranma' },
  { name: 'Dayanıklılık' },
  { name: 'Hız' }
]
const programs = [{ name: 'Eco' }, { name: 'Fast' }, { name: 'Long' }]
const yukleme = [{ name: '0,75' }, { name: '1' }, { name: '1,5' }]
const sicaklik = [{ name: '30°C' }, { name: '60°C' }, { name: '50°C' }]
const maksDevir = [{ name: '1200rpm' }, { name: '1500rpm' }, { name: '600rpm' }]

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

  const [step, setStep] = useState(1)

  const handleSelectChange = (event) => {
    const { name, value } = event.target
    setSelectedOptions({ ...selectedOptions, [name]: value })
  }

  const renderSwitch = () => {
    switch (step) {
      case 1:
        return (
          <div className="relative flex h-full flex-col justify-between">
            <div className="absolute left-0 right-0 top-[-50px] flex w-full justify-center">
              ⚫○○
            </div>
            <div className="flex grow flex-col gap-20">
              <Select
                title={
                  'Aquila ID Seçiniz'
                }
                name={'aquilaId'}
                value={selectedOptions.aquilaId}
                onChange={handleSelectChange}
                options={aquilaIds}
                style={'flex gap-2 flex-col'}
                optionStyle={'w-[40rem]'}
              />
              <Select
                title={'Laboratuvar Seçiniz'}
                name={'lab'}
                value={selectedOptions.lab}
                onChange={handleSelectChange}
                options={labs}
                style={'flex gap-2 flex-col'}
                optionStyle={'w-[40rem]'}
              />
              <Select
                title={'İstasyon Seçiniz'}
                name={'istasyon'}
                value={selectedOptions.istasyon}
                onChange={handleSelectChange}
                options={stations}
                style={'flex gap-2 flex-col'}
                optionStyle={'w-[40rem]'}
              />
            </div>
            <div
              className="flex justify-end "
              onClick={() => setStep(step + 1)}
            >
              <Button
                style={
                  'w-40 bg-sky-300 text-[1.1rem] font-semibold text-sm hover:bg-sky-400 rounded-sm'
                }
                name={'İleri'}
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="relative flex h-full flex-col justify-between">
            <div className="absolute left-0 right-0 top-[-50px] flex w-full justify-center">
              ○⚫○
            </div>
            <div className="flex grow">
              <div className="flex w-[55%] flex-col gap-10">
                <Select
                  title={'Makine'}
                  options={machines}
                  name={'makine'}
                  value={selectedOptions.makine}
                  onChange={handleSelectChange}
                  style={'flex flex-row gap-20 items-center justify-between'}
                  optionStyle={'w-[25rem] max-w-[25rem]'}
                />
                <Select
                  title={'Test Tipi'}
                  options={testTypes}
                  name={'testTipi'}
                  value={selectedOptions.testTipi}
                  onChange={handleSelectChange}
                  style={'flex flex-row gap-20 items-center justify-between'}
                  optionStyle={'w-[25rem] max-w-[25rem]'}
                />
                <Select
                  title={'Program'}
                  options={programs}
                  name={'program'}
                  value={selectedOptions.program}
                  onChange={handleSelectChange}
                  style={'flex flex-row gap-20 items-center justify-between'}
                  optionStyle={'w-[25rem] max-w-[25rem]'}
                />
                <Select
                  title={'Yükleme'}
                  options={yukleme}
                  name={'yukleme'}
                  value={selectedOptions.yukleme}
                  onChange={handleSelectChange}
                  style={'flex flex-row gap-20 items-center justify-between'}
                  optionStyle={'w-[25rem] max-w-[25rem]'}
                />
                <Select
                  title={'Sıcaklık'}
                  options={sicaklik}
                  name={'sicaklik'}
                  value={selectedOptions.sicaklik}
                  onChange={handleSelectChange}
                  style={'flex flex-row gap-20 items-center justify-between'}
                  optionStyle={'w-[25rem] max-w-[25rem]'}
                />
                <Select
                  title={'Devir'}
                  options={maksDevir}
                  name={'devir'}
                  value={selectedOptions.devir}
                  onChange={handleSelectChange}
                  style={'flex flex-row gap-20 items-center justify-between'}
                  optionStyle={'w-[25rem] max-w-[25rem]'}
                />
              </div>
              <div className="flex w-[45%] items-start justify-end">
                <div className="flex flex-col">
                  <h1 className="mb-2 self-center text-xl font-semibold">
                    Detay Ekle
                  </h1>
                  <textarea
                    name="detay"
                    id="detay"
                    cols="40"
                    value={selectedOptions.detay}
                    onChange={handleSelectChange}
                    rows="10"
                    className="resize-none rounded-lg border-2 border-stone-300"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="" onClick={() => setStep(step - 1)}>
                <Button
                  style={
                    'w-40 bg-red-400 text-[1.1rem] font-semibold text-sm hover:bg-red-500 rounded-sm'
                  }
                  name={'Geri'}
                />
              </div>
              <div className="" onClick={() => setStep(step + 1)}>
                <Button
                  style={
                    'w-40 bg-sky-300 text-[1.1rem] font-semibold text-sm hover:bg-sky-400 rounded-sm'
                  }
                  name={'İleri'}
                />
              </div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="relative flex h-full flex-col justify-between ">
            <div className="absolute left-0 right-0 top-[-50px] flex w-full justify-center">
              ○○⚫
            </div>
            <div className="grow">
              <div className="flex h-full">
                <div id="left" className="flex w-[50%] justify-center">
                  <div className="flex w-fit flex-col gap-8">
                    <p>
                      <span className="text-lg font-semibold">Proje ID: </span>
                      <span className="text-lg">
                        {selectedOptions.aquilaId}
                      </span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">
                        Laboratuvar:{' '}
                      </span>
                      <span className="text-lg">{selectedOptions.lab}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">İstasyon: </span>
                      <span className="text-lg">
                        {selectedOptions.istasyon}
                      </span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Makine ID: </span>
                      <span className="text-lg">{selectedOptions.makine}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Test Tipi: </span>
                      <span className="text-lg">
                        {selectedOptions.testTipi}
                      </span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Program: </span>
                      <span className="text-lg">{selectedOptions.program}</span>
                    </p>
                  </div>
                </div>
                <div
                  id="right"
                  className="flex w-[50%] shrink-0 justify-center"
                >
                  <div className="flex w-fit flex-col gap-12">
                    <p>
                      <span className="text-lg font-semibold">Yükleme: </span>
                      <span className="text-lg">{selectedOptions.yukleme}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Sıcaklık: </span>
                      <span className="text-lg">
                        {selectedOptions.sicaklik}
                      </span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">
                        Maksimum Devir:{' '}
                      </span>
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
                  style={
                    'w-40 bg-red-400 text-[1.1rem] font-semibold text-sm hover:bg-red-500 rounded-sm'
                  }
                  name={'Geri'}
                />
              </div>
              <div className="" onClick={() => setStep(step + 1)}>
                <Button
                  style={
                    'w-40 bg-green-300 text-[1.1rem] font-semibold text-sm hover:bg-green-400 rounded-sm'
                  }
                  name={'Onayla'}
                />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="relative flex h-full flex-col items-center">
            <img src={check} alt="check" width={'400px'} height={'400px'} />
            <h1 className="text-3xl font-bold">Test talebiniz alınmıştır!</h1>
          </div>
        )

      default:
        break
    }
  }

  return (
    <div className="mx-auto h-full max-w-[70vw]">
      <div className="relative h-full py-20">{renderSwitch()}</div>
    </div>
  )
}
