import React, { useEffect } from 'react';
import { useState,useSortBy } from 'react';
import './calculator.css';

function App() {
  const listgeht=()=>{
    let listh=localStorage.getItem('lists');
    if(listh)
    {
      return JSON.parse(localStorage.getItem('lists'));
    }
    else
    return [];
  }
const [item,setitem]= useState(listgeht());
const [text,settext]=useState();
const [sorttext,setsortext]=useState("asc");
const sorting=(col)=>{
if(sorttext=="asc")
{
const sorted=[...item].sort((a,b)=>
a[col].toLowerCase()>b[col].toLowerCase()?1:-1);
setitem(sorted);
setsortext("dsc")
}
else{
  const sorted=[...item].sort((a,b)=>
a[col].toLowerCase()<b[col].toLowerCase()?1:-1);
setitem(sorted);
setsortext("asc")
}
}

useEffect(()=>{
localStorage.setItem('lists',JSON.stringify(item));
},[item])
  return (

<div className='body'>
<h1>TO-DO LIST</h1>
  <input type="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder="write here"></input>
  <button onClick={()=>{setitem([...item,{
    id:item.length,
    value:`${text}`,
  }])
  item.sort();
  settext('')
  }}>ADD task</button>
<table>
  <tr>
  <th onClick={()=>sorting("value")}>Description</th>
    <th className='delt'>delete</th>
  </tr>
  {item.map(it=>(
    <tr key={it.id}  ><td>{it.value}</td>      
     <td><button className='delete' type='button' onClick={()=>{
      setitem(item.filter(p=>{
         return(p.id!=it.id)
       }))
     }}> Delete </button></td> </tr>
    
  ))
}
</table>
  </div>
  );
}

export default App;
