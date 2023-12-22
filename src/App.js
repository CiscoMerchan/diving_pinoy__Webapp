import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import { Header, Footer } from './container';
// Pages
import Home from './pages/Home/Home';
import Dive from './pages/Dive/Dive';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='bar'/>
      <Header />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dive' element={<Dive />} />
          
        </Routes>
      <div className='bar'/>
      <Footer />
    </div>
  );
}

export default App;
