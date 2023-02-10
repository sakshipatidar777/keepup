import React, { useEffect } from 'react'
import { useState } from 'react';
import axois from 'axios';
import DataTable from 'react-data-table-component';
import { MdEditNote,MdDeleteSweep } from 'react-icons/md';
import { GrView } from 'react-icons/gr';

const Landloard=()=> {
  
  const [landloard,setLandloard]=useState([]);
  const [search,setSearch]=useState("");
  const [fileterData,setFilterData]=useState([]);
  const getLandloard =async()=>{
    try{
      const response =await axois.get('http://upkeep.crmcity.org:8093/adminpanel/landlord/')
      setLandloard(response.data);
      setFilterData(response.data);
    }catch(error){
      console.log(error);

    }
  };

  const columns=[
    // {
    //   name:"Landlord_ID",
    //   selector:(row)=>row.id,
    // },
    {
      name:"Landlord_Name",
      selector:(row)=> row.landlord_name,
    },
    {
      name:"Location",
      selector:(row)=> row.location,
    },
    {
      name:"Rate",
      selector:(row)=> row.rent,
    },
    // {
    //   name:"Create",
    //   selector:(row)=> row.type_of_repairs,
    // },
    {
      name:"Action",
      cell:row=><><button className='btn btn-primary me-2'onClick={()=> alert(row.name)}><MdEditNote/></button>
      <button className='btn btn-danger ms-2 me-2'onClick={()=> alert(row.id)}><MdDeleteSweep/></button>
      <button className='btn btn-success ms-2 me-5'onClick={()=> alert(row.id)}><GrView/></button></>
    }
  ]
useEffect(()=>{
  getLandloard();
},[]);
useEffect(()=>{
  const result= landloard.filter(Landloard =>{
    return Landloard.landlord_name.toLowerCase().match(search.toLocaleLowerCase());
  });
  setFilterData(result)
},[search]);
  return (
     
     <>

    <DataTable title ="Landloard" columns={columns} data={fileterData} pagination fixedHeader selectableRows highlightOnHover 
      subHeader subHeaderComponent={
        <input type='text' placeholder='search' className='w-25 form-control' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      }

    />
  
   </>
  
    
  )
}
  export default Landloard;

