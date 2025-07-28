import React from "react"
import { MdClear } from "react-icons/md";
const SearchItem = ({search,setSearch,handleSearchClear}) => {
  return (
    <form className="searchForm" onSubmit={(e) => handleSearchClear(e)}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search Items"
        autoComplete="off"
        autoFocus
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-btn" role="clear_button"  aria-label="clear the search content">
          <MdClear />
      </button>
    </form>
  );
}

export default SearchItem