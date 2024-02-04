import React from 'react'
import '../ShopPage/ShopPage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink} from 'react-router-dom';
import { Button } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useParams } from 'react-router-dom';

const ShopPage = () => {
  const { category: initialCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(initialCategory || 'All');
  const URL = process.env.REACT_APP_API_URL;

  const categoryHandler = (category) => {
    setCategory(category)
  }

  const filteredProducts = category === 'All' ? products: products.filter(item => item.category === category);

  useEffect(() => { 
    axios.get(`${URL}/products`)
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => console.log("Error", error));
  }, [category])

  return (
    <div className='shopPage-container'>
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
      </div>
      <div className='shopPage-items-container'>
        <div className='shopPage-items--grid'>
          <div className='shopPage-items'>
          {filteredProducts.map((item) => (
            <div key={item.id} className='shopPage-items--card'> 
              <NavLink to={`/products/${item.id}`}><img className='shopPage-items--card-img' src={item.image} alt={item.name} />
                  <div className='shopPage-items--card-text'>
                      <p className='shopPage-items--card-text--name'>{item.name}</p>
                      <p className='shopPage-items--card-text--price'>${item.price}</p>
                  </div></NavLink>
            </div>
          ))}  
        </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage