
import React, { useState } from "react";
import axios from "axios";

function UpdateUser() {
  const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:8000/update-user/${id}`,
        formData
      );
      setMessage("User updated successfully!");
      console.log(res);
    } catch (error) {
      setMessage("Error updating user");
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-100" style={{ maxWidth: "400px" }}>
        <form onSubmit={handleUpdate}>
          <h3 className="text-center mb-4">Update User</h3>

          <label className="form-label">User ID</label>
          <input
            type="text"
            className="form-control mb-3"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control mb-3"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control mb-3"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control mb-3"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />

          {message && <p>{message}</p>}

          <button className="btn btn-warning w-100 mt-3" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
