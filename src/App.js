import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import { Header, Footer } from './container';
// Pages
import Home from './pages/Home/Home';
import Dive from './pages/Dive/Dive';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='bar'/>
      <Header />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dive' element={<Dive />} />
          {/* <Route path="/course-detail/:title_card" component={CourseDetail} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <div className='bar'/>
      <Footer />
    </div>
  );
}

export default App;
