import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/Homepage/Homepage";
import ShopPage from './pages/ShopPage/ShopPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/shop' element={<ShopPage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path='*' element={<Homepage/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
