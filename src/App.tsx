import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Connect } from './components/Connect';
import { ScrollIndicator } from './components/ScrollIndicator';

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollIndicator />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Connect />
    </div>
  );
}

export default App;