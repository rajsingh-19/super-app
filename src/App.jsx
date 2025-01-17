import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DashboardPage from "./routes/dashboard";

function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    )
  };
  
  export default App;