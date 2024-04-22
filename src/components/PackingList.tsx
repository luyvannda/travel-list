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
    <div className="flex flex-col items-center justify-between gap-[3.2rem] bg-[#5a3e2b] px-0 py-16 text-[#ffebb3]">
      <ul className="grid-cols-auto-fit-250 grid w-[80%] content-start justify-center gap-[1.2rem] overflow-hidden">
        {items.map((item) => (
          <Item key={item.id} onDeleteItem={onDeleteItem} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
