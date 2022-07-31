import React from 'react';
import './App.css';
import Header from './components/Header/Headers';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Profiles from './components/Profile/Profiles';

const App = () => {
  return (
    <div className="App-grid">
      <Header />
      <NavBar />
      <Profiles />
      <Footer />
      
      
    </div>
  );
}

export default App;