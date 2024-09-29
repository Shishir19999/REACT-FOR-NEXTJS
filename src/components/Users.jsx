import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function UsersPage() {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUser = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUser();
  });

  return (
    <div>
      <h1>Users List</h1>
      <hr />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>SN</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </td>
            </tr>
          ) : (
            users.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/users/${user.id}`} className="btn btn-success">
                      View
                    </Link>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
