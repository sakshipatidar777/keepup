import React from 'react'
import { useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
const Property=()=> {
  const [dataa, setDataaa]=useState([]);

  const apiGeta=()=>{
    fetch('http://upkeep.crmcity.org:8090/Property/')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setDataaa(json);
    });
};
  return (
    <div>
      <h1>Property </h1>
     
     <button onClick={apiGeta} className="bg-primary text-light">ClickHere</button>
 <Table striped bordered hover variant="dark">
   <thead>
     <tr>
       <th>id</th>
        <th>propertyName</th>
        <th>totalRoom</th>
        <th>propertyCapacity</th>
        <th>address1</th>
        <th>address2</th>
        <th>city</th>
        <th>postCode</th>
        <th>description</th>
        <th>state</th>
        <th>image</th>
     </tr>
   </thead>
   <tbody>
   {dataa.map((PData)=>(
        <tr>
        <td>{PData.id}</td>
        <td>{PData.propertyName}</td>
        <td>{PData.totalRoom}</td>
        <td>{PData.propertyCapacity}</td>
        <td>{PData.address1}</td>
        <td>{PData.address2}</td>
        <td>{PData.city}</td>
        <td>{PData.postCode}</td>
        <td>{PData.description}</td>
        <td>{PData.state}</td>
        <td>{PData.image}</td>
          </tr>
          ))}

   </tbody>
   </Table>
    </div>
  )
}

export default Property;
