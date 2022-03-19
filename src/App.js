import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';

const WebContainer = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <WebContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </WebContainer>
  );
}

export default App;
