import React from 'react'
import {useState,useEffect} from "react"
import axios from "axios";


function Home() {

  const [info,setInfo] = useState([]);

  useEffect( () => {
    let urladd = "http://localhost:9001/read";
    axios.get(urladd)
    .then(res => setInfo(res.data))
    .catch(err => console.log(err))
  },[]);

  const delstu = (rno) => {
    let urladd = "http://localhost:9001/remove";
    axios.delete(urladd, {data:{rno}})
    .then(res=>{
      alert("Record Deleted");
      window.location.reload();
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
        <center>
            <h1>Home Page</h1>
            <table border = "4" style={{width:"50%"}}>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Delete</th>
              </tr>
              {
                info.map( (e) => (
                  <tr style={{"text-align":"center"}}>
                    <td>{e._id}</td>
                    <td>{e.name}</td>
                    <td><button onClick={ () => {
                        if(window.confirm("Are You Sure?"))
                        delstu(e._id)
                    }}>Delete</button></td>
                  </tr>
                ))
              }
            </table>
        </center>
    </div>
  )
}

export default Home