import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import Signup from './Components/Signup';
import Login from './Components/Login';
import BlogListing from './Pages/BlogListing';
import WritePage from './Pages/WriteBlog';
import ArticlePage from './Pages/ArticlePage';
import UserProfile from './Pages/UserProfile';
import BlogDetails from './Pages/BlogDetails';
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
        <Route path="/my-blogs" element={<BlogListing />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/blog/:id" element={<ArticlePage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/blogs/:blogId" element={<BlogDetails />} />

        {/* <Route element={<privateRoutes />}>
          <Route path="/explore" element={<ExplorePage />} />
          
         
          <Route path="/profile" element={<ProfilePage />} />
        </Route> */}


      </Routes>
    </div>

  );
}

export default App;