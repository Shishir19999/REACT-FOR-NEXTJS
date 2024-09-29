import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/Home';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import NotFoundPage from './components/NotFound';
import UsersPage from './components/Users';
import UserDetailsPage from './components/UserDetailsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:user_id" element={<UserDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
