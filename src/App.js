import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Home } from './pages/Home';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import SignInSide from './pages/LogIn';
import { Drive } from './pages/Drive';
import { Gcs } from './pages/GCS';
import './App.css';


export default function App() {

  return (
      <>
        <CssBaseline />
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/drive" element={<Drive />} />
            <Route path="/gcs" element={<Gcs />} />
            <Route path="/login" element={<SignInSide />} />
          </Routes>
        </div>
      </>
  );
}
