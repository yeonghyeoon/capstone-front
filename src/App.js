import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/Homepage/Homepage";
import ShopPage from './pages/ShopPage/ShopPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import theme from './components/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Lights from './components/Shop/Lights';
import Furniture from './components/Shop/Furniture';
import HomeDecor from './components/Shop/HomeDecor';
import Kitchen from './components/Shop/Kitchen';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/shop' element={<ShopPage/>}>
              <Route path='/shop/Lights' element={<Lights/>}></Route>
              <Route path='/shop/Furniture' element={<Furniture/>}></Route>
              <Route path='/shop/HomeDecor' element={<HomeDecor/>}></Route>
              <Route path='/shop/Kitchen' element={<Kitchen/>}></Route>
            </Route>
            {/* <Route path='shop/product/:id' element={</>}></Route> */}

            <Route path='/about' element={<AboutPage/>}></Route>
            <Route path='/contact' element={<ContactPage/>}></Route>
            <Route path='*' element={<Homepage/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
