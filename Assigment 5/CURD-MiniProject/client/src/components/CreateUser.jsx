import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/create-user",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className=" card p-4 w-100" style={{ maxWidth: "400px" }}>
        <form action="submit" onSubmit={handleSubmit}>
          <h3 className="text-center mb-4">Create User</h3>
          <label className="form-label"> Name </label>
          <input
            type="Name"
            className="form-control mb-3"
            name="name"
            onChange={handleChange}
          />
          <label className="form-label"> Email </label>
          <input
            type="Name"
            className="form-control mb-3"
            name="email"
            onChange={handleChange}
          />
          <label className="form-label"> Age </label>
          <input
            type="Name"
            className="form-control mb-3"
            name="age"
            onChange={handleChange}
          />
          <button className="btn btn-primary w-100 mt-4" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
