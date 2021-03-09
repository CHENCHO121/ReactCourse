import React,{useEffect,useState} from 'react'

const Contact = () => {

    const [name,setName]=useState('Chencho')
    const [age,setAge]=useState(26)
  

  useEffect(()=>{

    console.log('click')

  },[age])

  const nameUpdate=()=>{
      setName('Chencho Gyeltshen')
  }

  const ageUpdate=()=>{
    setAge(30)
}


    return (
       <>
           <h1>Contact Us Component </h1>
           <h2>Hello, {name}</h2>
           <h2>Age, {age}</h2>

           <button onClick={nameUpdate}>Update Name</button>
           <button onClick={ageUpdate}>Update Age</button>
       </>
    )
}

export default Contact
