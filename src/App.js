import React, { useState, useEffect } from "react";
import EmployeeList from "./Components/EmployeeList";
import SearchBox from "./Components/SearchBox";

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
    <div>
      <SearchBox handleSearch={handleSearch} searchQuery={searchQuery} />
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
};

export default App;
