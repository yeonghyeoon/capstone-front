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
import Lights from './components/Shop-Category/Lights';
import Furniture from './components/Shop-Category/Furniture';
import HomeDecor from './components/Shop-Category/HomeDecor';
import Kitchen from './components/Shop-Category/Kitchen';
import SingleItem from './pages/SingleItem/SingleItem';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar/>
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/products' element={<ShopPage/>}>
              <Route path='/products/Lights' element={<Lights/>}></Route>
              <Route path='/products/Furniture' element={<Furniture/>}></Route>
              <Route path='/products/HomeDecor' element={<HomeDecor/>}></Route>
              <Route path='/products/Kitchen' element={<Kitchen/>}></Route>
              
            </Route>
            <Route path='/products/:id' element={<SingleItem/>}></Route>
            {/* <Route path='/about' element={<AboutPage/>}></Route>   */}
            {/* <Route path='/contact' element={<ContactPage/>}></Route> */}
            <Route path='*' element={<Homepage/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
