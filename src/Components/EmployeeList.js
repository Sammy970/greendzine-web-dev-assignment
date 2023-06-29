import React from "react";
import "./EmployeeList.css";

const EmployeeList = ({ employee }) => {
  return (
    <div className="container">
      <ul>
        <li key={employee.id}>
          <div className="employee_id">{employee.id}</div>
          <div className="image">
            <img src={employee.avatar} alt={employee.first_name} />
          </div>
          <div className="employee_name">{employee.first_name}</div>
        </li>
      </ul>
    </div>
  );
};

export default EmployeeList;
