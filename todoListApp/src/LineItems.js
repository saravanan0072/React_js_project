
import React from "react";

import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({ item, handleKey, handleDelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleKey(item.id)}
        checked={item.checked}
      />
      <label
        style={{
          textDecoration: item.checked ? "line-through" : "none",
        }}
        onDoubleClick={() => handleKey(item.id)}
      >
        {item.item}
      </label>

      <FaTrashAlt
        role="button"
              tabIndex={0}
              aria-label={`Delete ${item.item}`}
              onClick={() => handleDelete(item.id)
            
        }
      />
    </li>
  );
};

export default LineItems