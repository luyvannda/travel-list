export default function Form() {
  return (
    <form className="flex-center gap-[0.8rem] bg-[#e5771f] px-0 py-[2.8rem]">
      <h3 className="mr-[1.6rem] text-[2.4rem]">
        What do you need for your 😍 trip?
      </h3>
      <select className="cursor-pointer rounded-[10rem] bg-[#ffebb3] px-[3.2rem] py-[1.2rem] text-[1.8rem] font-bold text-[#5a3e2b]">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
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
