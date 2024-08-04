import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [favouriteHobbies, setFavouriteHobbies] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleGenerateOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('generate-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error generating OTP:', error);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth//verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, otp }),
      });
      const data = await response.json();
      if (data.status === 'success') {
        navigate('/verify_otp');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/update-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, schoolName, favouriteHobbies, newPassword }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Forgot Password ?</h2>
      <form>
        <input type="text" placeholder="User ID / Email / Mobile Number " value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
        <button type="submit" onClick={handleGenerateOtp} >Generate OTP</button>

        <input type="text" placeholder="Enter Reset OTP" /*value={otp} onChange={(e) => setOtp(e.target.value)}*/ />
        <button type="submit" onClick={() => navigate('/verify_otp')} >Verfiy OTP </button>
        <h2>OR</h2>
        <input type="text" placeholder="User ID / Email / Mobile Number " value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
        <input type="text" placeholder="School Name "value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
        <input type="text" placeholder="Favourite Hobbies "value={favouriteHobbies} onChange={(e) => setFavouriteHobbies(e.target.value)} />
        <input type="text" placeholder="Enter New Password " value={newPassword}  onChange={(e) => setNewPassword(e.target.value)} />
        <button type="submit"onClick={handleUpdatePassword} >Update Password </button>


      </form>
    </div>
  );
};

export default ForgotPasswordForm;
