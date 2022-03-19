import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';

const WebContainer = styled.div`
  height: 100vh;
`;

function App() {  
  return (
    <WebContainer>
      <Navbar />
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
