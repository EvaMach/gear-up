import { GearItem, GearList } from '../api/gear';

const addItemToList = (
  list: GearList,
  group: string,
  itemName: string
): GearList => {
  return list.map((gear) => {
    if (gear.group === group) {
      return {
        ...gear,
        items: gear.items.filter((item) => itemName !== item.name),
      };
    }
    return gear;
  });
};
