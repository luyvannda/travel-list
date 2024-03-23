export type initialItemsType = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

const initialItems: initialItemsType[] = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default initialItems;
