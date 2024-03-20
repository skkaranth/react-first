import React, { useState } from 'react';

const styles = {
  container: {
    width: '50%',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '.5rem',
  },
  input: {
    width: '100%',
    padding: '.5rem',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '.5rem',
    fontSize: '1rem',
  },
  button: {
    padding: '.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    summary: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://example.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Form data submitted successfully:', data);
      // Optionally, you can reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        summary: ''
      });
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
  };
  return (
    <div style={styles.container}>
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input
            style={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="phoneNumber">Phone Number:</label>
          <input
            style={styles.input}
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="summary">Summary:</label>
          <textarea
            style={styles.textarea}
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CandidateForm;
