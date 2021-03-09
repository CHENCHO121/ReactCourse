import React,{useState} from 'react'

const Condition = () => {
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
        <div>
             <h1>Listing Component</h1>

             {
                 user.length===6 ? <div>Yes This right</div> : <div>No Wrong</div>
             }
          
        </div>
    )
}

export default Condition
