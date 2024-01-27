import React, { useEffect, useState } from 'react'
import './Cart.scss';
import { LoremIpsum } from 'react-lorem-ipsum';
import axios from 'axios';
import DeleteIcon from '../../assets/Icons/delete_outline-24px.svg';

const Cart = () => {
    const URL = process.env.REACT_APP_API_URL;
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getData();
    }, []);
    
    const getData = () => {
        axios.get(`${URL}/products`)
            .then(((response) => {
                console.log(response.data)
                setProducts(response.data)
            }))
            .catch((error) => {
                console.log("error")
            })
    }
    
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {products.map(item => (
            <div className='cart-item' key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className='cart-details'>
                    <h1>{item.name}</h1>
                    <LoremIpsum p={1} avgWordsPerSentence={2}/>
                    <div className='cart-price'>1 x ${item.price}</div>
                </div>
                <img src={DeleteIcon} alt='' />    
            </div>
        ))}
        
    </div> 
  )
}

export default Cart