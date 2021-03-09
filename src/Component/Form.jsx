import React,{useState} from 'react'

const Form = () => {

    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [address,setAddress]=useState('')



 const makeUser=()=>{
     let data={name,age,address}
     console.log('click',data)

 }

    return (
        <>
            <h1>Make A New User</h1>
            <input type="text" name='username' value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/> <br/>
            <input type="text" name='age' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <br/> <br/>
            <input type="text" name='address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
            <br/> <br/>
            <button onClick={makeUser}>Create User</button>
        </>
    )
}

export default Form
