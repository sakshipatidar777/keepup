import React from 'react'
import { useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import Button from 'react-bootstrap/Button';
const Property=()=> {
  const [dataa, setDataaa]=useState([]);
  const[filterVal,setFilterVal]=useState('');
  const[searchApi,setSearchApi]=useState('');

  const apiGeta=()=>{
    fetch('http://upkeep.crmcity.org:8092/Property/')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setDataaa(json);
      setSearchApi(json);
    });
};
 const handleFilter=(e)=>{
      if(e.target.value===''){
        setDataaa(searchApi)
      }else{
       const filterResult= searchApi.filter(item =>item.propertyName.toLowerCase().includes(e.target.value.toLowerCase()))
       if (filterResult.length>0){
        setDataaa(filterResult)
       }else{
        setDataaa([{name:"No Data"}])
       }
  
      }setFilterVal(e.target.value)
 }
  return (
    <div>
      <h1>Property </h1>

      <input type='Search' placeholder='search' onInput={(e)=>handleFilter(e)} className='m-3  text-center rounded'/>
     
    
     <Button onClick={apiGeta} variant="info">ClickHere</Button>
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
        <td><img src={PData.image} className='img-fluid' alt="" /></td>
          </tr>
          ))}

   </tbody>
   </Table>
    </div>
  )
}

export default Property;
