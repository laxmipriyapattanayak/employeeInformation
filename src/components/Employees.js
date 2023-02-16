import React from "react";
import Employee from "./Employee";
import "../index.css";

const Employees = () =>{
    const employees=[{id:1,name:"Laxmipriya",country:"Denmark"},
                     {id:2,name:"Smitika",country:"Sweden"}, 
                     {id:3,name:"Samit",country:"Germany"}];
    let employeeDetails=employees.map((data)=>(
        <Employee key={data.id} {...data} />
    ));
    return (
        <>
            {employeeDetails} 
        </>
    );
}

export default Employees;