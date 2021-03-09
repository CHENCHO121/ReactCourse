import React,{useState} from 'react'

const Listing = () => {

    const [user,setUser]=useState([
        {
            name:'chencho',
            age:26
        },
        {
            name:'geyltshen',
            age:27
        },
        {
            name:'sonam',
            age:24
        },
        {
            name:'binu',
            age:25
        },
        {
            name:'yona',
            age:20
        }
    ])


    return (
       <>
           <h1>Listing Component</h1>
           {
               user.map((item,i)=>
               <div key={i}>{item.name} | {item.age}</div>
               )
           }

       </>
    )
}

export default Listing
