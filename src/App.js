import React from 'react';
import './App.css';
import Header from './components/Headers';
import Footer from './components/Footer';
import UsrProfiles from './components/UsrProfiles';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App-grid">
      <Header />
      <NavBar />
      <UsrProfiles />
      <Footer />
      
      
    </div>
  );
}

export default App;