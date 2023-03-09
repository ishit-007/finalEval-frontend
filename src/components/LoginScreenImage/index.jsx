/* eslint-disable react/no-unescaped-entities */
import displayScreenImage from '../../assets/undraw-upload-re-pasx.png';
import React from 'react';
import './index.css';

const LoginScreenImage = () => {
  return (
    <div className="loginImage">
      <img src={displayScreenImage} alt="Login Screen" />
      <div className="content">
        <h1>Design API's fast,</h1>
        <h1>Manage content easily.</h1>
      </div>
    </div>
  );
};

export default LoginScreenImage;
