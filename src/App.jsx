import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Entertainment from "./pages/entertainment/Entertainment";
import Dashboard from "./pages/dashboard/Dashboard";
import Page3 from "./pages/page3/Page3";
import Page4 from "./pages/page4/Page4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/page3' element={<Page3 />} />
        <Route path='/page4' element={<Page4 />} />
        <Route path='/entertainment' element={<Entertainment />} />
      </Routes>
    </BrowserRouter>
  )
};
  
export default App;
