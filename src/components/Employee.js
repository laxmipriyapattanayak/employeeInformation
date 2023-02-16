import React from "react";
import "../index.css";

const Employee = (props) =>{
    const {id,name,country}=props;
    const handleClick=(id)=>{alert(`rename employee ${id}`)};
    return (
        <>
            <tr className="employee__data">
                <td>{id}</td>
                <td>{name}</td>
                <td>{country}</td>
                <td><button onClick={()=>handleClick(id)}>Rename</button></td>
            </tr>
        </>
    );
}

export default Employee;