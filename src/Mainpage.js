import React from "react";
import { Routes, Route } from "react-router-dom";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Student from "./Student";
import Mentor from "./Mentor";
import "./Mainpage.css";

export default function Mainpage(){
    const navigate = useNavigate(); 
    return(
        <div className="main">
          <Button color="inherit" onClick={()=>navigate("/student")}>STUDENT DASHBOARD</Button>
          <Button color="inherit" onClick={()=>navigate("/mentor")}>MENTOR DASHBOARD</Button>

  <Routes>
  <Route path="/student/*" element={<Student />} />
  <Route path="/mentor/*" element={<Mentor />} />
</Routes> 
           </div>
    );
}