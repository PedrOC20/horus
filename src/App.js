import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Banner from './components/banner/banner.component';
import Projects from './components/projects/projects.component';
import HowItWorks from './components/how-it-works/how-it-works.component';
import TeamSports from './components/team-sports/team-sports.component';
import Press from './components/press/press.component';
import ContactUs from './components/contact-us/contact-us.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className='container'>
        <Projects />
        <HowItWorks />
        <TeamSports />
        <Press />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
