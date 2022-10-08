import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import './App.css';
import Post from './pages/Post';
import About from './pages/About';
import Welcome from './pages/Welcome';

function App() {


  return (
    <div className="App container">
      <Router>
        <Routes>

          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<Post />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
