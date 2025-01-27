import { fetchGearOptions, GearItem, GearList } from "../api/gear";
import { useLocation } from "react-router";
import { TripDetails } from "./tripDetailsForm";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { SingleValue } from "react-select";
import GearListForm from "./gearListForm";
import TripDetailsBoard from "./tripDetails";

interface OptionValue {
  item: GearItem;
  group: string;
}

interface SelectOption {
  value: OptionValue;
  label: string;
}

const GearListPage = (): JSX.Element => {
  const location = useLocation();
  const tripDetails = location.state as TripDetails;

  const { isPending, data: gearList, isError } = useQuery({
    queryKey: ['gear'],
    queryFn: fetchGearOptions,
  });

  const [gearOnList, setGearOnList] = useState<GearList>([]);
  const [selectOptions, setSelectOptions] = useState<GearList>([]);

  useEffect(() => {
    if (!gearList) return;
    const filter = (item: GearItem): boolean =>
      item.type === tripDetails.type || item.type === 'all';

    const buildGearData = (
      filterFunction: (item: GearItem) => boolean
    ): GearList => {
      return gearList.map((gear) => ({
        group: gear.group,
        items: gear.items.filter(filterFunction).map((item) => {
          const amount = Math.round(tripDetails.stayLength * item.amount);
          return { ...item, amount };
        }),
      }));
    };

    setGearOnList(buildGearData((item) => filter(item)));
    setSelectOptions(buildGearData((item) => !filter(item)));

  }, [gearList]);


  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }


  const handleItemRemoved = (group: string, itemName: string): void => {
    const updatedData = gearOnList.map((gear) => {
      if (gear.group === group) {
        return {
          ...gear,
          items: gear.items.filter((item) => itemName !== item.name),
        };
      }
      return gear;
    });
    setGearOnList([...updatedData]);

    const updatedSelectOptions = selectOptions.map((option) => {
      if (option.group === group) {
        const removedItem = gearOnList
          .find((gear) => gear.group === group)
          ?.items.find((item) => item.name === itemName);
        if (removedItem) {
          return {
            ...option,
            items: [...option.items, removedItem],
          };
        }
      }
      return option;
    });

    setSelectOptions([...updatedSelectOptions]);
  };

  const handleNewItemCreated = (inputValue: string, dataGroup: string): void => {
    // if (isItemAlreadyOnList(inputValue)) {
    //   setGroupWhereAlready(selectValue.value.group);
    //   return;
    // }
    const newItem: GearItem = {
      name: inputValue,
      type: tripDetails.type,
      amount: 1,
    };
    const updatedData = gearOnList.map((gear) => {
      if (gear.group === dataGroup) {
        return { ...gear, items: [...gear.items, newItem] };
      }
      return gear;
    });
    setGearOnList([...updatedData]);
  };


  const handleItemAdded = (selectedItem: SingleValue<SelectOption>): void => {
    if (selectedItem === null) return;
    const { value } = selectedItem;
    const updatedList = gearOnList.map((gear) => {
      if (gear.group === value.group) {
        return { ...gear, items: [...gear.items, value.item] };
      }
      return gear;
    });
    setGearOnList([...updatedList]);

    const updatedSelectOptions = selectOptions.map((gear) => {
      if (gear.group === value.group) {
        return {
          ...gear,
          items: gear.items.filter((item) => item.name !== value.item.name),
        };
      }
      return gear;
    });
    setSelectOptions(updatedSelectOptions);
  };

  return (
    <>
      <TripDetailsBoard details={tripDetails} />
      <GearListForm
        gear={gearOnList}
        onItemRemoved={handleItemRemoved}
        onItemAdded={handleItemAdded}
        selectOptions={selectOptions}
        onItemCreated={handleNewItemCreated}
      />
    </>
  );
};

export default GearListPage;