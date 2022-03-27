import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './routes/Contact';

import Home from './routes/Home'
import Quizzes from './routes/Quizzes'
import AboutUs from './routes/AboutUs';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quizzes' element={<Quizzes />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
