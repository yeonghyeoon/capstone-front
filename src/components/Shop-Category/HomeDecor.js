import React from 'react'
import '../Shop-Category/HomeDecor.scss';
import { NavLink} from 'react-router-dom';

const HomeDecor = ({ products }) => {
  const filteredHomeDecorItems = products.filter((item) => item.category === "HomeDecor")
  // console.log(filteredHomeDecorItems)
  return (
    <div className='homeDecor-items'>
      {filteredHomeDecorItems.map((item) => (
        <div key={item.id} className='homeDecor-items--card'>
          <NavLink to={`/products/${item.id}`}><img className='homeDecor-items--card-img' src={item.image} alt={item.name} />
            <div className='homeDecor-items--card-text'>
              <p className='homeDecor-items--card-text--name'>{item.name}</p>
              <p className='homeDecor-items--card-text--price'>${item.price}</p>
            </div></NavLink>
        </div>
      ))}
    </div>
  )
}

export default HomeDecor