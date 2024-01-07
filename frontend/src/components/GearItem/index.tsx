import { BinIcon, ShopIcon } from '../../libs/icons/icons';
import IconButton from '../IconButton';

interface Props {
  name: string;
  group: string;
  count: number;
  onRemove: (group: string, item: string) => void;
}

const GearItem = ({ group, name, count, onRemove }: Props): JSX.Element => {
  const handleClick = (): void => {
    onRemove(group, name);
  };
  return (
    <div className="flex gap-2">
      <div>{count}</div>
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
