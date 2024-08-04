import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure you have react-router-dom installed
import axios from 'axios';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userID: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/Login', formData);
      console.log(response.data); // Assuming your backend responds with a success message and token

      // Store token in localStorage or sessionStorage for authentication
      localStorage.setItem('token', response.data.token);

      // Redirect to dashboard or home page after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error states
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userID" placeholder="User ID" value={formData.userID} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <button className="switch-button" onClick={() => navigate('/forgot_password')}>ForgotPassword</button>
    </div>
  );
};

export default LoginForm;
