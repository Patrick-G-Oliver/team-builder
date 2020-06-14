import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form.js';
import Members from './Components/Members.js';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  border: 2px solid red;
`;

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      // If not part of the functionality, is  
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
  };

  return (
    <div className="App">
      <StyledHeader>Team Builder Form</StyledHeader>
      <Form handleFormSubmission={handleFormSubmission} />
      <Members teamMembers={teamMembers} />
    </div>
  );
}

export default App;
