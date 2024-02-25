import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar.jsx/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}

export default App
