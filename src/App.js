import React, { useState } from 'react';
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
  
  const [isLogin, setIsLogin] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const loading = useSelector(state => state?.isLoading)

  const toLogout = () => {
    setIsLogout(true);
  };

  return (
    <WebContainer>
      <Router>
        { loading && (<Loading />) }
        { isLogin && (<Login setIsLogin={setIsLogin} isLoading={loading} />) }
        { isLogout && (<Modal setIsLogout={setIsLogout}/>) }
        <Navbar setIsLogin={setIsLogin} toLogout={toLogout} />
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
      <Footer />
    </WebContainer>
  );
}

export default App;
