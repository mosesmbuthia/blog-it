import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import Signup from './Components/Signup';
import Login from './Components/Login';
import './index.css';

function App() {
  return (
    
      <div className="home">
        <Navbar />
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add more routes as needed, e.g., for login, blog posts, etc. */}
         <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    
  );
}

export default App;