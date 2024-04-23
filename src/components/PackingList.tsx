// import initialItems from "../data/initialItems";
import { FC } from "react";
import Item from "./Item";
import { initialItemsType } from "@/data/initialItems";
import { DeleteItemFunction } from "./Item";

interface PackingListProps {
  items: initialItemsType[];
  onDeleteItem: DeleteItemFunction;
}

const PackingList: FC<PackingListProps> = ({ items, onDeleteItem }) => {
  return (
    <div className="flex min-h-[30vh] flex-col items-center justify-center bg-[#5a3e2b] p-4 text-[#ffebb3]">
      <ul className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <Item key={item.id} onDeleteItem={onDeleteItem} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
