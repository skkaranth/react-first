import React, { useState } from 'react';

import './LoginPage.css';
import { Link } from 'react-router-dom';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Input validation (add more checks as needed)
    if (!username) {
      setError('Please enter a username.');
      return;
    }
    if (!password) {
      setError('Please enter a password.');
      return;
    }

    try {
      // Simulate API call with placeholder data
      const response = await fetch('https://your-api-endpoint.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error('Login failed.');
      }

      const data = await response.json();

      if (!data.success) {
        setError(data.message || 'Invalid username or password.');
        return;
      }

      // Handle successful login (e.g., store token, redirect)
      console.log('Login successful!');
      // ...
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link className="signup" to="/signup">Sign Up</Link></p>      
    </div>
  );
}

export default LoginPage;