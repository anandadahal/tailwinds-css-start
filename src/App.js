import "./App.css";
import { useState } from "react";
import Child from "./Component/child"
import Register from  "../src/auth/Register"
import Login from "./auth/Login"
import { Router, Route, Routes, BrowserRouter, } from "react-router-dom";
function App() {
 return(

  <BrowserRouter>
<Routes>

<Route path="/" element={<Login/>}/>

<Route path="/register" element={<Register/>}/>

<Route path="/dashboard" element={<Child />} />
</Routes>

  </BrowserRouter>

 
 )
}

export default App;
