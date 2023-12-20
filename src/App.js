import './App.css';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Partners} from './components';
import { Header, Dive, About, Footer } from './container';
import Blog from './container/blog/Blog';


function App() {
  return (
    <div className="App">
    <Navbar />
    <div className='bar'/>
    <Header />
    <div className='bar'/>
    <Dive />
    <div className='bar'/>
    <Partners />
    <div className='bar'/>
    <About />
    <div className='bar'/>
    <Blog />
    <div className='bar'/>
    {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dive" element={<Dive />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    <Footer />
    
    </div>
  );
}

export default App;
