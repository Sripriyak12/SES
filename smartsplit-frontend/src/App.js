import React, { useState } from 'react';
import UserForm from './components/UserForm';
import ExpenseForm from './components/ExpenseForm';
import BalanceList from './components/BalanceList';

const App = () => {
  const [activeTab, setActiveTab] = useState('users');

  const renderTab = () => {
    switch (activeTab) {
      case 'users':
        return <UserForm />;
      case 'expenses':
        return <ExpenseForm />;
      case 'balances':
        return <BalanceList />;
      default:
        return null;
    }
  };

  return (
    <div style={appContainerStyle}>
      <div style={appCardStyle}>
        <h1 style={titleStyle}>SmartSplit 💸</h1>

        <div style={tabsWrapperStyle}>
          {['users', 'expenses', 'balances'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={tabButtonStyle(activeTab === tab)}
            >
              {tab === 'users' && 'Add Users'}
              {tab === 'expenses' && 'Add Expenses'}
              {tab === 'balances' && 'Who Owes Whom'}
            </button>
          ))}
        </div>

        <div style={formAreaStyle}>{renderTab()}</div>
      </div>
    </div>
  );
};

// Light-themed UI styles

const appContainerStyle = {
  minHeight: '100vh',
  backgroundColor: '#f5f8fa',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px',
  fontFamily: "'Poppins', sans-serif",
};

const appCardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '18px',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
  padding: '40px 30px',
  width: '100%',
  maxWidth: '800px',
  boxSizing: 'border-box',
};

const titleStyle = {
  textAlign: 'center',
  fontSize: '2.6rem',
  color: '#e85c5c',
  fontWeight: '800',
  marginBottom: '30px',
  letterSpacing: '1px',
};

const tabsWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginBottom: '30px',
  flexWrap: 'wrap',
};

const tabButtonStyle = (active) => ({
  padding: '10px 22px',
  borderRadius: '30px',
  backgroundColor: active ? '#e85c5c' : '#f0f0f0',
  border: 'none',
  color: active ? '#fff' : '#444',
  fontWeight: '600',
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: active ? '0 4px 12px rgba(232, 92, 92, 0.5)' : 'none',
  transition: 'all 0.3s ease-in-out',
});

const formAreaStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '14px',
  padding: '25px',
  boxShadow: 'inset 0 0 6px rgba(0,0,0,0.05)',
  minHeight: '320px',
  transition: 'all 0.3s ease-in-out',
};

export default App;
