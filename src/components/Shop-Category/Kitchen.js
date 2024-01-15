import React from 'react'
import '../Shop-Category/Kitchen.scss';
import { NavLink} from 'react-router-dom';

const Kitchen = ({ products }) => {
  const filteredKitchenItems = products.filter((item) => item.category === "Kitchen")
  // console.log(filteredKitchenItems)
  return (
    <div className='kitchen-items'>
      {filteredKitchenItems.map((item) => (
        <div key={item.id} className='kitchen-items--card'>
          <NavLink to={`/products/${item.id}`}><img className='kitchen-items--card-img' src={item.image} alt={item.name} />
            <div className='kitchen-items--card-text'>
              <p className='kitchen-items--card-text--name'>{item.name}</p>
              <p className='kitchen-items--card-text--price'>${item.price}</p>
            </div></NavLink>
        </div>
      ))}
    </div>
  )
}

export default Kitchen