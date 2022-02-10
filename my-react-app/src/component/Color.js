import React, { useState } from 'react';

function Color() {
    const [birthday,setbirthdaydate]=useState([])
    const[date,setdate]=useState();
    const [name,setname]=useState();
    return(
        <div>
            <h3>set your birthdate below</h3>
            <input type='date'value={date}  onChange={(e)=>setdate(e.target.value)}></input>
            Name:
            <input value={name} onChange={(e)=>setname(e.target.value)}></input>
            <button onClick={()=>{
                setbirthdaydate([...birthday,{
                    id:birthday.length,
                    value:`${date}`,
                    name:`${name}`
                }])
                setdate('')
            }}>ADD birthdate TO CALANDER</button>
            <ul>
                {birthday.map( (it)=>(
                    <li key={it.id}> {it.name} birthday is on {it.value}</li>)
                )
                }
            </ul>
        </div>
    )
}

export default Color;
