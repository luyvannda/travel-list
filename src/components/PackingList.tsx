import { FC, useState } from "react";
import Item from "./Item";
import { initialItemsType } from "@/data/initialItems";
import { DeleteItemFuncType, ToggleItemFuncType } from "./Item";

interface PackingListProps {
  items: initialItemsType[];
  onDeleteItem: DeleteItemFuncType;
  onToggleItem: ToggleItemFuncType;
}

const PackingList: FC<PackingListProps> = ({
  items,
  onDeleteItem,
  onToggleItem,
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
    <div className="sm: relative flex min-h-[37vh] flex-col items-center justify-center bg-[#5a3e2b] p-4 text-[#ffebb3] sm:grid sm:grid-rows-packingList md:min-h-[50vh]">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8 lg:grid-cols-4 xl:grid-cols-5">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            item={item}
          />
        ))}
      </ul>

      <div className="mt-4 sm:mx-auto">
        <select
          className="cursor-pointer rounded-[10rem] bg-[#ffebb3] px-[2.4rem] py-[0.8rem] text-sm font-bold uppercase text-[#5a3e2b] lg:text-[1.4rem]"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="quantity">Sort by quantity</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
};

export default PackingList;
