import initialItems from "../data/initialItems";
import Item from "./Item";

export default function PackingList() {
  return (
    <ul className="list flex flex-col items-center justify-between gap-[3.2rem] bg-[#5a3e2b] px-0 py-16 text-[#ffebb3] ">
      {initialItems.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  );
}
