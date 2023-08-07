import React from 'react'

export default function Food({food}) {
  return (
    <div key={food.id} className="bg-white p-3 rounded-2xl">
          <div className="flex justify-center items-center">
          <img src={food.img} alt={food.name} className="w-96 h-80 object-cover rounded-2xl"/>
          </div>
          <h1>{food.name}</h1>
          <p>{food.country}</p>
          <p>{food.price}</p>
          <hr />
          <button>Add to Cart</button>
          <hr />
          <button>Buy Now</button>
        </div>
  )
}
