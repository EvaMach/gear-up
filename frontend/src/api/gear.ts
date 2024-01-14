const API_BASE_URL = 'http://localhost:4000';

export interface GearItem {
  name: string;
  type: 'tent' | 'hotel';
  amount: number;
}

export interface PackedGearItem extends GearItem {
  packed: boolean;
}

export type GearList = Gear[];

export interface Gear {
  group: string;
  items: GearItem[];
}

export const fetchGearOptions = async (): Promise<GearList> => {
  const response = await fetch(`${API_BASE_URL}/gear`);
  const data = await response.json();
  return data;
};
