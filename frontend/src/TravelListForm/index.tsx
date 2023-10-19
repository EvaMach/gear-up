import tentImg from './img/tent.jpg';
import hotelImg from './img/hotel.jpg';
import './style.css';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Gear, GearList, Item, fetchGearOptions } from '../api/gear';

// interface FormValues {
//   stayLength: number;
//   tripType: 'tent' | 'hotel';
// }

const PackingGuide = (): JSX.Element => {
  const [gear, setGear] = useState<GearList | 'loading'>('loading');
  useEffect(() => {
    const fetchGearData = async (): Promise<void> => {
      const response = await fetchGearOptions();
      setGear(response);
    };
    void fetchGearData();
  }, []);

  console.log(gear);

  return (
    <>
      <h1 className="mb-8">Sbal se na další výlet rychle a bez stresu!</h1>
      <form className="gap-8 packingForm">
        <h2>1. Základní info</h2>
        <label>
          Na kolik dní:
          <input
            className="p-1 bg-slate-300 rounded-md border-zinc-500"
            type="number"
            name="stayLength"
          />
        </label>
        <label>
          Tip výletu
          <div className="flex items-center gap-10">
            <div>
              <input
                className="input-hidden"
                type="radio"
                name="tent"
                id="tent"
              />
              <label htmlFor="tent">
                <img
                  className="w-80 cursor-pointer"
                  src={tentImg}
                  alt="camping"
                />
              </label>
            </div>
            <div>
              <input
                className="input-hidden"
                type="radio"
                name="hotel"
                id="hotel"
              />
              <label htmlFor="hotel">
                <img
                  className="w-80 cursor-pointer"
                  src={hotelImg}
                  alt="hotel"
                />
              </label>
            </div>
          </div>
        </label>
        {gear === 'loading' ? (
          <div>Loading...</div>
        ) : (
          gear.map((group: Gear) => (
            <label>
              {group.group}
              <Select
                options={group.items.map((item: Item) => ({
                  value: item.name,
                  label: item.name,
                }))}
              ></Select>
            </label>
          ))
        )}
        <button
          className="h-10 px-6 font-semibold w-48 rounded-md bg-primary text-white"
          type="submit"
        >
          Vytvořit seznam
        </button>
      </form>
    </>
  );
};

export default PackingGuide;
