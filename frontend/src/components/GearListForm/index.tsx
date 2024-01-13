import './style.css';
import Select from 'react-select';
import { Fragment, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import tentImg from './img/tent.jpg';
import hotelImg from './img/hotel.jpg';
import { Gear, GearList, fetchGearOptions } from '../../api/gear';
import FormSectionHead from '../FormSectionHead';

const GearListForm = (): JSX.Element => {
  const [step, setStep] = useState(1);
  const gearList = useQuery({
    queryKey: ['gear'],
    queryFn: fetchGearOptions,
  });
  const [gearData, setGearData] = useState<GearList>([]);
  const [itemAlreadyAdded, setItemAlreadyAdded] = useState(false);

  useEffect(() => {
    if (gearList.status === 'success') {
      setGearData([
        ...gearList.data.map((gear: Gear) => ({
          group: gear.group,
          items: gear.items.filter((item) => item.type === 'outdoor'),
        })),
      ]);
    }
  }, [gearList.status, gearList.data]);

  const handleItemAdded = (item, data: Gear): void => {
    console.log(item, data);
    const displayedItems = gearData
      .map((gear) => gear.items.map((item) => item.name))
      .flat();
    setItemAlreadyAdded(false);
    if (displayedItems.includes(item.value.name)) {
      setItemAlreadyAdded(true);
      return;
    }
    const updatedData = gearData.map((gear) => {
      if (gear.group === data.group) {
        return { ...gear, items: [...gear.items, item.value] };
      }
      return gear;
    });
    setGearData([...updatedData]);
  };

  const handleItemRemoved = (group: string, itemName: string): void => {
    const updatedData = gearData.map((gear) => {
      if (gear.group === group) {
        return {
          ...gear,
          items: gear.items.filter((item) => itemName !== item.name),
        };
      }
      return gear;
    });
    setGearData([...updatedData]);
  };

  if (gearList.data) {
    const filteredData = gearList.data.map((gear) => ({
      group: gear.group,
      items: gear.items,
    }));
    return (
      <>
        <h1 className="mb-8">Sbal se na další výlet rychle a bez stresu!</h1>
        <form className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 mb-2">
            <FormSectionHead count={1} title="Základní info" />
            <label className="flex flex-col">
              Na kolik dní:
              <input
                className="p-1 bg-slate-300 rounded-md border-zinc-500"
                type="number"
                name="stayLength"
              />
            </label>
            <label className="flex flex-col">
              Tip výletu:
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
          </div>
          {step === 1 && (
            <button
              className="h-10 px-6 font-semibold w-48 rounded-md bg-primary text-white"
              type="button"
              onClick={(): void => setStep(2)}
            >
              Seznam ke sbalení
            </button>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-2">
              {gearData.map((data, index) => (
                <Fragment key={index}>
                  <FormSectionHead count={index + 2} title={data.group} />
                  {data.items.map((dataItem) => (
                    <GearItem
                      key={dataItem.name}
                      group={data.group}
                      name={dataItem.name}
                      count={dataItem.amount}
                      onRemove={handleItemRemoved}
                    />
                  ))}
                  <Select
                    key={data.group + 'select'}
                    onChange={(item): void => handleItemAdded(item, data)}
                    options={filteredData
                      .map((gear) =>
                        gear.items.map((item) => ({
                          value: item,
                          label: item.name,
                        }))
                      )
                      .flat()}
                  ></Select>
                  {itemAlreadyAdded && <p>Gear už je na seznamu.</p>}
                </Fragment>
              ))}
            </div>
          )}
        </form>
      </>
    );
  }

  return <div>nothing</div>;
};

export default GearListForm;
