import React from 'react'

const Furniture = ({ products }) => {
  const filteredFurnitureItems = products.filter((item) => item.category === "Furniture")
  // console.log(filteredFurnitureItems)
  return (
    <div className='furniture-container'>
      {filteredFurnitureItems.map((item) => (
        <div key={item.id} className='furniture-items'>
          <img className='furniture-items--card-img' src={item.image} alt={item.name} />
            <div className='furniture-items--card-text'>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Furniture