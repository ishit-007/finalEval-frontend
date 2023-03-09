import './App.css';
import React from 'react';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ContentTypesPage from './pages/ContentTypesPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/content-types" element={<ContentTypesPage/>} />
      </Routes>
    </div>
  );
}

export default App;
