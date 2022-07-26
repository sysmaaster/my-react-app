import logo from './logo.svg';
import './App.css';

import Header from './Header';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App-grid">
      <Header />
      <NavBar />
      <MainContent />
      <Footer />
      
      
    </div>
  );
}

export default App;