import Loading from "./Loading";
import { useEffect, useState } from "react";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <li>
          {/* <input type="checkbox" name="favorite" /> */}
          {/* <label>favorite</label>
          <br></br> */}
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => onToggleItem(item.id)}
          />

          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity} {item.description}
          </span>
          <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
      )}
    </>
  );
}
