import React, { useState } from 'react';
import './map.css'
function Map() {
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [adress,setadress]=useState();
    const [contactno,setcontactno]=useState();

  return <div className='board'>
      <h1>Information about users </h1>
      <lable>name:</lable>
      <input type='text' onChange={(e)=>setname(e.target.value)}></input>
      <br></br>
      <lable>contact No:</lable>
      <input type='number' onChange={(e)=>setcontactno(e.target.value)}></input>
      <br></br>
      <lable>email:</lable>
      <input type='email' onChange={(e)=>setemail(e.target.value)}></input>
      <br></br>
      <lable>adress:</lable>
      <textarea onChange={(e)=>setadress(e.target.value)}></textarea>
      <br></br>
      <button >submit</button>
  </div>;
}

export default Map;
