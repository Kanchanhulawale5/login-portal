import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userID: '',
    emailid: '',
    mobileNo: '',
    password: '',
    SchoolName: '',
    FavHobby: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('SignUpForm', formData);
      console.log(response.data);
      // Navigate to login page on successful signup
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userID"
          placeholder="User ID"
          value={formData.userID}
          onChange={handleChange}
        />
        <input type="email"
          name="emailid"
          placeholder="Email" value={formData.emailid} onChange={handleChange}
        />
        <input type="tel" name="mobileNo"placeholder="Mobile No." value={formData.mobileNo} onChange={handleChange}/>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
        <input type="text" name="SchoolName" placeholder="School Name" value={formData.SchoolName} onChange={handleChange}/>
        <input type="text" name="FavHobby" placeholder="Favourite Hobby" value={formData.FavHobby} onChange={handleChange}/>
        <button type="submit">Sign up</button>
      </form>
      <button className="switch-button" onClick={() => navigate('/login')}>Login</button>
    </div>
  );
};

export default SignUpForm;