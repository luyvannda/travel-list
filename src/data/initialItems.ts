export type initialItemsType = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};

const initialItems: initialItemsType[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default initialItems;
