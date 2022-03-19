import React, { useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';

const WebContainer = styled.div`
  height: 100vh;
`;

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <WebContainer>
      { isLogin && (<Login setIsLogin={setIsLogin} />) }
      <Navbar setIsLogin={setIsLogin} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
      <Footer />
    </WebContainer>
  );
}

export default App;
