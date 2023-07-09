import './App.css';
import './index.css'
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
    <Footer />
    
    </div>
  );
}

export default App;
