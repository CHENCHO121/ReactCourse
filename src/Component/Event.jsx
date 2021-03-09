import React,{useEffect, useState} from "react";

const Event = () => {


    const [val,setVal]=useState('Chencho')

  const Event = (e) => {
    console.log("click me",e.target.value);
    setVal(e.target.value)
    
  };

  return (
    <>
      <h1>Event Component</h1>
      <input type="text" value={val} onChange={Event}/>
      <button onClick={()=>alert(val)}>OnClick</button>
    </>
  );
};

export default Event;
