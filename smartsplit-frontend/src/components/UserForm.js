import React, { useState } from 'react';
import api from '../api';

const UserForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Please enter a user name.');
      return;
    }

    try {
      const response = await api.post('/api/users/add', { name });
      alert(`User "${response.data.name}" added successfully!`);
      setName('');
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user. Please try again.');
    }
  };

  return (
    <div style={cardStyle}>
      <h3 style={headingStyle}>👤 Add User</h3>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name"
          style={inputStyle}
          required
          autoFocus
          spellCheck="false"
          aria-label="User name"
        />
        <button type="submit" style={buttonStyle}>
          ➕ Add User
        </button>
      </form>
    </div>
  );
};

// Light theme styles (matching ExpenseForm.js)
const cardStyle = {
  border: '1px solid #eee',
  borderRadius: '12px',
  padding: '25px',
  maxWidth: '420px',
  margin: '30px auto',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
  backgroundColor: '#ffffff',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const headingStyle = {
  marginBottom: '20px',
  color: '#e85c5c',
  textAlign: 'center',
  fontWeight: '700',
  fontSize: '1.8rem',
  letterSpacing: '1px',
  userSelect: 'none',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputStyle = {
  padding: '12px 15px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1.8px solid #ddd',
  outline: 'none',
  transition: 'border-color 0.3s ease',
  boxShadow: 'inset 0 1px 3px #f0f0f0',
  fontWeight: '500',
};

const buttonStyle = {
  padding: '14px',
  backgroundColor: '#e85c5c',
  color: 'white',
  fontWeight: '700',
  fontSize: '1.1rem',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(232, 92, 92, 0.6)',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
};

export default UserForm;
