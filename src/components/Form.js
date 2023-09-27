import { useState, useRef, useEffect } from "react";

export default function Form({ onAddItems, items }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const previousValue = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    previousValue.current = description;
  }, [description]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return alert("Enter at least one item!");

    if (items.some((item) => item.description === description)) {
      alert("This item is already in the list.");
      return;
    } // onda ovde proveravam da li postoji item sa takvim nazivom

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={isDisabled}
        style={{ backgroundColor: isDisabled ? "grey" : "" }}
      />
      <button
        disabled={isDisabled}
        style={{ backgroundColor: isDisabled ? "grey" : "" }}
      >
        Add
      </button>
      <input
        type="checkbox"
        value={isDisabled}
        onChange={(e) => setIsDisabled(e.target.checked)}
      />
    </form>
  );
}
