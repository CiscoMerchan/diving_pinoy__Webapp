import './App.css';
import './index.css'
import { Navbar } from './components';
import { Header, Dive  } from './container';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Dive />
    </div>
  );
}

export default App;
