import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/navbar/Navbar';
import { Header, Footer } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='bar'/>
      <Header />
      
        <Routes>
          <Route path='/' element={<Home />} />
          
        </Routes>
      <div className='bar'/>
      <Footer />
    </div>
  );
}

export default App;
