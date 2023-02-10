import React, { useEffect } from 'react'
import { useState } from 'react';
import axois from 'axios';
import DataTable from 'react-data-table-component';
import { MdEditNote,MdDeleteSweep } from 'react-icons/md';
import { GrView } from 'react-icons/gr';

const Property=()=> {
  
  const [repairs,setRepairs]=useState([]);
  const [search,setSearch]=useState("");
  const [fileterData,setFilterData]=useState([]);
  const getRepairs =async()=>{
    try{
      const response =await axois.get('http://upkeep.crmcity.org:8092/Property/')
      setRepairs(response.data);
      setFilterData(response.data);
    }catch(error){
      console.log(error);

    }
  };

  const columns=[
    {
      name:"Property_ID",
      selector:(row)=>row.id,
    
    },
    {
      name:" Property_Name",
      selector:(row)=> row.propertyName,
    
    },
    {
      name:"Property_Capacity",
      selector:(row)=> row.propertyCapacity,
    },
    {
      name:"Address1",
      selector:(row)=> row.address1,
    },
    {
      name:"Address2",
      selector:(row)=> row.address2,
    },
    {
      name:"City",
      selector:(row)=> row.city,
    },
    {
      name:"Post_Code",
      selector:(row)=> row.postCode,
    },
    {
      name:"Description",
      selector:(row)=> row.description,
    },
    {
      name:"State",
      selector:(row)=> row.state,
    },
    {
      name:"Property_image",
      selector:(row)=> <img width={50} height={50} src={row.images}/>
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
    return Repairer.propertyName.toLowerCase().match(search.toLocaleLowerCase());
    
    
  });
  setFilterData(result)
},[search]);
  return (
     
     <>

    <DataTable title ="Property" columns={columns} data={fileterData} pagination fixedHeader selectableRows highlightOnHover 
      subHeader subHeaderComponent={
        <input type='text' placeholder='search' className='w-25 form-control' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      }
      

    />
  
   </>
  
    
  )
}
  export default Property;

