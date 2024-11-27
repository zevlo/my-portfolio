import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
