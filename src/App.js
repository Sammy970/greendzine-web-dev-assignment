import React, { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => setEmployees(data.data))
      .catch((error) => console.log(error));
  }, []);

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
    </div>
  );
};

export default App;
