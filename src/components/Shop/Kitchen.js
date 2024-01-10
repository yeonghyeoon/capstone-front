import React from 'react'

const Kitchen = ({ products }) => {
  const filteredKitchenItems = products.filter((item) => item.category === "Kitchen")
  // console.log(filteredKitchenItems)
  return (
    <div className='kitchen-container'>
      {filteredKitchenItems.map((item) => (
        <div key={item.id} className='kitchen-items'>
          <img className='kitchen-items--card-img' src={item.image} alt={item.name} />
            <div className='kitchen-items--card-text'>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Kitchen