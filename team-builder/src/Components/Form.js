import React, { useState } from "react";

const Form = (props) => {
    const [memberFormData, setMemberData] = useState([
        {
            name: "", 
            email: "",
            role: ""
        }
    ]);

const clearMemberForm = () => {
    setMemberData({ name: "", email: "", role: "" });
};

const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(memberFormData);
    clearMemberForm();
};

const handleChange = (event) => {
    setMemberData({...memberFormData, [event.target.name]: event.target.value});
};

    return (
        <form onSubmit={handleSubmit}>
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
        <textarea
            id="email"
            name="email"
            type="text"
            placeholder="Enter email here"
            value={memberFormData.email}
            onChange={handleChange}
      />
      <label htmlFor="role">Team Member Role:</label>
        <textarea
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
