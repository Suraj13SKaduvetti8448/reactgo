import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      setMessage(res.data.message);
      setForm({ username: '', password: '' });
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setMessage('User already exists');
      } else {
        setMessage('Error signing up');
      }
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          style={{ padding: '8px', margin: '5px', width: '200px' }}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{ padding: '8px', margin: '5px', width: '200px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 15px', marginTop: '10px' }}>
          Signup
        </button>
      </form>
      {message && <p style={{ marginTop: '15px', color: 'green' }}>{message}</p>}
    </div>
  );
}

export default Signup;
