// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer.js';

const App = () =>{
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
