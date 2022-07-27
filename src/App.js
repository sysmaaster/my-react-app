import React from 'react';
import './App.css';
import Header from './components/Headers';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import UsrProfiles from './components/users/UsrProfiles';

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