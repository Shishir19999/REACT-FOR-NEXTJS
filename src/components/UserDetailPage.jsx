import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UserDetailsPage() {
  const { user_id } = useParams();
  const [result, setResult] = useState({ id: null, user: {}, error: null });
  const isLoading = result.id !== user_id;
  const { user, error } = result;

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${user_id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setResult({ id: user_id, user: res.data, error: null });
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setResult({
          id: user_id,
          user: {},
          error: 'Failed to load user details. Please try again later.',
        });
      });

    return () => controller.abort();
  }, [user_id]);

  if (isLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

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
