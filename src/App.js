import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Loading from './Components/Loading';
import Modal from './Components/Modal';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { useSelector } from "react-redux";

const WebContainer = styled.div`
  height: 100vh;
`;

function App() {
  const loading = useSelector(state => state?.isLoading);
  const rememberMe = localStorage.getItem('autologin');
  const accessToken = localStorage.getItem('access_token');
  const [isLogin, setIsLogin] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const toLogout = () => {
    setIsLogout(true);
  };

  useEffect(() => {
    if (!rememberMe && accessToken) {
      localStorage.clear();
    };
    if (rememberMe || accessToken) {
      setIsLoggedin(true);
    };
  }, [rememberMe, accessToken]);

  return (
    <WebContainer>
      <Router>
        { loading && (<Loading />) }
        { isLogin && (<Login setIsLogin={setIsLogin} isLoading={loading}/>) }
        { isLogout && (<Modal setIsLogout={setIsLogout} setIsLoggedIn={setIsLoggedin} />) }
        <Navbar setIsLogin={setIsLogin} toLogout={toLogout} isLoggedin={isLoggedin} />
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
      <Footer />
    </WebContainer>
  );
}

export default App;
