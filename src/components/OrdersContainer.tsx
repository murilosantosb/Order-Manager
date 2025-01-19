"use client"
import React from 'react'

// Hooks
import { useOrdersContext } from '@/context/OrdersContext'


// Components
import Status from './Status'


const OrdersContainer: React.FC = () => {
  const { search, setSearch } = useOrdersContext()
  

  const handleSearchClick = (e: React.ChangeEvent<HTMLInputElement>) => {
     setSearch(e.target.value)
     console.log(search)
  }

  return (
    <section className='m-0 d-flex flex-column justify-content-between'>
        <h1>Orders</h1>
        <p className='text-secondary'>Record your customer orders</p>

        <section className='d-flex justify-content-between '>
            <span>
              <i className='bi bi-search'></i>
              <input
                className='input-search'
                type="text"
                placeholder='search by name'
                onChange={(e) => handleSearchClick(e)}
              />
            </span>

            <Status />
        </section>
    </section>
  )
}

export default OrdersContainer
