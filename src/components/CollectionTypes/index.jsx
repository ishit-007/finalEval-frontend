/* eslint-disable no-unused-vars */
import './index.css';
import magnifyingGlass from '../../assets/icon-search-dark.png';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from '../../pages/LoginPage';

const CollectionTypes = props => {
  const [contentTypes, setContentTypes] = React.useState([]);
  const [selectedContentData, setSelectedContentData] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:8080/contentTypes/all', {
        headers: {
          token: token,
        },
      })
      .then(resp => {
        if (resp.data.length > 0) {
          const filteredData = resp.data.filter(contentType => {
            if (contentType.name === 'CompanyProfile') {
              return true;
            } else {
              return false;
            }
          });
          setSelectedContentData(filteredData[0]);
        }
        setContentTypes(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="collection-types">
      <div className="heading">
        <h1>CMS+</h1>
      </div>
      <div className="collection-list">
        <div className="collection-types-header">
          <h2>COLLECTION TYPES</h2>
          <img src={magnifyingGlass} alt="" />
        </div>
        <div className="collection-types-list">
          <ul className="collection-types-list">
            {contentTypes.map(contentType => {
              return (
                <li
                  key={contentType.id}
                  onClick={() => {
                    navigate(`/content-types/${contentType.id}`);
                  }}>
                  {contentType.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="builder">
          <p
            onClick={() => {
              navigate('/content-types');
            }}>
            CONTENT TYPE BUILDER
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollectionTypes;
