import React from 'react'
import '../FeatureItems/FeatureItems.scss';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink} from 'react-router-dom';
import { Box } from "@chakra-ui/react"

const FeatureItems = () => {
    // const URL = "http://localhost:5050"
    const URL = process.env.REACT_APP_API_URL;

    const [product, setProduct] = useState([]); 


    const getData = () => {
        axios.get(`${URL}/products`)
            .then((response) => {
                // console.log(response.data)
                setProduct(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getData();
    }, [])

    const filteredItems = product.filter(item => item.id <= 4);

  return (
    <div className='homepage-items--card'>
        <div className='homepage-items--card-grid'>
            {filteredItems.map((item) => (
            <NavLink to={`/products/${item.id}`} key={item.id}><div className='homepage-items--card-item'>
                <Box className='homepage-items--card-container' backgroundColor='#f5f5f5' >
                    <div className='homepage-items--card-image-container'>
                        <img className='homepage-items--card-img' src={item.image} alt={item.name} />       
                    </div>
                </Box>
                
                <div className='homepage-items--card-text'>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div>
            </div></NavLink>
            ))}
        </div>
    </div>

  )
}

export default FeatureItems