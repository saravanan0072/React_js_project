import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef =useRef(null);
  // console.log(inputRef)
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        ref={inputRef}
        id="addItem"
        placeholder="Add Item"
        autoFocus
        autoComplete="off"
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item" onClick={() =>  inputRef.current.focus() }>
        <FaCartPlus />
      </button>
    </form>
  );
}

export default AddItem