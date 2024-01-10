import React from 'react'

const Lights = ({ products }) => {
  // console.log(products)
  const filteredLightsItems = products.filter((item) => item.category === "Lights")
  console.log(filteredLightsItems)
  return (
    <div className='lights-container'>
      {filteredLightsItems.map((item) => (
        <div key={item.id} className='lights-items'>
          <img className='lights-items--card-img' src={item.image} alt={item.name} />
            <div className='lights-items--card-text'>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Lights