import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UserDetailsPage() {
  const params = useParams();
  const [user, setUser] = useState({});

  const fetchUser = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.user_id}`)
      .then((res) => {
        setUser(res.data);
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
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <td>{user.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}
