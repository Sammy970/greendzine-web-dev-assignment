import React from "react";
import "./SearchBox.css";

const SearchBox = ({ handleSearch, searchQuery }) => {
  return (
    <div>
      <input
        className="searchBox"
        type="text"
        placeholder="Search by first name..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
