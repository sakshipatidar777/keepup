import React from "react";
import Table from 'react-bootstrap/Table';
import Tenant from './TenantData.json';
import { MdDelete,MdEditNote } from 'react-icons/md';



export default function Link() {
  // const PopupContext = createContext()
  // const [value, setValue] = useState()
  //  const triggerPopup = text => setValue(text)
  //  const clearPopup = () => setValue()
  return (
    <section>
          <div>
      <h1>My Records</h1>
    </div>
      <Table striped bordered hover variant="dark">
        <thead>
        <tr>
          <th>History_ID</th>
          <th>Rome_rented_id</th>
          <th>Paid_rent</th>
          <th>Started_renting</th>
          <th>Action</th>
         
        </tr>
        </thead>
        <tbody>
            {Tenant.TenantData.map((TenantData) => {
              return <tr>
                <td>{TenantData.History_ID}</td>
                <td>{TenantData.Rome_rented_id}</td>
                <td>{TenantData.Paid_rent}</td>
                <td>{TenantData.Started_renting}</td>
                <td><button className="btn text-danger btn-act" data-toggle="modal"><MdDelete/> </button>
                <button className="btn text-primary btn-act" data-toggle="modal"> <MdEditNote/></button>
              </td>
              </tr>

})}

        </tbody>
      </Table>
    </section>
  );
}
