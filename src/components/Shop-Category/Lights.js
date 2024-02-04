import React from 'react'
import { NavLink} from 'react-router-dom';
import '../Shop-Category/Lights.scss';

const Lights = ({ products }) => {
  // console.log(products)
  const filteredLightsItems = products.filter((item) => item.category === "Lights")
  console.log(filteredLightsItems)
  return (
    <div className='lights-items'>
      {filteredLightsItems.map((item) => (
        <div key={item.id} className='lights-items--card'>
          <NavLink to={`/products/${item.id}`}><img className='lights-items--card-img' src={item.image} alt={item.name} />
            <div className='lights-items--card-text'>
              <p className='lights-items--card-text--name'>{item.name}</p>
              <p className='lights-items--card-text--price'>${item.price}</p>
            </div></NavLink>
        </div>
      ))}
    </div>
  )
}

export default Lights