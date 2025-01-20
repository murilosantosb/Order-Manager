"use client"
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'

// Components
import { Table } from "react-bootstrap"
import PaginationComponent from './PaginationComponent'
import { OrdersProps } from '@/interfaces/OrdersProps'
import useCentsInReais from '@/lib/useCentsInReais'

interface OrdersTableProps {
    data: OrdersProps[];
}


const OrdersTable: React.FC<OrdersTableProps> = ({ data }) => {

  return (
  <>
    <Table hover responsive className='mb-5'>
        <thead>
            <tr>
                <th>Clients</th>
                <th>Status</th>
                <th className='cursor'>
                    Date
                    <i className="bi bi-chevron-expand"></i>
                </th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {data && data ? (
                data.map((orders) => (
                    <tr key={orders.id}>
                        <td>
                            <strong>{orders.customer_name}</strong>
                            <p>{orders.customer_email}</p>
                        </td>
                        <td>
                            <strong className='border p-1 rounded-4'>
                                {orders.status}
                            </strong>
                        </td>
                        <td>{orders.order_date}</td>
                        <td>{useCentsInReais(orders.amount_in_cents)}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td>Carregando...</td>
                </tr>
            )}
        </tbody>
    </Table>
    <PaginationComponent/>
 </> 
  )
}

export default OrdersTable