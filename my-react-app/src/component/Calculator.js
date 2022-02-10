import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
    let [ans,setans]=useState('');
  return <div >
      <input value={ans} ></input>
      <button onClick={()=>setans(ans+='1')}>1</button>
      <button onClick={()=>setans(ans+='2')}>2</button>
      <button onClick={()=>setans(ans+='3')}>3</button>
      <button onClick={()=>setans(ans+='4')}>4</button>
      <button onClick={()=>setans(ans+='5')}>5</button>
      <button onClick={()=>setans(ans+='6')}>6</button>
      <button onClick={()=>setans(ans+='7')}>7</button>
      <button onClick={()=>setans(ans+='8')}>8</button>
      <button onClick={()=>setans(ans+='9')}>9</button>
      <button onClick={()=>setans(ans+='0')}>0</button>
      <button onClick={()=>setans(ans+='+')}>+</button>
      <button onClick={()=>setans(ans+='-')}>-</button>
      <button onClick={()=>setans(ans+='*')}>*</button>
      <button onClick={()=>setans(ans+='/')}>/</button>
      <button onClick={()=>setans(ans+='00')}>00</button>
      <button onClick={()=>setans(ans=eval(ans))}>=</button>
      <button onClick={()=>setans(ans='')}>AC</button>
      <button onClick={()=>setans(ans.slice(0,-1))}>DC</button>
      <button onClick={()=>setans(ans+='/100 *')}>%</button>
  </div>;
}

export default Calculator;
