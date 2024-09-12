import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/view/Homepage';
import About from './components/view/About';
import Partner from './components/view/Partner';
import Career from './components/view/Career';
import Contact from './components/view/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={< Homepage />} />
        <Route path='about' element={< About />} />
        <Route path='partener' element={<Partner />} />
        <Route path='career' element={<Career />} />
        <Route path='contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
