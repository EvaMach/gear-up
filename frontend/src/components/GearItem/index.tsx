import { BinIcon, MinusIcon, PlusIcon, ShopIcon } from '../../libs/icons/icons';
import IconButton from '../IconButton';
import { useState } from 'react';

interface Props {
  name: string;
  group: string;
  count: number;
  onRemove: (group: string, item: string) => void;
}

const GearItem = ({ group, name, count, onRemove }: Props): JSX.Element => {
  const [itemCount, setItemCount] = useState(count);
  const handleClick = (): void => {
    onRemove(group, name);
  };
  return (
    <div className="flex gap-2">
      <input
        className="w-5 bg-bgDark rounded text-center"
        type="number"
        value={itemCount}
        onChange={(e): void => setItemCount(parseInt(e.target.value))}
        maxLength={2}
      ></input>
      <div className="flex flex-col gap-1">
        <IconButton onClick={(): void => setItemCount(itemCount + 1)}>
          <PlusIcon className="fill-textColor" />
        </IconButton>
        <IconButton onClick={(): void => setItemCount(itemCount - 1)}>
          <MinusIcon />
        </IconButton>
      </div>
      <div className="flex items-center bg-blueLight w-40 h-10 rounded px-2">
        {name}
      </div>
      <img src="" alt="" />
      <IconButton onClick={handleClick}>
        <BinIcon className="fill-textColor w-5 hover:fill-primary mr-4" />
      </IconButton>
      <IconButton onClick={handleClick}>
        <ShopIcon className="fill-textColor w-5 hover:fill-accent" />
      </IconButton>
    </div>
  );
};

export default GearItem;
