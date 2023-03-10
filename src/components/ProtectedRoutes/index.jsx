/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import './index.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = React.useState(null);
  const [user, setUser] = React.useState('');
  React.useEffect(() => {
    const value = localStorage.getItem('token');
    axios
      .post('http://localhost:4000/token/validate', {
        token: value,
      })
      .then(response => {
        if (response.data) {
          setUser(response.data.userName);
          setToken(true);
        } else {
          setToken(false);
        }
      });
  }, []);

  return (
    <div>
      {token ? (
        <div>{children}</div>
      ) : (
        <div className="unAuthorized">
          <div className="text">
            <div className="title" data-content="404">
              You are not authorized to View this Page
            </div>
            <div className="title-2">Oops, You don't have permission to access this page.</div>
            <div
              className="buttons"
              onClick={() => {
                navigate('/login');
              }}>
              <a className="button" href="">
                Go to Login Page
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoutes;
