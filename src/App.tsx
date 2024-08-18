import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Assessments from './pages/Assessments';
import Community from './pages/Community';
import Tracker from './pages/Tracker';
import MindFullness from './pages/Mindfullness';
import Header from './components/Header';




function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/assessment' element={<Assessments/>} />
          <Route path='/community' element={<Community/>} />
          <Route path='/tracker' element={<Tracker/>} />
          <Route path='/mindfullness' element={<MindFullness/>} />
        </Routes>
        <footer className='bg-gray-400 text-center'>
      <p>&copy Akshat Garg • 2024 ❤️</p>
    </footer>
      </Router>
    </>
  );
}

export default App;
