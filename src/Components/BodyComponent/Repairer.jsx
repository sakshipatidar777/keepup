import React, { useEffect } from 'react'
import { useState } from 'react';
import axois from 'axios';
import DataTable from 'react-data-table-component';
// import Table from 'react-bootstrap/esm/Table';
// import Button from 'react-bootstrap/Button';
const Repairer=()=> {
  // const [data, setData]=useState([]);

  // const apiGet=()=>{
  //   fetch('http://upkeep.crmcity.org:8090/AddRepair/')
  //   .then((response) => response.json())
  //   .then((json) => {
  //     console.log(json);
  //     setData(json);
  //   });
  const [repairs,setRepairs]=useState([]);
  const getRepairs =async()=>{
    try{
      const response =await axois.get('http://upkeep.crmcity.org:8092/AddRepair/')
      setRepairs(response.data);
    }catch(error){
      console.log(error);

    }
  };

  const columns=[
    {
      ID:"id",
      selector:(row)=> row.ID,
    },
    {
      name:"name",
      selector:(row)=> row.name,
    },
    {
      name:"contact_no",
      selector:(row)=> row.contact_no,
    },
    {
      name:"type_of_repairs",
      selector:(row)=> row.type_of_repairs,
    },
  ]
useEffect(()=>{
  getRepairs();
},[]);
  return (
     
     <>

    <DataTable title ="RepaireList" columns={columns} data={repairs} pagination/>
  
   </>
  
    
  )
}
  export default Repairer;

