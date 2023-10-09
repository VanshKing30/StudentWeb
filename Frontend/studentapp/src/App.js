import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentData from './pages/StudentData';
import React from 'react';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addstudent" element={<StudentData/>}/>
      </Routes>
    </div>
  );
}

export default App;
