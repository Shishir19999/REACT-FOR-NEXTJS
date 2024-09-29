import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Users from './components/Users'

export default function App() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}
