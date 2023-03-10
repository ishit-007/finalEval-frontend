/* eslint-disable no-unused-vars */
import React from 'react';
import './index.css';
import { CollectionTypes } from '../../components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import deleteButton from '../../assets/trash-delete-recycle-bin-bucket-waste.png';
import editButton from '../../assets/user-edit-text-message-note.png';

const EntriesPage = () => {
  const [allContentTypes, setAllContentTypes] = React.useState([]);
  const [thisContentType, setThisContentType] = React.useState('');
  const [allEntries, setAllEntries] = React.useState([]);
  const { id } = useParams();
  React.useEffect(() => {
    axios
      .get('http://localhost:8080/contentTypes/all')
      .then(resp => {
        setAllContentTypes(resp.data);
        const filteredData = resp.data.filter(contentType => {
          if (contentType.id == id) {
            return true;
          } else {
            return false;
          }
        });
        setThisContentType(filteredData[0]);
        axios
          .get(`http://localhost:8080/entries/contentType/${id}`)
          .then(resp => {
            console.log(resp.data);
            setAllEntries(resp.data);
            console.log(resp.data);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const deleteHandler = entry => {
    axios
      .delete(`http://localhost:8080/entry/delete/${entry.id}`)
      .then(resp => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="allEntries">
      <div className="left">
        <CollectionTypes />
      </div>
      <div className="right">
        <div className="heading">
          <h1>{thisContentType.name}</h1>
        </div>
        <div className="entries">
          <div className="numEntries">
            <h1>{allEntries.length} Entries Found</h1>
          </div>
          <div className="entriesList">
            {allEntries.map(entry => {
              return (
                <div className="entry" key={entry.id}>
                  <p>{entry.contentTypeId}</p>
                  <p>Name</p>
                  <p>Text</p>
                  <p>Text</p>
                  <div className="icons">
                    <img src={editButton} style={{ height: '25px', width: '25px', margin: '10px' }} alt="" />
                    <img
                      src={deleteButton}
                      style={{ height: '25px', width: '25px', margin: '10px' }}
                      alt=""
                      onClick={() => {
                        deleteHandler(entry);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntriesPage;
