import React from "react";

const SearchBox = ({ handleSearch, searchQuery }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by first name..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
