import React, { useState } from "react";
import axios from "axios";

function DeleteUser() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.delete(`http://localhost:8000/delete-user/${id}`);
      setMessage("User deleted successfully");
      console.log(res);
    } catch (error) {
      setMessage("Error deleting user");
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-100" style={{ maxWidth: "400px" }}>
        <form onSubmit={handleDelete}>
          <h3 className="text-center mb-4">Delete User</h3>

          <label className="form-label">User ID</label>
          <input
            type="text"
            className="form-control mb-3"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          {message && <p>{message}</p>}

          <button className="btn btn-danger w-100 mt-3" type="submit">
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteUser;
