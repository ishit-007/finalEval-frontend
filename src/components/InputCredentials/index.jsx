import './index.css';
import React from 'react';

const InputCredentials = () => {
  return (
    <div className="inputForm">
      <div className="heading">
        <h1>Login to your CMS+ Account</h1>
      </div>
      <div className="emailInput">
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="passwordInput">
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="submitBtn">
        <button type="submit">Login</button>
        <a href="">Forgot Password?</a>
      </div>
    </div>
  );
};

export default InputCredentials;
