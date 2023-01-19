import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { auth } from "./Firebase";
import Dashboard from "./pages/Dashboard";
import Quiz from './pages/Quiz'
import Result from './pages/Result'

const App = () => {
  
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    );

}

export default App