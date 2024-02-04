import React from 'react'
import { Heading } from "@chakra-ui/react";
import './MayLike.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom';

const MayLike = () => {
    const [randomItems, setRandomItems] = useState([]);
    const URL = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${URL}/products`)
                const allItems = response.data

                const randomItems = allItems.sort(() => Math.random() - 0.5)
                const selectedRandomItems = randomItems.slice(0,4)

                setRandomItems(selectedRandomItems)

            } catch(error) {
                console.log("error")
            }
        }
        fetchData();
    }, [])
  return (
    <div className='mayLike-container'>
        <div className='mayLike-title'>
            <Heading as='h1' fontSize='30px'>
                You May Also Like
            </Heading>
        </div>
        <div className='mayLike-items'>
            {randomItems.map(item => (
                <div key={item.id} className='mayLike-items--card'>
                    <NavLink to={`/products/${item.id}`}><img src={item.image} alt={item.name} />
                    <div className='mayLike-items--text'>
                        <p>{item.name}</p>
                        <p className='mayLike-items--text-price'>${item.price}</p>
                    </div></NavLink>   
                </div> 
            ))}
        </div>
    </div>
  )
}

export default MayLike