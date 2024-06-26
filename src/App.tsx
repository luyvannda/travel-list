import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Logo from "./components/Logo";
import { useState } from "react";
import { initialItemsType } from "./data/initialItems";

type itemsType = initialItemsType;

function App() {
  const [items, setItems] = useState<itemsType[]>([]);

  function handleAddItems(item: itemsType) {
    setItems((prevItems) => [...prevItems, item]);
    //item here is a parameter for the function and not the state items
  }

  function handleDeleteItem(id: number) {
    console.log(id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="grid min-h-screen w-full auto-rows-auto bg-[#76c7ad]">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
