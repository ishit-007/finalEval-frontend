import { InputCredentialsForLogin, LoginScreenImage } from '../../components';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__left">
        <LoginScreenImage />
      </div>
      <div className="loginPage__right">
        <InputCredentialsForLogin/>
      </div>
    </div>
  );
};

export default LoginPage;
