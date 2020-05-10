import React, { useState } from "react";

const Form = (props) => {
    const [memberFormData, setMemberData] = useState([
        {
            // If not part of the functionality, is the 
            // the inclusion of id a formality? (see lines 8 & 17)
            // id: Date.now()
            name: "", 
            email: "",
            role: ""
        }
    ]);

    const clearMemberForm = () => {
        setMemberData({ name: "", email: "", role: "" });
        // setMemberData({ id: Date.now(), name: "", email: "", role: "" });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleFormSubmission(memberFormData); // passes Form.js state (data) to handleFormSubmission function expression from App.js
                                        // which is passed to Form.js via props assigned to the onSubmit variable
        clearMemberForm();
    };
    // handleChange allows for 
    const handleChange = (event) => {
        setMemberData({...memberFormData, [event.target.name]: event.target.value});
    };

    return (
        <form onSubmit={handleSubmit}> {/* onSubmit attribute listens for submit button click */}
            <label htmlFor="name">Team Member Name:</label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter name here"
                value={memberFormData.name}
                onChange={handleChange}
            />
            <label htmlFor="email">Team Member Email:</label>
            <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter email here"
                value={memberFormData.email}
                onChange={handleChange}
            />
            <label htmlFor="role">Team Member Role:</label>
            <input
                id="role"
                name="role"
                type="text"
                placeholder="Enter role here"
                value={memberFormData.role}
                onChange={handleChange}
            />
            <button type="submit">Submit Form</button>
        </form>
    )
}

export default Form;
