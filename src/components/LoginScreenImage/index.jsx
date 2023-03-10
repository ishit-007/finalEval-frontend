/* eslint-disable react/no-unescaped-entities */
import displayScreenImage from '../../assets/undraw-upload-re-pasx@3x.png';
import React from 'react';
import './index.css';

const LoginScreenImage = () => {
  return (
    <div className="loginImage">
      <img src={displayScreenImage} alt="Login Screen" />
      <div className="content">
        <h2>Design API's fast,</h2>
        <h2>Manage content easily.</h2>
      </div>
    </div>
  );
};

export default LoginScreenImage;
