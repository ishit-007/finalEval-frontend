/* eslint-disable no-unused-vars */
import './index.css';
import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

const InputCredentialsForLogin = () => {
  const loginHandler = e => {
    axios
      .post('http://localhost:4000/login', {
        userName: userName,
        password: password,
      })
      .then(resp => {
        const token = resp.data;
        if (token) {
          localStorage.setItem('token', token);
          navigate('/content-types');
        }
      })
      .catch(err => {
        alert('Invalid Credentials');
      });
  };
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
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
        <h1>Login to your CMS+ Account</h1>
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
        <button type="button" onClick={loginHandler}>
          Login
        </button>
        <a href="">Forgot Password?</a>
        <a
          href=""
          className="other-Option"
          onClick={() => {
            navigate('/register');
          }}>
          Register Instead
        </a>
      </div>
    </div>
  );
};

export default InputCredentialsForLogin;
