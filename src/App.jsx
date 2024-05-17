 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Thank from './compoents/Thank';
import HBD from './compoents/HBD';
import { useState } from 'react';

function App() {
   
    const [userData, setUserData] = useState("");
  
    const handleDataChange = (data) => {
      setUserData(data);
    };
  
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HBD onDataChange={handleDataChange} />} />
          <Route path="/thank" element={<Thank userData={userData} />} />
        </Routes>
      </Router>
    );
  };
  
   

export default App;
