// eslint-disable-next-line import/no-unresolved
import BinIcon from './bin-icon.svg?react';

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
    <div className="flex">
      <div>{count}</div>
      <div className="bg-slate-300 w-40 rounded px-2">{name}</div>
      <button type="button" onClick={handleClick}>
        <button>
          <BinIcon />
        </button>
      </button>
    </div>
  );
};

export default GearItem;
