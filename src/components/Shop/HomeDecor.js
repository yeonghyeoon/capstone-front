import React from 'react'

const HomeDecor = ({ products }) => {
  const filteredHomeDecorItems = products.filter((item) => item.category === "HomeDecor")
  // console.log(filteredHomeDecorItems)
  return (
    <div className='homeDecor-container'>
      {filteredHomeDecorItems.map((item) => (
        <div key={item.id} className='homeDecor-items'>
          <img className='homeDecor-items--card-img' src={item.image} alt={item.name} />
            <div className='homeDecor-items--card-text'>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default HomeDecor