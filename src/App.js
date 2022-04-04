import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Chandpur from './components/Contact/Chandpur';
import Chittagong from './components/Contact/Chittagong';
import Contact from './components/Contact/Contact';
import Dhaka from './components/Contact/Dhaka';
import Gazipur from './components/Contact/Gazipur';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Dashboard
        ></Dashboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/contact" element={<Contact></Contact>}>
          <Route path='/dhaka' element={<Dhaka></Dhaka>}></Route>
          <Route path='/dhaka' element={<Gazipur></Gazipur>}></Route>
          <Route path='/chittagong' element={<Chittagong></Chittagong>}></Route>
          <Route path='/chandpur' element={<Chandpur></Chandpur>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
