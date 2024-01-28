import React, { useEffect, useState } from 'react'
import './Cart.scss';
import { LoremIpsum } from 'react-lorem-ipsum';
import axios from 'axios';
import DeleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import { Button, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const URL = process.env.REACT_APP_API_URL;
    const [products, setProducts] = useState([]);
    const cartProducts = useSelector(state=>state.cart.products)
    
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

    const itemsForTesting = products.filter(item => item.id <= 2);
    
  return (
    <div className='cart'>
        <Heading as='h1' size='md' color='grey'>Products in your cart</Heading>
        {cartProducts.map(item => (
            <div className='cart-item' key={item.id}>
                <img className='cart-item__img' src={item.img} alt={item.name} />
                <div className='cart-item__details'>
                    <Heading as='h1' size='3x1' color='grey'>{item.name}</Heading>
                    {/* <LoremIpsum p={1} avgWordsPerSentence={0}/> */}
                    <p className='cart-item__details--name'>{item.name}</p>
                    <div className='cart-item--price'>{item.quantity} x ${item.price}</div>
                </div>
                <img className='cart-item__deleteIcon' src={DeleteIcon} alt='' />    
            </div>
        ))}
        <div className='cart-subtotal'>
            <div className='cart-subtotal__head'>
                <h1>SUBTOTAL</h1>  
                <span>$19</span>  
            </div>
            <div className='cart-subtotal__btn'>
                <Button colorScheme='messenger'>PROCEED TO CHECKOUT</Button>
            </div>
            <div className='cart-subtotal__reset'>
                <p>Reset Cart</p>
            </div>
        </div>
        
    </div> 
  )
}

export default Cart