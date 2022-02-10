import React, { useEffect, useState,useMemo } from 'react';
import './s-4.mp3'
function Alarm() {
    const [date,setdate]=useState(null);
    const [alarm,setalarm]=useState(null);
    const [text,settext]=useState('');
    
   
   
  return <div>
      <h3>ALARM APP :)</h3>
     <input type='datetime-local' onChange={(e)=>setdate(new Date(e.target.value))}></input>
     <button type='button' onClick={()=>
    { setalarm((prevState)=>date-new Date())
        settext("");
        console.log(alarm)
        setTimeout(() => {
           settext("THIS IS ALARM TIME!")
        }, alarm);
    }}>set alarm</button>
    <h1>{text}</h1>
      </div>;
}

export default Alarm;
