import React, { useEffect, useState } from 'react';

function Clock() {
    const [time,settime]=useState(0);
    const [x,setx]=useState(0);
    useEffect(()=>{
        const timer=setInterval(() => {
            if(`${x}`==1)
            settime(time+1);
        }, 1000);
        return()=>clearInterval(timer);
    })
  return <div>
      <h1>STOPWATCH</h1>
      <button onClick={()=>setx(1)}>start</button>
      <button onClick={()=>setx(0)}>Stop</button>
      <button onClick={()=>settime(0)}>Reset</button>
      <h1>{parseInt(`${time}`/3600)}:{parseInt(`${time}`/60)}:{(`${time}`%60)}</h1>
  </div>;
}

export default Clock;


  
    
  
    
  
   