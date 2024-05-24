const API_BASE_URL = 'http://localhost:8000/api';

export interface GearItem {
  name: string;
  type: 'tent' | 'hotel' | 'all';
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
  const json = await response.json();
  return json.data.documents;
};
