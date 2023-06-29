import React, { useState, useEffect } from "react";
import EmployeeList from "./Components/EmployeeList";
import SearchBox from "./Components/SearchBox";
import Pagination from "./Components/Pagination";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState("1");
  const [perPageNumber, setPerPageNumber] = useState("5");

  useEffect(() => {
    fetch(
      `https://reqres.in/api/users?page=${pageNumber}&per_page=${perPageNumber}`
    )
      .then((response) => response.json())
      .then((data) => setEmployees(data.data))
      .catch((error) => console.log(error));
  }, [pageNumber, perPageNumber]);


  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center bg-blue-100 min-h-screen">
      <div className="py-5">
        <SearchBox handleSearch={handleSearch} searchQuery={searchQuery} />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 lg:md:gap-14 gap-10">
        {filteredEmployees.map((employee) => (
          <div key={employee.id}>
            <EmployeeList employee={employee} />
          </div>
        ))}
      </div>
      {console.log(pageNumber)}
      <div className="py-16">
        <Pagination
          setPageNumber={setPageNumber}
          setPerPageNumber={setPerPageNumber}
        />
      </div>
    </div>
  );
};

export default App;
