import React from "react";
import {useState} from "react";
import { useEffect } from "react";
import { API } from "./global";
import { Button } from "@mui/material";
import "./Viewstudent.css";

export default function Viewstudent(){
    const[students,setStudents]=useState([]);
    const getStudents= ()=>{
     fetch(`${API}/students`,{
       method:"GET",
     })
     .then((data)=>data.json())
     .then((s)=>setStudents (s));
   };
    useEffect(()=> getStudents(),[]);
 
    const deletestudent=(id)=>{
   fetch(`${API}/students/${id}`,{
       method:'DELETE',
   }).then((data)=>data.json())
   .then(()=>getStudents());
    };
    return (
     <div className="student-list-container">{students.map((s)=>(<Studentdata student ={s} deleteButton={<Button variant="contained" color="error" onClick={()=>deletestudent(s.id)}><i className="material-icons">delete</i></Button>}/>))}</div>
  );
}

function Studentdata({student,deleteButton}){
  
return(
  <div className="student-container">
    <img src={student.img} alt={student.name} className="student-poster"></img>
    <div className="student-specs"><h2 className="student-name">STUDENT NAME- {student.name}</h2>
    <p  className="student-course">COURSE- {student.course}</p></div>
    <p className="student-batch">BATCH ID- {student.batch}</p>
    <p className="student-join">JOINING DATE- {student.join}</p>
    <p className="student-duration">COURSE DURATION(IN MONTHS) {student.duration}</p>
    {deleteButton}  
  </div>
);
}