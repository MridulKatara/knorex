import React, { useState } from 'react';
import UserTable from './components/UserTable';
import SignUpForm from './components/SignUpForm';
import DeleteUserPrompt from './components/DeleteUserPrompt';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  const refreshUsers = () => {
    // Fetch users from the backend
  };

  const handleSignUp = (newUser) => {
    refreshUsers();
    setShowSignUp(false); 
  };

  const handleCancel = () => {
    setShowSignUp(false); 
  };

  return (
    <div className="App">
      {showSignUp ? (
        <div className="signup-form">
          <h1>User Management</h1>
          <SignUpForm onSignUp={handleSignUp} onCancel={handleCancel} />
        </div>
      ) : (
        <div className="content">
          <h1>User Management</h1>
          <UserTable users={users} setSelectedUser={setSelectedUser} />
          <div className="actions">
            <button className="sign-up" onClick={() => setShowSignUp(true)}>
              Sign Up
            </button>
            <button className="export" disabled={users.length === 0} onClick={() => exportUsers()}>
              Export
            </button>
          </div>
          {selectedUser && (
            <DeleteUserPrompt
              user={selectedUser}
              onDelete={() => {
                refreshUsers();
                setSelectedUser(null);
              }}
              onCancel={() => setSelectedUser(null)}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
