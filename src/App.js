
import React from 'react';
import { Side } from './components/Side';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Portfolio } from './components/Portfolio';
import { Education } from './components/Education';


function App() {
  return (
  <div>
    <Side/>
    <Home/>
     <About/>
    <Education/>
    <Portfolio/>
    <Contact/> 
  </div>
  );
}

export default App;
