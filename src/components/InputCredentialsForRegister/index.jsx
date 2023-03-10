/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import './index.css';
import { useNavigate } from 'react-router-dom';

const InputCredentialsForRegister = () => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const registrationHandler = () => {
    axios
      .post('http://localhost:4000/user', {
        userName,
        password,
      })
      .then(resp => {
        navigate('/login');
      })
      .catch(err => {
        alert('User already exists');
      });
  };

  const userNameChangeHandler = event => {
    setUserName(event.target.value);
  };

  const passwordChangeHandler = event => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  return (
    <div className="inputForm">
      <div className="heading">
        <h1>Register to your CMS+ Account</h1>
      </div>
      <div className="emailInput">
        <label htmlFor="">Email</label>
        <input type="email" name="email" id="email" onChange={userNameChangeHandler} />
      </div>
      <div className="passwordInput">
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="password" onChange={passwordChangeHandler} />
      </div>
      <div className="submitBtn">
        <button type="button" onClick={registrationHandler}>
          Register
        </button>
        <a href="">Forgot Password?</a>

        <a
          href=""
          className="other-Option"
          onClick={() => {
            navigate('/login');
          }}>
          Login Instead
        </a>
      </div>
    </div>
  );
};

export default InputCredentialsForRegister;
