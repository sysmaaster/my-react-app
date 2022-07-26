import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App-grid">
      <Header />
      <SideBar />
      <MainContent />
      <Footer />
      
      
    </div>
  );
}

export default App;

const Header = () => {
  return (
    <header className="Header">
      
        <img className="logo-header" src='https://flyclipart.com/thumbs/raccoon-transparent-images-raccoon-logo-1172933.png' alt="logo" />
      
        
      header тут?
      
    </header>
  );
}

const SideBar = () => {
  return (
    <div className="SideBar">
      
      тут я SideBar  
      
    </div>
  );
}

const MainContent = () => {
  return (
    <div className="MainContent">

     я MainContent
    
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="Footer">
      
      я footer

    </footer>
  );
}