import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import Signup from './Components/Signup';
import Login from './Components/Login';
// import privateRoutes from './Store/Private.jsx';
import './index.css';

function App() {
  return (

    <div className="home">
      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* <Route element={<privateRoutes />}>
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/my-blogs" element={<MyBlogsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route> */}


      </Routes>
    </div>

  );
}

export default App;