import React, { useState } from 'react';
import axios from 'axios';

function EditStudent({ student, onCancel, onUpdate }) {
  const [form, setForm] = useState({
    name: student.name,
    age: student.age,
    course: student.course,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/students/${student.id}`, form);
      setMessage('Student updated successfully!');
      onUpdate();
    } catch (error) {
      setMessage('Error updating student.');
    }
  };

  return (
    <div style={{ marginBottom: '15px', border: '1px solid #ccc', padding: '10px' }}>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: '5px', marginRight: '5px', width: '120px' }}
        />
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          required
          style={{ padding: '5px', marginRight: '5px', width: '60px' }}
        />
        <input
          name="course"
          value={form.course}
          onChange={handleChange}
          required
          style={{ padding: '5px', marginRight: '5px', width: '150px' }}
        />
        <button type="submit" style={{ padding: '5px 10px', marginRight: '5px' }}>
          Save
        </button>
        <button type="button" onClick={onCancel} style={{ padding: '5px 10px' }}>
          Cancel
        </button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
}

export default EditStudent;
