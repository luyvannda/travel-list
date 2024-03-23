import initialItems from "../data/initialItems";
import Item from "./Item";

export default function PackingList() {
  return (
    <div className="flex flex-col items-center justify-between gap-[3.2rem] bg-[#5a3e2b] px-0 py-16 text-[#ffebb3]">
      <ul className="grid w-[80%] grid-cols-auto-fit-250 content-start justify-center gap-[1.2rem] overflow-hidden">
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
