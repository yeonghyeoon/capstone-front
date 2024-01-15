import React from 'react'
import '../ShopPage/ShopPage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Lights from '../../components/Shop-Category/Lights.js';
import Furniture from '../../components/Shop-Category/Furniture.js';
import HomeDecor from '../../components/Shop-Category/HomeDecor.js';
import Kitchen from '../../components/Shop-Category/Kitchen.js';
import { NavLink} from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const URL = process.env.REACT_APP_API_URL;
  // const renderForAllOnly = false; 

  const categoryHandler = (event) => {
    setCategory(event)
  }

  useEffect(() => {
    axios.get(`${URL}/products`)
      .then((response) => {
        // console.log(response.data)
        setProducts(response.data)

      })
      // .then((data) => {
      //   setProducts(data)
      // })
      .catch((error) => console.log("Error", error));
  }, [])

  const renderCategoryComponent = () => {
    switch (category) {
      case 'Lights' :
        return <Lights products={products} />;
      case 'Furniture' :
        return <Furniture products={products} />;
      case 'HomeDecor' :
        return <HomeDecor products={products} />;
      case 'Kitchen' :
        return <Kitchen products={products} />;
      default:
        return (
        <div className='shopPage-items'>
          {products.map((item) => (
            <div key={item.id} className='shopPage-items--card'> 
              <NavLink to={`/products/${item.id}`}><img className='shopPage-items--card-img' src={item.image} alt={item.name} />
                  <div className='shopPage-items--card-text'>
                      <p className='shopPage-items--card-text--name'>{item.name}</p>
                      <p className='shopPage-items--card-text--price'>${item.price}</p>
                  </div></NavLink>
            </div>
          ))}  
        </div>
        )
    }
  }

  return (
    <div className='shopPage-container'>
      {/** chevron left icon to go back to HomePage */}
      <div className='shopPage-header'>
        <div className='shopPage-header__title'>
        <NavLink to='/'><ArrowBackIcon /></NavLink>
          <h2>{category}</h2>
        </div>
        <div className='shopPage-header__btn'>
          <NavLink to='/products'><Button size='sm' className='' onClick={() => categoryHandler('All')}>All</Button></NavLink>
          <NavLink to='/products/Lights'><Button size='sm' className='' onClick={() => categoryHandler('Lights')}>Lights</Button></NavLink>
          <NavLink to='/products/Furniture'><Button size='sm' className='' onClick={() => categoryHandler('Furniture')}>Furniture</Button></NavLink>
          <NavLink to='/products/HomeDecor'><Button size='sm' className='' onClick={() => categoryHandler('HomeDecor')}>HomeDecor</Button></NavLink>
          <NavLink to='/products/Kitchen'><Button size='sm' className='' onClick={() => categoryHandler('Kitchen')}>Kitchen</Button></NavLink>
        </div>
        {/** conditionally displaying if route is /shop/Lights then show Lights something like that  */}
      </div>
      <div className='shopPage-items-container'>
        <div className='shopPage-items--grid'>
          
          {renderCategoryComponent()}
        </div>
      </div>
    </div>
  )
}

export default ShopPage