import './App.css';
import React from 'react';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ContentTypesPage from './pages/ContentTypesPage';
import EntriesPage from './pages/EntriesPage';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegistrationPage />} />
        
        <Route
          path="/content-types"
          element={
            <ProtectedRoutes>
              <ContentTypesPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/content-types/:id"
          element={
            <ProtectedRoutes>
              <EntriesPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
