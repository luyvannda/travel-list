import { FC } from "react";
import { initialItemsType } from "../data/initialItems";

export interface DeleteItemFunction {
  (id: number): void;
}

interface ItemProps {
  item: initialItemsType;
  onDeleteItem: DeleteItemFunction;
}

const Item: FC<ItemProps> = ({ item, onDeleteItem }) => {
  return (
    <li className="flex items-center gap-[1.2rem]">
      <span className={`${item.packed ? "line-through" : ""}`}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        className="translate-y-[2px] cursor-pointer p-[0.8rem] text-[1.8rem]"
      >
        ❌
      </button>
    </li>
  );
};

export default Item;
