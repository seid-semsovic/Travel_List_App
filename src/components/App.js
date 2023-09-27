import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  const [sumItems, setSumItems] = useState(0);

  // uradi za domaci

  function summItems() {
    let suma = 0;
    items.map((item) => {
      suma += item.quantity;
    });
    setSumItems(suma);
    return suma;
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confrimed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confrimed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} items={items} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
        sumItems={sumItems}
      />
      <Stats items={items} />
    </div>
  );
}
