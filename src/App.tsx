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
    //items here is not the items state
  }
  return (
    <div className="grid-rows-auto-rows grid min-h-screen w-full">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
