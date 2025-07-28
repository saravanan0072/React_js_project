import React from "react";

import { FaTrashAlt } from "react-icons/fa";
import ItemsList from "./ItemsList";





//------------------------------------[list and Keys ]--------------------------------------||
const Content = ({ items, handleKey, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handleKey={handleKey}
          handleDelete={handleDelete}
          />
      ) : (
        <p style={{ color: "red", marginTop: "2rem" }}>
          your todo list is empty!
        </p>
      )}
    </main>
  );
};


  




export default Content;


