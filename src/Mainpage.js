import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Student from "./Student";
import Mentor from "./Mentor";
import "./Mainpage.css";
import Assignment from "./Assignment";

export default function Mainpage(){
    const navigate = useNavigate(); 
    return(
        <div className="main">
          <button className="student_button"  onClick={()=>navigate("/student")}>STUDENT DASHBOARD</button>
          <button className="mentor_button"  onClick={()=>navigate("/mentor")}>MENTOR DASHBOARD</button>
          <button className="assigns_button"  onClick={()=>navigate("/assign")}>MENTOR-STUDENT ASSIGNMENT</button>

  <Routes>
  <Route path="/student/*" element={<Student />} />
  <Route path="/mentor/*" element={<Mentor />} />
  <Route path="/assign/*" element={<Assignment />} />
</Routes> 
           </div>
    );
}