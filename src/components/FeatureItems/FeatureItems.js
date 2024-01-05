import React from 'react'
import '../FeatureItems/FeatureItems.scss';
import { useState,useEffect } from 'react';
import axios from 'axios';

const FeatureItems = () => {
    // const URL = "http://localhost:5050"
    const URL = process.env.REACT_APP_API_URL;

    const [product, setProduct] = useState([]); 


    const getData = () => {
        axios.get(`${URL}/product`)
            .then((response) => {
                console.log(response.data)
                setProduct(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getData();
    }, [])

    const filteredItems = product.filter(item => item.id <= 6);

  return (
    <div className='homepage-items--card'>
        <div className='homepage-items--card-grid'>
            {filteredItems.map((item) => (
            <div key={item.id} className='homepage-items--card-item'>
                <img className='homepage-items--card-img' src={item.image} alt={item.name} />
                <div className='homepage-items--card-text'>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div>
            </div>
            ))}
        </div>
    </div>

  )
}

export default FeatureItems