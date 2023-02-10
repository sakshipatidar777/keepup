import React from "react";
import Table from 'react-bootstrap/Table';
import LandlordData from './Landlord_Data.json';


export default function Landlord() {
  

  return (
    <section>
          <div>
      <h1>Landlord Component</h1>
      <input type='Search' placeholder='search' className='m-2 text-center rounded'/>
    </div>
      <Table striped bordered hover variant="dark"> 
        <thead>
        <tr>
          <th>Landlord_ID</th>
          <th>Landlord_Name</th>
          <th>Location</th>
          <th>Rate</th>
          <th>Create</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
            {LandlordData.LandlordData.map((LandlordData) => {
              return <tr>
                <td>{LandlordData.Landlord_ID}</td>
                <td>{LandlordData.Landlord_Name}</td>
                <td>{LandlordData.Location}</td>
                <td>{LandlordData.Rate}</td>
                <td>{LandlordData.Create}</td>
                <td>{LandlordData.Action}</td>
              </tr>

})}

        </tbody>
      </Table>
    </section>
  );
}
