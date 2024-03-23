import { initialItemsType } from "../data/initialItems";

interface ItemProps {
  item: initialItemsType;
}

export default function Item({ item }: ItemProps) {
  return (
    <li className="flex items-center gap-[1.2rem]">
      <span className={`${item.packed ? "line-through" : ""}`}>
        {item.quantity} {item.description}
      </span>
      <button className="translate-y-[2px] cursor-pointer p-[0.8rem] text-[1.8rem]">
        ❌
      </button>
    </li>
  );
}
