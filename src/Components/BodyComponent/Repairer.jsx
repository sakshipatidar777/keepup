import React from 'react'
import { useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
const Repairer=()=> {
  const [data, setData]=useState([]);

  const apiGet=()=>{
    fetch('http://upkeep.crmcity.org:8090/AddRepair/')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setData(json);
    });
};
  return (
    <div>
      <h1>Repairer Component</h1>
     
     <button onClick={apiGet} className="bg-primary text-light">ClickHere</button>
 <Table striped bordered hover variant="dark">
   <thead>
     <tr>
       <th>id</th>
       <th>name</th>
       <th>email</th>
       <th>contact_no</th>
       <th>type_of_repairs</th>
     </tr>
   </thead>
   <tbody>
   {data.map((RepairerData)=>(
        <tr>
            <td>{RepairerData.id}</td>
            <td>{RepairerData.name}</td>
            <td>{RepairerData.email}</td>
            <td>{RepairerData.contact_no}</td>
            <td>{RepairerData.type_of_repairs}</td>
          </tr>
          ))}

   </tbody>
   </Table>
    </div>
  )
}

export default Repairer;
