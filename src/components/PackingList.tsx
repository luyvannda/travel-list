import { FC, useState } from "react";
import Item from "./Item";
import { initialItemsType } from "@/data/initialItems";
import { DeleteItemFuncType, ToggleItemFuncType } from "./Item";

interface PackingListProps {
  items: initialItemsType[];
  onDeleteItem: DeleteItemFuncType;
  onToggleItem: ToggleItemFuncType;
  onClearList: () => void;
}

const PackingList: FC<PackingListProps> = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems: initialItemsType[] = [];

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "quantity")
    sortedItems = items.slice().sort((a, b) => b.quantity - a.quantity);

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="grid min-h-[37vh] grid-rows-packingList flex-col bg-[#5a3e2b] p-4 text-[#ffebb3] md:min-h-[50vh]">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:px-4 md:px-8 lg:grid-cols-4 xl:grid-cols-5">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            item={item}
          />
        ))}
      </ul>

      <div className="mt-4 flex flex-col justify-between gap-2 sm:mx-auto sm:flex-row sm:gap-4">
        <select
          className="cursor-pointer rounded-[10rem] bg-[#ffebb3] px-2 py-[0.8rem] text-center text-sm font-bold uppercase text-[#5a3e2b] lg:text-[1.4rem]"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="quantity">Sort by quantity</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          onClick={() => onClearList()}
          className="cursor-pointer rounded-[10rem] bg-[#ffebb3] px-4 py-[0.8rem] text-sm font-bold uppercase text-[#5a3e2b] lg:text-[1.4rem]"
        >
          Clear list
        </button>
      </div>
    </div>
  );
};

export default PackingList;
