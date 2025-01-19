'use client'

import React, { useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useOrdersContext } from '@/context/OrdersContext';


const Status: React.FC = () => {
    const [selected, setSelected] = useState("Status")

    const { setStatus } = useOrdersContext()

    const handleStatusClick = (status: "pending" | "completed" | "") => {
        setSelected(status)
        setStatus(status)
    }

  return (
    <section>
        <DropdownButton variant='outline-dark' title={selected || "Status"}>
            <Dropdown.Item onClick={() => handleStatusClick("")}>
                Status
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleStatusClick("pending")}>
                Pending
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleStatusClick("completed")}>
                Completed
            </Dropdown.Item>
        </DropdownButton>
    </section>
  )
}

export default Status