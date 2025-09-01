import React, { useState } from 'react';
import axios from 'axios';
import EditStudent from './EditStudent';

function StudentList({ students, onRefresh }) {
  const [editingId, setEditingId] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      onRefresh();
    } catch (error) {
      alert('Error deleting student.');
    }
  };

  const handleEditClick = (id) => {
    setEditingId(id);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleUpdate = () => {
    setEditingId(null);
    onRefresh();
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {students.map((stu) => (
            <li key={stu.id} style={{ marginBottom: '10px' }}>
              {editingId === stu.id ? (
                <EditStudent
                  student={stu}
                  onCancel={handleCancelEdit}
                  onUpdate={handleUpdate}
                />
              ) : (
                <div>
                  <strong>{stu.name}</strong> - {stu.age} years old - Course: {stu.course}
                  <button
                    onClick={() => handleEditClick(stu.id)}
                    style={{ marginLeft: '10px', padding: '3px 8px' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(stu.id)}
                    style={{ marginLeft: '5px', padding: '3px 8px', backgroundColor: '#f44336', color: 'white' }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
