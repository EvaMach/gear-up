// eslint-disable-next-line import/named
import Select, { SingleValue } from 'react-select';
import { Fragment, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Gear, GearItem, GearList, fetchGearOptions } from '../../api/gear';
import FormSectionHead from '../FormSectionHead';
import ListItem from '../ListItem';
import TripDetailsForm, { TripDetails } from '../TripDetailsForm';

interface SelectOption {
  value: GearItem;
  label: string;
}

const GearListForm = (): JSX.Element => {
  const gearList = useQuery({
    queryKey: ['gear'],
    queryFn: fetchGearOptions,
  });
  const [allGear, setAllGear] = useState<GearList>([]);
  const [groupWhereAlreaady, setGroupWhereAlready] = useState<string | null>(
    null
  );
  const [filteredGear, setFilteredGear] = useState<GearList>([]);
  const [listVisible, setListVisible] = useState(false);
  const [tripDetails, setTripDetails] = useState<TripDetails>({
    stayLength: 3,
    type: 'tent',
  });

  useEffect(() => {
    if (gearList.status === 'success') {
      setAllGear(gearList.data);
      setFilteredGear(
        gearList.data.map((gear: Gear) => ({
          group: gear.group,
          items: gear.items
            .filter(
              (item) => item.type === tripDetails.type || item.type === 'all'
            )
            .map((item) => {
              const amount = Math.round(tripDetails.stayLength * item.amount);
              return { ...item, amount };
            }),
        }))
      );
    }
  }, [gearList.status, gearList.data, tripDetails]);

  const handleItemAdded = (
    item: SingleValue<SelectOption>,
    data: Gear
  ): void => {
    const displayedItems = filteredGear
      .map((gear) => gear.items.map((gearItem) => gearItem.name))
      .flat();
    setGroupWhereAlready(null);
    if (displayedItems.includes(item!.value.name)) {
      setGroupWhereAlready(data.group);
      return;
    }
    const updatedData = filteredGear.map((gear) => {
      if (gear.group === data.group) {
        return { ...gear, items: [...gear.items, item!.value] };
      }
      return gear;
    });
    setFilteredGear([...updatedData]);
  };

  const handleItemRemoved = (group: string, itemName: string): void => {
    const updatedData = allGear.map((gear) => {
      if (gear.group === group) {
        return {
          ...gear,
          items: gear.items.filter((item) => itemName !== item.name),
        };
      }
      return gear;
    });
    setAllGear([...updatedData]);
  };

  const handleSubmitDetails = (submittedValues: TripDetails): void => {
    setListVisible(true);
    setTripDetails(submittedValues);
  };

  if (gearList.data) {
    return (
      <>
        <TripDetailsForm
          tripDetails={tripDetails}
          onChangeDetails={(): void => setListVisible(false)}
          onSubmitDetails={handleSubmitDetails}
        />
        <form className="flex flex-col gap-2">
          {listVisible && (
            <div className="flex flex-col gap-2">
              {filteredGear.map((data, index) => (
                <Fragment key={index}>
                  <FormSectionHead count={index + 2} title={data.group} />
                  {data.items.map((dataItem) => (
                    <ListItem
                      key={dataItem.name}
                      group={data.group}
                      name={dataItem.name}
                      count={dataItem.amount === 0 ? 1 : dataItem.amount}
                      onRemove={handleItemRemoved}
                    />
                  ))}
                  <Select
                    key={data.group + 'select'}
                    onChange={(item): void => handleItemAdded(item, data)}
                    options={allGear
                      .filter((gear) => gear.group === data.group)
                      .map((gear) =>
                        gear.items.map((item) => ({
                          value: item,
                          label: item.name,
                        }))
                      )
                      .flat()}
                  ></Select>
                  {groupWhereAlreaady === data.group && (
                    <p className="bg-primary/30 text-center rounded">
                      Gear už je na seznamu.
                    </p>
                  )}
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
