import React from 'react'
import '../ShopPage/ShopPage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Lights from '../../components/Shop/Lights.js';
import Furniture from '../../components/Shop/Furniture.js';
import HomeDecor from '../../components/Shop/HomeDecor.js';
import Kitchen from '../../components/Shop/Kitchen.js';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const URL = process.env.REACT_APP_API_URL;
  const renderForAllOnly = false; 

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
        <>
          {products.map((item) => (
            <div key={item.id} className='shopPage-items'> 
              <img className='shopPage-items--card-img' src={item.image} alt={item.name} />
                  <div className='shopPage-items--card-text'>
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                  </div>
            </div>
          ))}  
        </>
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
          <NavLink to='/shop'><Button size='sm' className='' onClick={() => categoryHandler('All')}>All</Button></NavLink>
          <NavLink to='/shop/Lights'><Button size='sm' className='' onClick={() => categoryHandler('Lights')}>Lights</Button></NavLink>
          <NavLink to='/shop/Furniture'><Button size='sm' className='' onClick={() => categoryHandler('Furniture')}>Furniture</Button></NavLink>
          <NavLink to='/shop/HomeDecor'><Button size='sm' className='' onClick={() => categoryHandler('HomeDecor')}>HomeDecor</Button></NavLink>
          <NavLink to='/shop/Kitchen'><Button size='sm' className='' onClick={() => categoryHandler('Kitchen')}>Kitchen</Button></NavLink>
        </div>
        {/** conditionally displaying if route is /shop/Lights then show Lights something like that  */}
      </div>
      <div className='shopPage-item-container'>
        <div className='shopPage-item--grid'>
          {/* {products.map((item) => (
            <div key={item.id} className='shopPage-items'> 
              <img className='shopPage-items--card-img' src={item.image} alt={item.name} />
                  <div className='shopPage-items--card-text'>
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                  </div>
            </div>
          ))}   */}
          {renderCategoryComponent()}
        </div>
      </div>
    </div>
      // <div className={`shopPage-filter-container ${renderForAllOnly ? "" : "shopPage-filter-none"}`}> {/** ShopPage에서 이 class display: none 하면 밑에 다생략 그리고 따로 데이터 상품디스플레이??*/}
      //   <Lights products={products} />
      //   <Furniture products={products} />
      //   <HomeDecor products={products} />
      //   <Kitchen products={products} />
      // </div>
   
  )
}

export default ShopPage