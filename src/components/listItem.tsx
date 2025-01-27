import {
  BinIcon,
  CheckedIcon,
  MinusIcon,
  PlusIcon,
  ShopIcon,
  UncheckedIcon,
} from '../libs/icons/icons';
import IconButton from './iconButton';
import { useState } from 'react';

interface Props {
  name: string;
  group: string;
  count: number;
  onRemove: (group: string, item: string) => void;
}

const ListItem = ({ group, name, count, onRemove }: Props): JSX.Element => {
  const [itemCount, setItemCount] = useState(count);
  const [checked, setChecked] = useState(false);

  const removeItem = (): void => {
    onRemove(group, name);
  };

  const changeItemCount = (operation?: 'plus' | 'minus'): void => {
    if (itemCount === 0 && operation === 'minus') {
      return;
    }
    if (itemCount === 99 && operation === 'plus') {
      return;
    }
    if (operation === 'plus') {
      setItemCount(itemCount + 1);
    } else {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      <div className="flex items-center gap-0.5">
        <div className='p-2'>{itemCount}</div>
        <IconButton
          className="bg-bgDark p-1 h-6 aspect-square rounded-full flex items-center justify-center"
          onClick={(): void => changeItemCount('plus')}
        >
          <PlusIcon className="fill-textColor w-2" />
        </IconButton>
        <IconButton
          className="bg-bgDark p-1 h-6 aspect-square rounded-full flex items-center justify-center"
          onClick={(): void => changeItemCount('minus')}
        >
          <MinusIcon className="fill-textColor w-2" />
        </IconButton>
      </div>
      <button
        type="button"
        onClick={(): void => setChecked(!checked)}
        className="grid grid-cols-[2rem_minmax(6rem,_1fr)_2rem] border-2 min-w-5 lg:min-w-15 justify-between items-center p-1 min-h-min rounded-lg px-2 w-48"
      >
        {checked ? (
          <CheckedIcon className="w-4" />
        ) : (
          <UncheckedIcon className="w-4" />
        )}
        <div className="text-left overflow-auto">
          {name}
        </div>
        <IconButton onClick={removeItem}>
          <BinIcon className="fill-gray-300 w-4 hover:fill-primary" />
        </IconButton>
      </button>
      <IconButton onClick={removeItem}>
        <ShopIcon className="fill-textColor w-4 hover:fill-accent" />
      </IconButton>
    </div >
  );
};

export default ListItem;
