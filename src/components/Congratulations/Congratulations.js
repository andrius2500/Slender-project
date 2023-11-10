import React, { useState } from "react";
import "./congratulations.css";

const Congratulations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="congratulations">
      <form onSubmit={handleSubmit}>
        <h2 className="form-header">Congratulations!</h2>
        <p>
          You found all the pages! Did you like what you saw? Leave your
          contacts and message and let's talk
        </p>
        <label>Name</label>
        <input
          name="name"
          type="text"
          className="input-style"
          placeholder="Name or company name"
          value={formData.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          name="email"
          type="email"
          className="input-style"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Message:</label>
        <textarea
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Congratulations;
