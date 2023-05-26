'use client'

import React from 'react'

function CartItem() {
    
    const orders =  JSON.parse(localStorage.getItem("orders")) || [];
    console.log(orders)
  return (
      <div>
          {orders.map(order => (
              <li key={order._id}>
                  <p>{order.name}</p>
              </li>
          ))}
    </div>
  )
}

export default CartItem