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

  const options: ReactNode = Array.from({ length: 20 }, (current, index) => (
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
      className="sm:flex-center flex flex-col items-center justify-center gap-[1rem] bg-[#e5771f]"
    >
      <h3 className="mr-[1.6rem] text-[2.8rem]">
        What do you need for your 😍 trip?
      </h3>
      <div className="space-x-4">
        <select
          className="cursor-pointer rounded-[10rem] bg-[#ffebb3] px-[3.2rem] py-[1.2rem] text-[1.8rem] font-bold text-[#5a3e2b]"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        >
          {options}
        </select>

        <input
          className="cursor-pointer rounded-[10rem] bg-[#ffebb3] px-[3.2rem] py-[1.2rem] text-[1.8rem] font-bold text-[#5a3e2b]"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="cursor-pointer rounded-[10rem] bg-[#76c7ad] px-[3.2rem] py-[1.2rem] text-[1.8rem] font-bold uppercase text-[#5a3e2b]">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
