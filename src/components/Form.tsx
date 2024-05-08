import { FC, ReactNode, useState } from "react";
import { initialItemsType } from "@/data/initialItems";

interface AddItemsFunction {
  (item: initialItemsType): void;
}
interface FormProps {
  onAddItems: AddItemsFunction;
}

const Form: FC<FormProps> = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  /* we used underscore '_' here with 'current' because we want typescript to ignore the underscore variable that we declared but not directly used.*/
  const options: ReactNode = Array.from({ length: 20 }, (_current, index) => (
    <option
      value={String(index + 1)}
      key={index + 1}
      className=" bg-[#5a3e2b] text-white"
    >
      {index + 1}
    </option>
  ));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:flex-center flex flex-col items-center justify-center gap-[1rem] bg-[#e5771f] p-2"
    >
      <h3 className="text-center text-lg font-semibold sm:text-2xl">
        What do you need for your 😍 trip?
      </h3>
      <div className="grid grid-cols-form grid-rows-2 gap-2 sm:grid-rows-1">
        <select
          className="cursor-pointer rounded-[10rem] bg-[#ffebb3] px-10 py-4 font-bold text-[#5a3e2b] lg:text-[1.4rem]"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        >
          {options}
        </select>

        <input
          className="w-[40vw] cursor-pointer rounded-[10rem] bg-[#ffebb3] px-4 py-4 font-bold text-[#5a3e2b] lg:text-[1.4rem]"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="col-span-2 col-start-1 cursor-pointer rounded-[10rem] bg-[#76c7ad] px-10 py-4 font-bold uppercase text-[#5a3e2b] sm:col-span-1 sm:col-start-3 sm:row-start-1 lg:text-[1.4rem]">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
