import React from 'react'
import '../Shop-Category/Furniture.scss';
import { NavLink} from 'react-router-dom';

const Furniture = ({ products }) => {
  const filteredFurnitureItems = products.filter((item) => item.category === "Furniture")
  // console.log(filteredFurnitureItems)
  return (
    <div className='furniture-items'>
      {filteredFurnitureItems.map((item) => (
        <div key={item.id} className='furniture-items--card'>
          <NavLink to={`/products/${item.id}`}><img className='furniture-items--card-img' src={item.image} alt={item.name} />
            <div className='furniture-items--card-text'>
              <p className='furniture-items--card-text--name'>{item.name}</p>
              <p className='furniture-items--card-text--price'>${item.price}</p>
            </div></NavLink>
        </div>
      ))}
    </div>
  )
}

export default Furniture