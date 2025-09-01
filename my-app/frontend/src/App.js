import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AddStudent from './components/Students/AddStudent';
import StudentList from './components/Students/StudentList';
import LogsList from './components/Logs/LogsList';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  const [students, setStudents] = useState([]);
  const [showStudents, setShowStudents] = useState(false);

  const [logs, setLogs] = useState([]);
  const [showLogs, setShowLogs] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [view, setView] = useState('login'); // login | signup | dashboard

  const [message, setMessage] = useState('');

  // Fetch students from backend
  const fetchStudents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/students');
      setStudents(res.data);
      setShowStudents(true);
      setShowLogs(false);
      setMessage('');
    } catch {
      setMessage('Error fetching students.');
    }
  };

  // Fetch logs from backend
  const fetchLogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/logs');
      setLogs(res.data);
      setShowLogs(true);
      setShowStudents(false);
      setMessage('');
    } catch {
      setMessage('Error fetching logs.');
    }
  };

  // When a student is added, refresh student list
  const handleStudentAdded = () => {
    fetchStudents();
    setMessage('Student added successfully!');
  };

  // Logout handler
  const handleLogout = () => {
    setLoggedInUser(null);
    setView('login');
    setMessage('');
    setShowStudents(false);
    setShowLogs(false);
  };

  // Login success handler
  const handleLoginSuccess = (username) => {
    setLoggedInUser(username);
    setView('dashboard');
    setMessage('');
  };

  return (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    {!loggedInUser && view === 'login' && (
      <>
        <Login onLoginSuccess={handleLoginSuccess} />
        <p>
          Don't have an account?{' '}
          <button onClick={() => setView('signup')}>Sign up here</button>
        </p>
      </>
    )}

    {!loggedInUser && view === 'signup' && (
      <>
        <Signup />
        <p>
          Already have an account?{' '}
          <button onClick={() => setView('login')}>Login here</button>
        </p>
      </>
    )}

    {loggedInUser && view === 'dashboard' && (
      <>
        <h1>Welcome, {loggedInUser}!</h1>
        <button onClick={handleLogout} style={{ marginBottom: '15px' }}>
          Logout
        </button>

        <AddStudent onStudentAdded={handleStudentAdded} />

        <hr style={{ margin: '20px 0' }} />

        <button
          onClick={fetchStudents}
          style={{ padding: '10px 15px', marginRight: '10px', cursor: 'pointer' }}
        >
          Show All Students
        </button>
        <button
          onClick={fetchLogs}
          style={{ padding: '10px 15px', cursor: 'pointer' }}
        >
          Show Logs
        </button>

        {message && <p style={{ marginTop: '15px', color: 'green' }}>{message}</p>}

        {showStudents && (
          <StudentList students={students} onRefresh={fetchStudents} />
        )}
        {showLogs && <LogsList logs={logs} />}
      </>
    )}
  </div>
);

}

export default App;
