import React from 'react';
import './index.css';
import { ContentTypes, CollectionTypes } from '../../components';

const ContentTypesPage = () => {
  // const [selectedContentType, setSelectedContentType] = React.useState('CompanyProfile');
  return (
    <div className="content-typs-page">
      <div className="collectionTypesPage__left">
        {/* <CollectionTypes selectedContentType={selectedContentType} setSelectedContentType={setSelectedContentType} /> */}
        <CollectionTypes />
      </div>
      <div className="contentTypesPage__right">
        <ContentTypes />
        {/* <ContentTypes selectedContentType={selectedContentType} setSelectedContentType={setSelectedContentType} /> */}
      </div>
    </div>
  );
};

export default ContentTypesPage;
