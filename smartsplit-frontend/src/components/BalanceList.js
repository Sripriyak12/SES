import React, { useEffect, useState } from 'react';
import api from '../api';

const BalanceList = () => {
  const [balances, setBalances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const response = await api.get('/api/balances/who-owes-whom');
        setBalances(response.data);
      } catch (err) {
        console.error('Error fetching balances:', err);
        setError('Failed to load balances. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBalances();
  }, []);

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>💰 Who Owes Whom</h3>
      {loading ? (
        <p style={infoTextStyle}>Loading balances...</p>
      ) : error ? (
        <p style={errorTextStyle}>{error}</p>
      ) : balances.length === 0 ? (
        <p style={infoTextStyle}>No balances yet.</p>
      ) : (
        <ul style={listStyle}>
          {balances.map((b, index) => (
            <li key={index} style={listItemStyle}>
              <span style={debtorStyle}>{b.fromUserName}</span> owes{' '}
              <span style={creditorStyle}>{b.toUserName}</span>: ₹
              {(b.amount || 0).toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Styles
const containerStyle = {
  maxWidth: '450px',
  margin: '30px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  backgroundColor: '#fafafa',
  boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const headerStyle = {
  textAlign: 'center',
  color: '#e85c5c',
  marginBottom: '20px',
  fontWeight: '700',
  fontSize: '1.5rem',
};

const infoTextStyle = {
  textAlign: 'center',
  color: '#666',
  fontStyle: 'italic',
};

const errorTextStyle = {
  textAlign: 'center',
  color: '#d32f2f',
  fontWeight: 'bold',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

const listItemStyle = {
  backgroundColor: '#fff5f5',
  padding: '12px 15px',
  borderRadius: '8px',
  marginBottom: '10px',
  boxShadow: 'inset 2px 2px 5px rgba(232, 92, 92, 0.15)',
  fontSize: '1rem',
  color: '#444',
};

const debtorStyle = {
  color: '#e85c5c',
  fontWeight: '600',
};

const creditorStyle = {
  color: '#3a78f1',
  fontWeight: '600',
};

export default BalanceList;
