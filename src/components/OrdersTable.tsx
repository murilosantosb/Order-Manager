import React from 'react'

// Components
import { Table } from "react-bootstrap"
import PaginationComponent from './PaginationComponent'

const OrdersTable: React.FC = () => {
  return (
  <>
    <Table hover responsive>
        <thead>
            <tr>
                <th>Clients</th>
                <th>Status</th>
                <th>Date</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <strong>Vanessa de Arruda</strong>
                    <p>vanessa.de.arruda@exemple.net</p>
                </td>
                <td>Pending</td>
                <td>2014-11-17</td>
                <td>R$ 1.729,11</td>
            </tr>
            <tr>
                <td>
                    <strong>Vanessa de Arruda</strong>
                    <p>vanessa.de.arruda@exemple.net</p>
                </td>
                <td>Pending</td>
                <td>2014-11-17</td>
                <td>R$ 1.729,11</td>
            </tr>
            <tr>
                <td>
                    <strong>Vanessa de Arruda</strong>
                    <p>vanessa.de.arruda@exemple.net</p>
                </td>
                <td>Pending</td>
                <td>2014-11-17</td>
                <td>R$ 1.729,11</td>
            </tr>
            <tr>
                <td>
                    <strong>Vanessa de Arruda</strong>
                    <p>vanessa.de.arruda@exemple.net</p>
                </td>
                <td>Pending</td>
                <td>2014-11-17</td>
                <td>R$ 1.729,11</td>
            </tr>
            <tr>
                <td>
                    <strong>Vanessa de Arruda</strong>
                    <p>vanessa.de.arruda@exemple.net</p>
                </td>
                <td>Pending</td>
                <td>2014-11-17</td>
                <td>R$ 1.729,11</td>
            </tr>
            <tr>
                <td>
                    <strong>Vanessa de Arruda</strong>
                    <p>vanessa.de.arruda@exemple.net</p>
                </td>
                <td>Pending</td>
                <td>2014-11-17</td>
                <td>R$ 1.729,11</td>
            </tr>
            <tr>
                <td>
                    <strong>Vanessa de Arruda</strong>
                    <p>vanessa.de.arruda@exemple.net</p>
                </td>
                <td>Pending</td>
                <td>2014-11-17</td>
                <td>R$ 1.729,11</td>
            </tr>
        </tbody>
    </Table>
    <PaginationComponent/>
 </> 
  )
}

export default OrdersTable