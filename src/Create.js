import React from 'react'
import {useState,useRef} from "react"
import axios from "axios";

function Create() {

    const rRno = useRef();

    const [rno,setRno] = useState("");
    const [name,setName] = useState("");
    const [msg,setMsg] = useState("");

    const hRno = (event) => {setRno(event.target.value)}
    const hName = (event) => {setName(event.target.value)}

    const save = (event) => {
        event.preventDefault();
        let urladd = "http://localhost:9001/save";
        let data = {rno,name};
        axios.post(urladd,data)
        .then(res=>{
            if(res.data.insertedId)
            {
                setMsg("Record Created");
                setRno("");
                setName("");
                rRno.current.focus();
            }
            else{
                setMsg("Record Already Exists");
                setRno("");
                setName("");
                rRno.current.focus();
            }
        })
        .catch(err=>{
            if(err.code=="ERR_NETWORK")
            {
                setMsg("Server Issue");
                setRno("");
                setName("");
                rRno.current.focus();
            }
        })
    }

  return (
    <div>
        <center>
            <h1>Student App</h1>
            <form onSubmit={save}>
                <input type={"number"} placeholder="Enter Your Roll No. Here" onChange={hRno} value={rno}
                ref={rRno}/>
                <br/><br/>
                <input type={"text"} placeholder="Enter Your Name Here" onChange={hName} value={name}/>
                <br/><br/>
                <input type={"submit"}/>
            </form>
            <h2>{msg}</h2>
        </center>
    </div>
  )
}

export default Create