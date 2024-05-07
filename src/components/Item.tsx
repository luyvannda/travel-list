import { FC } from "react";
import { initialItemsType } from "../data/initialItems";

export interface DeleteItemFuncType {
  (id: number): void;
}

export interface ToggleItemFuncType {
  (id: number): void;
}

interface ItemProps {
  item: initialItemsType;
  onDeleteItem: DeleteItemFuncType;
  onToggleItem: ToggleItemFuncType;
}

const Item: FC<ItemProps> = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li className="flex items-center gap-2 sm:text-lg lg:text-xl">
      <input
        className="h-4 w-4 accent-[#e5771f]"
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span className={`${item.packed ? "line-through" : ""}`}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        className="translate-y-[2px] cursor-pointer p-2 text-base"
      >
        ❌
      </button>
    </li>
  );
};

export default Item;
