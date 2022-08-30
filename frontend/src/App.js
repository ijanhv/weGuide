import Home from './components/LandingPage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/views/users/Login';
import SignUp from './components/views/users/SignUp';
import Blogs from './components/views/shared/Blogs';

function App() {
  return (
    // <div className="">
    //   <Home/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
