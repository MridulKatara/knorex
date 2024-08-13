import React from 'react';

function UserTable({ users, setSelectedUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>
              <button 
                className="delete" 
                onClick={() => setSelectedUser(user)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
