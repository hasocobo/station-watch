import { useState } from 'react';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import Select from './Select';
import check from '../../../assets/check.png';

const labs = [{ name: 'Lab 1' }, { name: 'Ömür Labı' }, { name: 'Lab 99' }];

const stations = [
  { name: 'Sıraya Gir' },
  { name: '35' },
  { name: '31' },
  { name: '33' },
];
const machines = [{ name: '70499' }, { name: '70558' }, { name: '74015' }];
const aquilaIds = [
  { name: '357162322' },
  { name: '325689723' },
  { name: '777845236' }
];
const testTypes = [
  { name: 'Yıpranma' },
  { name: 'Dayanıklılık' },
  { name: 'Hız' }
];
const programs = [{ name: 'Eco' }, { name: 'Fast' }, { name: 'Long' }];
const load = [{ name: 0.25 }, { name: 0.5 }, { name: 0.75 }, { name: 1 }];
const degree = [
  { name: 20 },
  { name: 30 },
  { name: 40 },
  { name: 60 },
  { name: 90 }
];
const maksDevir = [
  { name: '1200rpm' },
  { name: '1500rpm' },
  { name: '600rpm' }
];

import { useLabs } from '../../Context/LabProvider';

export default function CreateTest() {
  const { labs } = useLabs();
  console.log(labs);
  const [selectedOptions, setSelectedOptions] = useState({
    lab: labs[0].name,
    station: stations[0].name,
    machine: machines[0].name,
    testType: testTypes[0].name,
    program: programs[0].name,
    load: load[0].name,
    degree: degree[0].name,
    devir: maksDevir[0].name,
    description: ''
  });

  console.log(selectedOptions);

  const [step, setStep] = useState(1);

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions({ ...selectedOptions, [name]: value });
  };

  const renderSwitch = () => {
    switch (step) {
      case 2:
        return (
          <div className="relative flex h-full flex-col justify-between">
            <div className="absolute left-0 right-0 top-[-50px] flex w-full justify-center">
              <div className="h-1 w-80 rounded-lg border bg-sky-50">
                <div
                  className="h-1 rounded-md bg-sky-300"
                  style={{ width: '67%' }}
                ></div>
              </div>
            </div>
            <div className="flex grow flex-col items-center gap-10">
              <Select
                title={'Laboratuvar Seçiniz'}
                name={'lab'}
                value={selectedOptions.lab}
                onChange={handleSelectChange}
                options={labs}
                style={'flex gap-2 flex-col'}
                optionStyle={'lg:w-[40rem] md:w-[30rem] sm:w-[25rem] w-[15rem]'}
              />
              <Select
                title={'İstasyon Seçiniz'}
                name={'station'}
                value={selectedOptions.station}
                onChange={handleSelectChange}
                options={stations}
                style={'flex gap-2 flex-col'}
                optionStyle={'lg:w-[40rem] md:w-[30rem] sm:w-[25rem] w-[15rem]'}
              />
              <div className="flex w-full items-center justify-center lg:items-start">
                <div className="flex w-full flex-col items-center pb-4 md:w-4/5 w-full">
                  <h1 className="mb-2 self-start text-base font-semibold text-slate-600 md:text-lg lg:self-center lg:text-xl">
                    Detay Ekle
                  </h1>
                  <textarea
                    name="description"
                    id="description"
                    value={selectedOptions.description}
                    onChange={handleSelectChange}
                    rows="8"
                    className="w-full resize-none rounded-lg border-2 border-stone-300 lg:w-[500px]"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-12">
              <div className="" onClick={() => setStep(step - 1)}>
                <Button
                  style={
                    'lg:w-40 sm:w-32 w-28 bg-red-400 text-[1.1rem] font-semibold text-sm hover:bg-red-500 rounded-sm'
                  }
                  name={'Geri'}
                />
              </div>
              <div className="" onClick={() => setStep(step + 1)}>
                <Button
                  style={
                    'lg:w-40 sm:w-32 w-28 bg-sky-300 text-[1.1rem] font-semibold text-sm hover:bg-sky-400 rounded-sm'
                  }
                  name={'İleri'}
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="relative flex h-full flex-col justify-between">
            <div className="absolute left-0 right-0 top-[-50px] flex w-full justify-center">
              <div className="h-1 w-80 rounded-lg border bg-sky-50">
                <div
                  className="h-1 rounded-md bg-sky-300"
                  style={{ width: '33%' }}
                ></div>
              </div>
            </div>
            <div className="flex grow flex-col items-center lg:flex-row lg:justify-center">
              <div className="flex flex-col items-center gap-6   ">
                <Select
                  title={'Makine'}
                  options={machines}
                  name={'machine'}
                  value={selectedOptions.machine}
                  onChange={handleSelectChange}
                  style={'flex flex-col'}
                  optionStyle={
                    'md:w-[25rem] md:max-w-[25rem] w-[15rem] max-w-[15rem] sm:w-[20rem] sm:max-w-[20rem] '
                  }
                />
                <Select
                  title={'Test Tipi'}
                  options={testTypes}
                  name={'testType'}
                  value={selectedOptions.testType}
                  onChange={handleSelectChange}
                  style={'flex flex-col'}
                  optionStyle={
                    'md:w-[25rem] md:max-w-[25rem] w-[15rem] max-w-[15rem] sm:w-[20rem] sm:max-w-[20rem] '
                  }
                />
                <Select
                  title={'Program'}
                  options={programs}
                  name={'program'}
                  value={selectedOptions.program}
                  onChange={handleSelectChange}
                  style={'flex flex-col'}
                  optionStyle={
                    'md:w-[25rem] md:max-w-[25rem] w-[15rem] max-w-[15rem] sm:w-[20rem] sm:max-w-[20rem] '
                  }
                />
                <Select
                  title={'Yükleme'}
                  options={load}
                  name={'load'}
                  value={selectedOptions.load}
                  onChange={handleSelectChange}
                  style={'flex flex-col'}
                  optionStyle={
                    'md:w-[25rem] md:max-w-[25rem] w-[15rem] max-w-[15rem] sm:w-[20rem] sm:max-w-[20rem] '
                  }
                />
                <Select
                  title={'Sıcaklık'}
                  options={degree}
                  name={'degree'}
                  value={selectedOptions.degree}
                  onChange={handleSelectChange}
                  style={'flex flex-col'}
                  optionStyle={
                    'md:w-[25rem] md:max-w-[25rem] w-[15rem] max-w-[15rem] sm:w-[20rem] sm:max-w-[20rem] '
                  }
                />
                <Select
                  title={'Devir'}
                  options={maksDevir}
                  name={'devir'}
                  value={selectedOptions.devir}
                  onChange={handleSelectChange}
                  style={'flex flex-col'}
                  optionStyle={
                    'md:w-[25rem] md:max-w-[25rem] w-[15rem] max-w-[15rem] sm:w-[20rem] sm:max-w-[20rem] '
                  }
                />
              </div>
            </div>
            <div
              className="flex justify-end py-8 lg:p-0 "
              onClick={() => setStep(step + 1)}
            >
              <Button
                style={
                  'lg:w-40 sm:w-32 w-28 bg-sky-300 text-[1.1rem] font-semibold text-sm hover:bg-sky-400 rounded-sm'
                }
                name={'İleri'}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="relative flex h-full flex-col justify-between ">
            <div className="absolute left-0 right-0 top-[-50px] flex w-full justify-center">
              <div className="h-1 w-80 rounded-lg border bg-sky-50">
                <div
                  className="h-1 rounded-md bg-green-600"
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
            <div className="grow">
              <div className="flex h-full gap-8 pb-8 sm:gap-0">
                <div id="left" className="flex w-[50%] justify-center">
                  <div className="flex w-fit flex-col gap-8">
                    <p>
                      <span className="text-lg font-semibold">
                        Laboratuvar:{' '}
                      </span>
                      <span className="text-lg">{selectedOptions.lab}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">İstasyon: </span>
                      <span className="text-lg">{selectedOptions.station}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Makine ID: </span>
                      <span className="text-lg">{selectedOptions.machine}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Test Tipi: </span>
                      <span className="text-lg">
                        {selectedOptions.testType}
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
                      <span className="text-lg">{selectedOptions.load}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Sıcaklık: </span>
                      <span className="text-lg">{selectedOptions.degree}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">
                        Maksimum Devir:{' '}
                      </span>
                      <span className="text-lg">{selectedOptions.devir}</span>
                    </p>
                    <p>
                      <span className="text-lg font-semibold">Not: </span>
                      <span className="text-lg">
                        {selectedOptions.description}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-12">
              <div className="" onClick={() => setStep(step - 1)}>
                <Button
                  style={
                    'lg:w-40 sm:w-32 w-28 bg-red-400 text-[1.1rem] font-semibold text-sm hover:bg-red-500 rounded-sm'
                  }
                  name={'Geri'}
                />
              </div>
              <div className="" onClick={() => setStep(step + 1)}>
                <Button
                  style={
                    'lg:w-40 sm:w-32 w-28 bg-green-300 text-[1.1rem] font-semibold text-sm hover:bg-green-400 rounded-sm'
                  }
                  name={'Onayla'}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="relative flex h-full flex-col items-center">
            <img src={check} alt="check" width={'400px'} height={'400px'} />
            <h1 className="text-center text-3xl font-bold">
              Test talebiniz alınmıştır!
            </h1>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className="mx-auto h-full max-w-[60vw]">
      <div className="relative h-full py-20">{renderSwitch()}</div>
    </div>
  );
}
