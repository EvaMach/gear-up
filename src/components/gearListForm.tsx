import { SingleValue } from 'react-select';
import { useState } from 'react';
import { GearItem, GearList } from '../api/gear';
import FormSectionHead from './formSectionHead';
import CreatableSelect from 'react-select/creatable';
import ListItem from './listItem';

interface OptionValue {
  item: GearItem;
  group: string;
}

interface SelectOption {
  value: OptionValue;
  label: string;
}

interface Props {
  gear: GearList;
  onItemRemoved: (group: string, itemName: string) => void;
  onItemAdded: (value: SingleValue<SelectOption>) => void;
  onItemCreated: (value: string, group: string) => void;
  selectOptions: GearList;
}

const GearListForm = ({ gear, onItemRemoved, onItemAdded, selectOptions, onItemCreated }: Props): JSX.Element => {
  const [groupWhereAlreaady, setGroupWhereAlready] = useState<string | null>(
    null
  );
  const isItemAlreadyOnList = (itemName: string): boolean =>
    gear.some((group) => {
      return group.items.some((item) => item.name === itemName);
    });

  const createNewOption = (inputValue: string): JSX.Element => (
    <button
      className="hover:text-accent"
      type="button"
    >
      + {inputValue}
    </button>
  );

  return (
    <form className="flex flex-col gap-2">
      <FormSectionHead count={3} title="Balící seznam" />
      <div className="flex lg:flex-row max-w-full overflox-auto max-h-screen/4 flex-col gap-2 lg:gap-8 p-2 rounded-lg overflow-x-scroll">
        {gear.map((data, index) => (
          <div className="flex max-h-screen min-w-fit overflow-y-auto flex-col gap-2 bg-white p-4 rounded-lg" key={index}>
            <h3 className="font-medium">{data.group}</h3>
            {data.items.map((dataItem) => (
              <ListItem
                key={dataItem.name}
                group={data.group}
                name={dataItem.name}
                count={dataItem.amount === 0 ? 1 : dataItem.amount}
                onRemove={onItemRemoved}
              />
            ))}
            <div className="flex flex-col items-center w-full">
              <CreatableSelect
                menuPlacement="auto"
                className="gear-select"
                classNamePrefix={'gear-select'}
                key={data.group + 'select'}
                controlShouldRenderValue={false}
                placeholder="Vybrat"
                closeMenuOnSelect
                onCreateOption={(inputValue) => onItemCreated(inputValue, data.group)}
                formatCreateLabel={createNewOption}
                onChange={onItemAdded}
                options={selectOptions
                  .filter((gear) => gear.group === data.group)
                  .map((gear) =>
                    gear.items.map((item) => ({
                      value: { item: item, group: data.group },
                      label: item.name,
                    }))
                  )
                  .flat()}
              />
              {groupWhereAlreaady === data.group && (
                <p className="bg-primary/30 rounded w-1/2 lg:min-w-15 text-center">
                  Gear už je na seznamu.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default GearListForm;
