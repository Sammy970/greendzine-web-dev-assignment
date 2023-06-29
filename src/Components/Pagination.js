import React from "react";
import "./Pagination.css";

const Pagination = ({ setPageNumber, setPerPageNumber }) => {
  return (
    <div>
      <div className="page flex flex-row gap-12">
        <button onClick={() => setPageNumber("1")}>1</button>
        <button onClick={() => setPageNumber("2")}>2</button>
        <div className="flex flex-row gap-2 justify-content-center items-center">
          <label htmlFor="perPage">Items Per Page</label>
          <select
            name="perPage"
            id="perPage"
            onChange={(e) => {
              e.preventDefault();
              setPerPageNumber(e.target.value);
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
