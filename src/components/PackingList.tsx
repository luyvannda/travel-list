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
    <div className="flex min-h-[37vh] flex-col items-center justify-center bg-[#5a3e2b] p-4 text-[#ffebb3]">
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
    </div>
  );
};

export default PackingList;
