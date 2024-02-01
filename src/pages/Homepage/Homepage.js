import React from 'react'
import '../Homepage/Homepage.scss';
import hero from '../../assets/Images/hero1.jpeg';
import homeDecor from '../../assets/Images/HomeDecor.jpeg';
import kitchen from '../../assets/Images/Kitchen.jpeg';
import lights from '../../assets/Images/Lights.jpeg';
import furniture from '../../assets/Images/Furniture.jpeg';
import FeatureItems from '../../components/FeatureItems/FeatureItems';
import About from '../../components/About/About';
import { NavLink} from 'react-router-dom';
import { useState, useRef } from 'react';

const Homepage = () => {
  const [category, setCategory] = useState('All');
  const aboutRef = useRef();
  // const renderForAllOnly = false; 
  const categoryHandler = (event) => {
    setCategory(event)
  }
  
  return (
    <div className='homepage-container'>
      <div className='homepage-hero'>
        <div className='homepage-hero-overlay'></div>

        <img className='homepage-hero-img' src={hero} alt='homeDecorImage'/>

        <div className='homepage-hero-contents'>  
          <p className='homepage-hero__header-text'>Elevate Your Space with Unique Finds</p>
          <p className='homepage-hero__subheader-text'>Easy,fun shopping</p>
          <NavLink to='/products'><button className='homepage-hero__btn'>Shop Now</button></NavLink> 
        </div>  
      </div>

      <div className='homepage-sorts'>
        <div className='homepage-sorts--grid'>
          <NavLink to='/products/HomeDecor' onClick={() => categoryHandler('HomeDecor')}><div className='homepage-sorts--grid-one'> {/** HomeDecor */}
            <div className='homepage-sorts--grid-overlay'></div>
            <img className='' src={homeDecor} alt="homeDecor" />
            <p className='homepage-sorts--grid-name'>HomeDecor</p>
          </div></NavLink>
          <NavLink to='/products/Kitchen' onClick={() => categoryHandler('Kitchen')}><div className='homepage-sorts--grid-two'> {/** Kitchen */}
            <div className='homepage-sorts--grid-overlay'></div>
            <img className='' src={kitchen} alt="kitchen" />
            <p className='homepage-sorts--grid-name'>Kitchen</p>
          </div></NavLink>
          <NavLink to='/products/Lights' onClick={() => categoryHandler('Lights')}><div className='homepage-sorts--grid-three'> {/** Lights */}
            <div className='homepage-sorts--grid-overlay'></div>
            <img className='' src={lights} alt="lights" />
            <p className='homepage-sorts--grid-name'>Lights</p>
          </div></NavLink>
          <NavLink to='/products/Furniture' onClick={() => categoryHandler('Furniture')}><div className='homepage-sorts--grid-four'> {/** Furniture */}
            <div className='homepage-sorts--grid-overlay'></div>
            <img className='' src={furniture} alt="furniture" />
            <p className='homepage-sorts--grid-name'>Furniture</p>
          </div></NavLink>
        </div>
      </div>

      <div className='homepage-items'>
        <h2 className='homepage-items-head'>Featured Items</h2>
        
        <FeatureItems />

        {/** Mapping get card data from api. not all the products just some of them ex)item.name, item.price, item.image */}
        {/* <div className='homepage-items--card'>   */}
          
        {/* </div> */}
      </div>
      <div id='about' ref={aboutRef} className='homepage-about-section'>
        <About />  
      </div>
        
    </div>
  )
}

export default Homepage