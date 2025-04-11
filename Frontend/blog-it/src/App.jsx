import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
// import SignUp from './Components/SignUp';
import Login from './Components/Login';
import './index.css';

function App() {
  return (
    
      <div className="home">
        <Navbar />
        <Routes>
          <Route path="/" element={<Herosection />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* Add more routes as needed, e.g., for login, blog posts, etc. */}
         <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    
  );
}

export default App;