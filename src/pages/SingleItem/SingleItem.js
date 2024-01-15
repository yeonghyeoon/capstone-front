import React, { useEffect, useState } from 'react'
import './SingleItem.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { LoremIpsum } from 'react-lorem-ipsum';

const SingleItem = () => {
    const { id } = useParams();
    const URL = process.env.REACT_APP_API_URL;
    console.log("Rendering SingleItem component")
    const [singleItem, setSingleItem] = useState([]);
    const [quantity, setQuantity] = useState("1");
    
    useEffect(() => {
        console.log("Id", id);
        axios.get(`${URL}/products/${id}`)
            .then((response) => {
                setSingleItem(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log("Error",error)
            })
    }, [id])

  return (
    <div className='singleItem'>
        <div className='singleItem-title'>{singleItem.name}</div>
        <div className='singleItem-imgContainer'>
            <img className='singleItem-img' src={singleItem.image} alt={singleItem.name}/>    
        </div>

        <div className='singleItem-reference'>
            <img className='singleItem-reference--img' src={singleItem.image} alt={singleItem.name} />
            <img className='singleItem-reference--img' src={singleItem.referenceImage} alt={singleItem.name} />
        </div>
        
        <div className='singleItem-info'>
            {/** 설명 Lorem ipsum... */}
            <div className='singleItem-info--text'>
                <LoremIpsum p={1} avgWordsPerSentence={2}/>    
            </div>
            <div className='singleItem-quantity'>
                <p>Quantity</p>
                <div className='singleItem-quantity--btn'>
                    <button>-</button>
                    <p>{quantity}</p>
                    <button>+</button>    
                </div>
                <p className='singleItem-info--price'>${singleItem.price}</p>    
            </div>
        
            <div className='singleItem-info--btn'>
                <Button colorScheme='messenger' size='lg' className=''>ADD TO CART</Button>
                <Button colorScheme='messenger' size='lg' className=''>BUY NOW</Button>    
            </div>
            
        </div>
        <div className=''>
            <div className='singleItem-description'>
                <div className='singleItem-size'>{singleItem.size}</div>
                <div className='singleItem-weight'>{singleItem.weight}</div>
            </div>
        </div>    
    </div>
    

  )
}

export default SingleItem