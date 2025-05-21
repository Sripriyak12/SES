import React, { useState, useEffect } from 'react';
import api from '../api';

const ExpenseForm = () => {
  const [users, setUsers] = useState([]);
  const [payerId, setPayerId] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    api.get('/api/users/all')
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error('Failed to fetch users:', err);
        alert('Error fetching users.');
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/api/expenses/add', {
        amount,
        description,
        paidByUserId: payerId,
      });
      alert('💰 Expense added!');
      setAmount('');
      setDescription('');
      setPayerId('');
    } catch (error) {
      console.error('Failed to add expense:', error);
      alert('❌ Failed to add expense');
    }
  };

  return (
    <div style={cardStyle}>
      <h3 style={headingStyle}>💸 Add Expense</h3>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (e.g. Lunch, Uber)"
          style={inputStyle}
          required
          autoComplete="off"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount (e.g. 250)"
          style={inputStyle}
          required
          min="0"
          step="0.01"
        />
        <select
          value={payerId}
          onChange={(e) => setPayerId(e.target.value)}
          style={inputStyle}
          required
        >
          <option value="" disabled>Select Payer</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>{u.name}</option>
          ))}
        </select>
        <button type="submit" style={buttonStyle} aria-label="Add Expense">
          ➕ Add Expense
        </button>
      </form>
    </div>
  );
};

// Styles
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

inputStyle[':focus'] = {
  borderColor: '#e85c5c',
  boxShadow: '0 0 6px #f2a1a1',
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

buttonStyle[':hover'] = {
  backgroundColor: '#d94b4b',
  boxShadow: '0 6px 18px rgba(217, 75, 75, 0.8)',
};

export default ExpenseForm;
