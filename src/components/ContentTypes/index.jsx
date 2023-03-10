/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import './index.css';
import React from 'react';
import magnifyingGlass from '../../assets/icon-search-dark.png';
import deleteButton from '../../assets/trash-delete-recycle-bin-bucket-waste.png';
import editButton from '../../assets/user-edit-text-message-note.png';
import axios from 'axios';

const ContentTypes = props => {
  const [selectedContentType, setSelectedContentType] = React.useState('CompanyProfile');

  const [modal2IsOpen, setModal2IsOpen] = React.useState('none');
  const [selectedContentData, setSelectedContentData] = React.useState([]);
  const [newContentType, setNewContentType] = React.useState('');
  const [modalIsOpen, setModalIsOpen] = React.useState('none');
  const [contentTypes, setContentTypes] = React.useState([]);
  const [newField, setNewField] = React.useState('');

  const createNewContentTypeHandler = e => {
    const token = localStorage.getItem('token');
    axios
      .post(
        'http://localhost:8080/contentTypes/create',
        {
          contentTypeName: newContentType,
        },
        {
          headers: {
            token: token,
          },
        }
      )
      .then(resp => {
        setModalIsOpen('none');
        setModal2IsOpen('none');
        setNewContentType('');
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const createNewFieldHandler = e => {
    axios
      .patch('http://localhost:8080/attributes/create', {
        contentTypeName: selectedContentType,
        attribute: newField,
      })
      .then(resp => {
        setModal2IsOpen('none');
        setNewField('');
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteFieldHandler = attribute => {
    const token = localStorage.getItem('token');
    console.log(attribute, selectedContentData.id);
    axios
      .delete(`http://localhost:8080/attributes/delete/${selectedContentData.id}/${attribute}`, {
        headers: {
          token: token,
        },
      })
      .then(resp => {
        console.log(resp);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  window.onclick = e => {
    if (e.target.className === 'modal') {
      setModalIsOpen('none');
      setNewContentType('');
    } else if (e.target.className === 'modal2') {
      setModal2IsOpen('none');
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:8080/contentTypes/all', {
        headers: {
          token: token,
        },
      })
      .then(resp => {
        setContentTypes(resp.data);
        const filteredData = resp.data.filter(contentType => {
          console.log('selectedContentType: ', selectedContentType);
          if (contentType.name === selectedContentType) {
            return true;
          } else {
            return false;
          }
        });
        setSelectedContentData(filteredData[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [selectedContentType]);

  return (
    <div className="content-types">
      <div className="heading">
        <h1
          onClick={() => {
            console.log(selectedContentData);
          }}>
          Content Types
        </h1>
      </div>

      <div className="modal" style={{ display: modalIsOpen }}>
        <div className="modal-content">
          <h3>Create a New Content Type</h3>
          <div className="new-content">
            <p>Name of the content type</p>
            <input
              type="text"
              value={newContentType}
              onChange={event => {
                setNewContentType(event.target.value);
              }}
            />
          </div>
          <div className="btns">
            <button
              className="cancel"
              onClick={() => {
                setModalIsOpen('none');
              }}>
              Cancel
            </button>
            <button className="create" onClick={createNewContentTypeHandler}>
              Create
            </button>
          </div>
        </div>
      </div>

      <div className="modal2" style={{ display: modal2IsOpen }}>
        <div className="modal-content2">
          <h3>Create a New Field</h3>
          <div className="new-content">
            <p>Name of the field</p>
            <input
              type="text"
              value={newField}
              onChange={event => {
                setNewField(event.target.value);
              }}
            />
          </div>
          <div className="btns">
            <button
              className="cancel"
              onClick={() => {
                setModal2IsOpen('none');
              }}>
              Cancel
            </button>
            <button className="create" onClick={createNewFieldHandler}>
              Create
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="new-types-content">
          <div className="new-types-header">
            <p>{contentTypes && contentTypes.length} Types</p>
            <img src={magnifyingGlass} alt="" />
          </div>
          <div className="new-types">
            <div
              className="addNewType"
              onClick={() => {
                setModalIsOpen('block');
              }}>
              + New Type
            </div>
            <div className="existing-types">

              {contentTypes.map(contentType => {
                console.log('contentType: ', contentType);
                return (
                  <div
                    key={Math.random()}
                    className="existing"
                    onClick={() => {
                      setSelectedContentType(contentType.name);
                    }}>
                    <p>{contentType.name}</p>
                    <p>13</p>
                  </div>
                );
              })}

            </div>
          </div>
          <div className="single-type-fields"></div>
        </div>
        <div className="one-type-fields">
          <div className="heading">
            <h1>{selectedContentData.name}</h1>
            <h3>
              {selectedContentData && selectedContentData.attributes && selectedContentData.attributes.length} Fields
            </h3>
          </div>
          <div
            className="addField"
            onClick={() => {
              setModal2IsOpen('block');
            }}>
            Add another field
          </div>

          <div className="existing-fields">
            {selectedContentData &&
              selectedContentData.attributes &&
              selectedContentData.attributes.map(attribute => {

                if (attribute) {
                  return (
                    <div className="existing-field">
                      <div className="logo">Ab</div>
                      <div>{attribute}</div>
                      <div>Text</div>
                      <div className="icons">
                        <img
                          src={deleteButton}
                          alt=""
                          onClick={() => {
                            deleteFieldHandler(attribute);
                          }}
                        />
                        <img src={editButton} alt="" />
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContentTypes;
