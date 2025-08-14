import React from "react"
import { MdClear } from "react-icons/md";
import { useRef } from "react";

const SearchItem = ({ search, setSearch, handleSearchClear }) => {
  const valueRef= useRef(null)
  return (
    <form className="searchForm" onSubmit={(e) => handleSearchClear(e)}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        ref={valueRef}
        role="searchbox"
        placeholder="Search Items"
        autoComplete="off"
        autoFocus
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
        <MdClear
          className="search-icon" onClick={() => valueRef.current.focus()}/>
      
    </form>
  );
}

export default SearchItem