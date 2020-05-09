import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form.js';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "", 
      email: "",
      role: ""
    }
  ])

  return (
    <div className="App">
      <h1>Test Text</h1>

      
    </div>
  );
}

export default App;
