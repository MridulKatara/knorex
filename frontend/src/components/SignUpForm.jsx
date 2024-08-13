import React, { useState } from 'react';

function SignUpForm({ onSignUp, onCancel }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordRegex.test(password)) {
      setError('Password must be 8-16 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    setError('');
    const newUser = { firstName, lastName, email, password };
    onSignUp(newUser);
  };

  return (
    <div className="signup-form" style={styles.formContainer}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </label>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.submitButton}>Sign Up</button>
        <button type="button" onClick={onCancel} style={styles.cancelButton}>
          Cancel
        </button>
      </form>
    </div>
  );
}


const styles = {
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5', 
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#ffffff', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  label: {
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  submitButton: {
    padding: '10px 15px',
    marginTop: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#28a745', 
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  },
  submitButtonHover: {
    backgroundColor: '#218838',
  },
  cancelButton: {
    padding: '10px 15px',
    marginTop: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#dc3545',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  },
  cancelButtonHover: {
    backgroundColor: '#c82333', 
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default SignUpForm;
