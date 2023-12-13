import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage';
import Register from './Components/Register';
import { UserProvider } from './UserContext';
import News from './Components/NewsList';
import Portfolio from './Components/Portfolio';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Header from './Components/Header';
import CryptoMarketOverview from './Components/CryptoMarketOverview';

function App() {
  const [cryptos, setCryptos] = useState([]);





  const [registeredUsers, setRegisteredUsers] = useState([
    { name: "Fatih", email: "fatih@sezer", password: "1234", wallet: 10000, coins: {}, toplamDeger: 0 },
    { name: "deneme", email: "user2@example.com", password: "password2", wallet: 100, coins: {}, toplamDeger: 0 }

  ]);

  const addUser = (newUser) => {
    setRegisteredUsers([...registeredUsers, newUser]);
  };





  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/wallet" element={<Portfolio cryptos={cryptos} />} />
            <Route path="/market" element={<CryptoMarketOverview registeredUsers={registeredUsers} />} />ğ
            <Route path="/login" element={<Login registeredUsers={registeredUsers} />} />
            <Route path="/register" element={<Register setRegisteredUsers={setRegisteredUsers} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
