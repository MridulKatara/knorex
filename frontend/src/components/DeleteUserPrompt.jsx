import React from 'react';

function DeleteUserPrompt({ user, onDelete, onCancel }) {
  const containerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    zIndex: 1000, 
  };

  const buttonStyle = {
    padding: '10px 15px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#fff',
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999, 
  };

  return (
    <div style={overlayStyle}>
      <div style={containerStyle}>
        <p>Are you sure you want to delete {user.firstName} {user.lastName}?</p>
        <button 
          onClick={onDelete}
          style={deleteButtonStyle}
        >
          Delete
        </button>
        <button 
          onClick={onCancel}
          style={cancelButtonStyle}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteUserPrompt;
