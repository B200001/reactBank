import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import {ToastContainer} from "react-toastify";
import './App.css';
import Users from './components/pages/Users';
import Transfer from './components/pages/Transfer';
import TransactionHistory from './components/pages/Transaction_history';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <ToastContainer position='top-center'/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/Transfer' element={<Transfer />} />
            <Route path='/Transaction' element={<TransactionHistory />} />
            <Route path='/Create' element={<HeroSection />} />
          </Routes>
          <Footer/>
        </div>

      </Router>

    </>
  );
}

export default App;
