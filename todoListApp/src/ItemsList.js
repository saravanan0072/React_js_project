
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import LineItems from "./LineItems";

const ItemsList = ({ items, handleKey ,handleDelete}) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <LineItems
            item={item}
            handleKey={handleKey}
            handleDelete={handleDelete}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default ItemsList