import React from "react";

const EmployeeList = ({ employees }) => {
  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>
          <div>ID: {employee.id}</div>
          <img src={employee.avatar} alt={employee.first_name} />
          <div>{employee.first_name}</div>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;
