import Select from 'react-select';
import { Fragment, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Gear, GearList, fetchGearOptions } from '../../api/gear';
import GearItem from '../GearItem';
import FormSectionHead from '../FormSectionHead';
import TripDetailsForm from '../TripDetailsForm';

const GearListForm = (): JSX.Element => {
  const gearList = useQuery({
    queryKey: ['gear'],
    queryFn: fetchGearOptions,
  });
  const [gearData, setGearData] = useState<GearList>([]);
  const [itemAlreadyAdded, setItemAlreadyAdded] = useState(false);
  const [listVisible, setListVisible] = useState(false);

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
        <TripDetailsForm
          onChangeDetails={(): void => setListVisible(false)}
          onSubmitDetails={(): void => setListVisible(true)}
        />
        <form className="flex flex-col gap-2">
          {listVisible && (
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
