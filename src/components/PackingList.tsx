// import initialItems from "../data/initialItems";
import { FC } from "react";
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
  return (
    <div className="relative flex min-h-[37vh] flex-col items-center justify-center bg-[#5a3e2b] p-4 text-[#ffebb3] md:min-h-[50vh]">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item) => (
          <Item
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            item={item}
          />
        ))}
      </ul>

      <div className="absolute bottom-4">
        <select
          className="cursor-pointer rounded-[10rem] bg-[#ffebb3] px-[2.4rem] py-[0.8rem] text-sm font-bold uppercase text-[#5a3e2b] lg:text-[1.4rem]"
          name=""
          id=""
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
  );
};

export default PackingList;
