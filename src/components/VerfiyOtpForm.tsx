import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyOtpForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userID: '',
    otp: ''
  });
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewPassword(value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfirmPassword(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { userID, otp } = formData;
      const { data } = await axios.post('/verifyOtpForm', { userID, otp });
      console.log('OTP Verification successfully:', data);

      // Assuming OTP verification is successful, proceed to update password
      const response = await axios.post('/VerifyOtpForm', { userID, password: newPassword });
      console.log('Password updated successfully:', response.data);

      // Redirect or show success message
      navigate('/login'); // Redirect to login page after successful password update
    } catch (error) {
      console.error('Error in Verification:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="form-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userID" placeholder="User ID" value={formData.userID} onChange={handleChange} required />
        <input type="text" name="otp" placeholder="OTP" value={formData.otp} onChange={handleChange} required />
        <input type="password" placeholder="New Password" value={newPassword} onChange={handlePasswordChange} required />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default VerifyOtpForm;
