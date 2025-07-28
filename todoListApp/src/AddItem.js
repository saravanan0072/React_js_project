import React from "react";
import { FaCartPlus } from "react-icons/fa";

const AddItem = ({newItem , setNewItem,handleSubmit}) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        placeholder="Add Item"
        autoFocus
        autoComplete="off"
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        <FaCartPlus />
      </button>
    </form>
  );
}

export default AddItem