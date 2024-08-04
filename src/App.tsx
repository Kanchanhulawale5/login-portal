import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import VerfiyOtpForm from './components/VerfiyOtpForm';
import UploadFileForm from './components/UploadFile';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot_password" element={<ForgotPasswordForm />} />
        <Route path="/verify_otp" element={<VerfiyOtpForm />} />
        <Route path="/upload_file" element={<UploadFileForm />} />
      </Routes>
    </Router>
  );
};

export default App;
