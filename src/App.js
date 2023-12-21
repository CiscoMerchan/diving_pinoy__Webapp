import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import { Navbar } from './components';
import { Header, Footer } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='bar'/>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          
        </Routes>
      </Router>
      <div className='bar'/>
      <Footer />
    </div>
  );
}

export default App;
