import { ReactNode } from "react";

export default function Form() {
  const options: ReactNode = Array.from({ length: 20 }, (current, index) => (
    <option
      value={index + 1}
      key={index + 1}
      className=" bg-[#5a3e2b] text-white"
    >
      {index + 1}
    </option>
  ));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-center gap-[0.8rem] bg-[#e5771f] px-0 py-[2.8rem]"
    >
      <h3 className="mr-[1.6rem] text-[2.4rem]">
        What do you need for your 😍 trip?
      </h3>
      <select className="cursor-pointer rounded-[10rem] bg-[#ffebb3] px-[3.2rem] py-[1.2rem] text-[1.8rem] font-bold text-[#5a3e2b]">
        {options}
      </select>
      <input
        className="cursor-pointer rounded-[10rem] bg-[#ffebb3] px-[3.2rem] py-[1.2rem] text-[1.8rem] font-bold text-[#5a3e2b]"
        type="text"
        placeholder="Item..."
      />
      <button className="cursor-pointer rounded-[10rem] bg-[#76c7ad] px-[3.2rem] py-[1.2rem] text-[1.8rem] font-bold uppercase text-[#5a3e2b]">
        Add
      </button>
    </form>
  );
}
