import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from './Users'
import UserCreate from "./UserCreate"
import UserUpdate from "./UserUpdate"
// Import the Login component
//import Profile from "./profile";
//<Profile/>
import Register from './register';
import Login from "./login";
function App1() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<UserCreate />} />
        <Route path="/update/:id" element={<UserUpdate />} />  
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App1;