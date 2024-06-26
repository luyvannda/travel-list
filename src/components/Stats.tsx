import { FC } from "react";
import { initialItemsType } from "@/data/initialItems";

interface StatsProp {
  items: initialItemsType[];
}

const Stats: FC<StatsProp> = ({ items }) => {
  if (!items.length) {
    return (
      <footer className="flex h-8 items-center justify-center bg-[#76c7ad] px-4 py-8 text-center font-bold sm:text-lg">
        <em> Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = (numPacked / numItems) * 100;
  // we can also use Math.round for percentagePacked if we don't want to deal with float number.

  const fixedFloatNum =
    percentagePacked % 5 === 0 ? percentagePacked : percentagePacked.toFixed(2);

  return (
    <footer className="flex items-center justify-center bg-[#76c7ad] px-4 py-[3.2rem] text-center font-bold sm:text-lg">
      <em>
        {percentagePacked === 100
          ? "You got everything! Ready to go ✈️"
          : `
          🛄 You have ${numItems} items on your list, and you already packed ${numPacked} (${fixedFloatNum}%)`}
      </em>
    </footer>
  );
};

export default Stats;
