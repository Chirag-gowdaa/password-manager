import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Manager from './components/Manager';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Manager />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
