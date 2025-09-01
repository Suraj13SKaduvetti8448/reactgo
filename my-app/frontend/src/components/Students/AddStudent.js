import React, { useState } from 'react';
import axios from 'axios';

function AddStudent({ onStudentAdded }) {
  const [student, setStudent] = useState({ name: '', age: '', course: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/students', student);
      setMessage('Student added successfully!');
      setStudent({ name: '', age: '', course: '' });
      onStudentAdded(); // notify parent to refresh list or clear messages
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage('Duplicate student entry detected!');
      } else {
        setMessage('Error adding student.');
      }
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          required
          style={{ padding: '8px', margin: '5px', width: '200px' }}
        />
        <br />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          required
          style={{ padding: '8px', margin: '5px', width: '200px' }}
        />
        <br />
        <input
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          required
          style={{ padding: '8px', margin: '5px', width: '200px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 15px', marginTop: '10px' }}>
          Add Student
        </button>
      </form>
      {message && <p style={{ marginTop: '15px', color: 'green' }}>{message}</p>}
    </div>
  );
}

export default AddStudent;
