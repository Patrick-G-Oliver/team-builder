import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form.js';
import Members from './Components/Members.js';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      // If not part of the functionality, is the 
            // the inclusion of id a formality? 
      // id: "", 
      name: "", 
      email: "",
      role: ""
    }
  ])
  // handleFormSubmission "spreads out" ... (i.e. creates a new object from) 
  // the teamMembers state data and adds a new teamMember with setTeamMembers
  const handleFormSubmission = (teamMember) => {
    setTeamMembers([...teamMembers, teamMember])
  }

  return (
    <div className="App">
      <h1>Team Builder Form</h1>
      <Form handleFormSubmission={handleFormSubmission} />
      <Members teamMembers={teamMembers} />
    </div>
  );
}

export default App;
