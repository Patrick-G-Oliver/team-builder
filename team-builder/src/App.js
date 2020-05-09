import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form.js';
import Members from './Components/Members.js';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "", 
      email: "",
      role: ""
    }
  ])

  const handleFormSubmission = () => {

  }

  return (
    <div className="App">
      <h1>Test Text</h1>
      <Form onSubmit={handleFormSubmission} />
      <Members teamMembers={teamMembers} />
    </div>
  );
}

export default App;
