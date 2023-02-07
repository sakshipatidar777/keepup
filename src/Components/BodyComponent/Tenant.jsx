import React from "react";
import Table from 'react-bootstrap/Table';
import Tenant from './TenantData.json';


export default function Link() {
  return (
    <section>
          <div>
      <h1>Tenant Component</h1>
    </div>
      <Table striped bordered hover variant="dark">
        <thead>
        <tr>
          <th>Tenant_ID</th>
          <th>Tenant_Name</th>
          <th>Location</th>
          <th>Moved_In</th>
          <th>Moved_Out</th>
          <th>LAndloard_ID</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
            {Tenant.TenantData.map((TenantData) => {
              return <tr>
                <td>{TenantData.Tenant_ID}</td>
                <td>{TenantData.Tenant_Name}</td>
                <td>{TenantData.Location}</td>
                <td>{TenantData.Moved_In}</td>
                <td>{TenantData.Moved_Out}</td>
                <td>{TenantData.Landlord_ID}</td>
                <td>{TenantData.Action}</td>
              </tr>

})}

        </tbody>
      </Table>
    </section>
  );
}
