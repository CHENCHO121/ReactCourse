import React,{useEffect, useState} from "react";
import { Button, Table } from "react-bootstrap";
const Users = () => {

  const [user,setUser]=useState([

  ])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{
      data.json().then(res=>{
        console.log(res)
        setUser(res)
      })
    })
  },[])
  
    

  return (
    <>
      <h1>Listing Here</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
        {
          user.map((item,i)=>
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.userId}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
          
          )
        }
          
        </tbody>
      </Table>
    </>
  );
};

export default Users;
