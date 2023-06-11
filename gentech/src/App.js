import React from 'react';
import './App.css';
import Home from './pages/Home';
import Courses from './pages/courses/index';
import Certificates from './pages/certificates/index';
import SupportPage from './pages/support/index';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gentech" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/SupportPage" element={<SupportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
