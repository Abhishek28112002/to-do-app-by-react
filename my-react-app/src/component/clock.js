import React, { useEffect, useState } from 'react';

function Clock() {
    const [time,settime]=useState(0);
    const [x,setx]=useState(0);
    useEffect(()=>{
        const timer=setInterval(() => {
           
        }, 1000);
        return()=>clearInterval(timer);
    })
  return <div>
      <h1>ALARM</h1>
      <input type='datetime-local' onChange={e=>settime(e.target.value)}></input>
      <h1>{time.date}</h1>
  </div>;
}

export default Clock;


  
    
  
    
  
   