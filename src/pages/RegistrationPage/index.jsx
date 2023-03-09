import { InputCredentialsForRegister, LoginScreenImage } from '../../components';
import React from 'react';

const RegistrationPage = () => {
  return (
    <div className="loginPage">
      <div className="loginPage__left">
        <LoginScreenImage />
      </div>
      <div className="loginPage__right">
        <InputCredentialsForRegister />
      </div>
    </div>
  );
};

export default RegistrationPage;
