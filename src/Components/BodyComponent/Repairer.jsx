import React, { useEffect } from 'react'
import { useState } from 'react';
import axois from 'axios';
import DataTable from 'react-data-table-component';
import { MdEditNote,MdDeleteSweep } from 'react-icons/md';
import { GrView } from 'react-icons/gr';

const Repairer=()=> {
  
  const [repairs,setRepairs]=useState([]);
  const [search,setSearch]=useState("");
  const [fileterData,setFilterData]=useState([]);
  const getRepairs =async()=>{
    try{
      const response =await axois.get('http://upkeep.crmcity.org:8092/AddRepair/')
      setRepairs(response.data);
      setFilterData(response.data);
    }catch(error){
      console.log(error);

    }
  };

  const columns=[
    {
      name:"Repairer_ID",
      selector:(row)=>row.id,
    },
    {
      name:" Name",
      selector:(row)=> row.name,
    },
    {
      name:"Email",
      selector:(row)=> row.email,
    },
    {
      name:"Contact_no",
      selector:(row)=> row.contact_no,
    },
    {
      name:"Type_Of_Repairs",
      selector:(row)=> row.type_of_repairs,
    },
    {
      name:"Action",
      cell:row=><><button className='btn btn-primary me-2'onClick={()=> alert(row.name)}><MdEditNote/></button>
      <button className='btn btn-danger ms-2 me-2'onClick={()=> alert(row.id)}><MdDeleteSweep/></button>
      <button className='btn btn-success ms-2 me-5'onClick={()=> alert(row.id)}><GrView/></button></>
    }
  ]
useEffect(()=>{
  getRepairs();
},[]);
useEffect(()=>{
  const result= repairs.filter(Repairer =>{
    return Repairer.name.toLowerCase().match(search.toLocaleLowerCase());
  });
  setFilterData(result)
},[search]);
  return (
     
     <>

    <DataTable title ="RepaireList" columns={columns} data={fileterData} pagination fixedHeader selectableRows highlightOnHover 
      subHeader subHeaderComponent={
        <input type='text' placeholder='search' className='w-25 form-control' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      }

    />
  
   </>
  
    
  )
}
  export default Repairer;

