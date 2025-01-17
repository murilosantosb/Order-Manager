"use client"
import React from 'react'

// Components


const OrdersContainer: React.FC = () => {
  return (
    <section className='m-0 d-flex flex-column justify-content-between'>
        <h1>Orders</h1>
        <p className='text-secondary'>Record your customer orders</p>

        <section className='d-flex justify-content-between '>
            <span>
              <i className='bi bi-search'></i>
              <input className='input-search' type="text" placeholder='search by name'/>
            </span>

            <span className='button-status'>
              <i className="bi bi-funnel"></i>
              <p>Status</p>
            </span>
        </section>
    </section>
  )
}

export default OrdersContainer
