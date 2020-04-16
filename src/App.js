import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Banner from './components/banner/banner.component';
import Projects from './components/projects/projects.component';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
    </>
  );
}

export default App;
