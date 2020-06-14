import React from 'react';
import styled from 'styled-components';

const StyledTeamMemberDiv = styled.div`
    border: 2px solid black;
`;

const Members = (props) => {
    return (
        <div>
            {/* state data (teamMembers) passed in from App.js via props */}
            {/* Via .map, for every teamMembers object a div containing an h2 and two ps is rendered. */}
            {props.teamMembers.map(teamMember => (
                <div>{/* Why is there a key={note.id} attribue added to this div tag?*/}
                    <h2>{teamMember.name}</h2>
                    <p>{teamMember.email}</p>
                    <p>{teamMember.role}</p>
                </div>      
            ))}
        </div>
    )
}

export default Members;