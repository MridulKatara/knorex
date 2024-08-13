import React, { useState } from 'react';
import UserTable from './components/UserTable';
import SignUpForm from './components/SignUpForm';
import DeleteUserPrompt from './components/DeleteUserPrompt';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUp = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setShowSignUp(false);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    setSelectedUser(null);
  };

  const exportUsers = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + "First Name,Last Name,Email\n"
      + users.map(user => `${user.firstName},${user.lastName},${user.email}`).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      {!showSignUp ? (
        <div className="content">
          <UserTable users={users} setSelectedUser={setSelectedUser} />
          <div className="actions">
            <button className="sign-up" onClick={() => setShowSignUp(true)}>Sign Up</button>
            <button className="export" disabled={users.length === 0} onClick={exportUsers}>Export</button>
          </div>
          {selectedUser && selectedUser.id ? (
            <DeleteUserPrompt
              user={selectedUser}
              onDelete={() => handleDelete(selectedUser.id)}
              onCancel={() => setSelectedUser(null)}
            />
          ) : null}
        </div>
      ) : (
        <SignUpForm
          onSignUp={handleSignUp}
          onCancel={() => setShowSignUp(false)}
        />
      )}
    </div>
  );
}

export default App;
