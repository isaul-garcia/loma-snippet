import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
import { Home } from './pages';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['IBM Plex Sans KR']
      }
    });
  }, []);

  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
