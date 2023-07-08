import './App.css';
import './index.css'
import { Navbar } from './components';
import { Header, Dive, About, Footer   } from './container';
import Blog from './container/blog/Blog';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Dive />
    <div className='bar'/>
    <About />
    <Footer />
    <Blog />
    </div>
  );
}

export default App;
