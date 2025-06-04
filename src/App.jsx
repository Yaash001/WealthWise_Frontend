import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Navig from './Components/Navig';
import Home from './Components/Home'; 

function App() {
  return (
    <div>
    <Router>
      <Navig />
      <Routes>
      {/*<Route path="/" element={<Navigate to="/login" />} />*/}
        <Route path="/Home" element={<Home />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
