import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/get-users");
      setUsers(res.data.allUsers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await axios.delete(`http://localhost:8000/delete-user/${id}`);
      alert("User deleted!");
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Users</h2>
      <Link to="/create-user" className=" d-flex justify-content-center align-items-center btn btn-primary my-3 ">Create User</Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Age</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.age}</td>
              <td>
                <Link to={`/update-user`} className="btn btn-warning btn-sm me-2">
                  Edit
                </Link>

                <Link to={`/delete-user/${u._id}`} className="btn btn-danger btn-sm"> 
                        
                        {/* onClick={() => handleDelete(u._id)} */}
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
