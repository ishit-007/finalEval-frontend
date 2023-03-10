import React from 'react';
import './index.css';
import { ContentTypes, CollectionTypes } from '../../components';

const ContentTypesPage = () => {
  
  return (
    <div className="content-typs-page">
      <div className="collectionTypesPage__left">
        <CollectionTypes />
      </div>
      <div className="contentTypesPage__right">
        <ContentTypes />
      </div>
    </div>
  );
};

export default ContentTypesPage;
