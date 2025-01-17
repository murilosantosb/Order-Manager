'use client'
import React, { useState } from 'react';

import { Pagination } from 'react-bootstrap';


const PaginationComponent: React.FC = () => {

    const totalPages = 30;
    const itemsPerPage = 10;
    const [active, setActive] = useState(1);
    const [rangeStart, setRangerStart] = useState(1)

    const renderPaginationItems = () => {
        const items = []
        const rangeEnd = Math.min(rangeStart + itemsPerPage - 1, totalPages);

        for(let number = rangeStart; number <= rangeEnd; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === active}
                    onClick={() => setActive(number)}
                    >
                        {number}
                </Pagination.Item>
            )
        }
        return items;
    }

    const handleNextRange = () => {
        if(rangeStart + itemsPerPage <= totalPages) {
            setRangerStart(rangeStart + itemsPerPage)
            setActive(rangeStart + itemsPerPage)
        }
    }

    const handlePrevRange = () => {
        if (rangeStart - itemsPerPage > 0) {
          setRangerStart(rangeStart - itemsPerPage);
          setActive(rangeStart - itemsPerPage); // Atualiza a página ativa para o intervalo anterior
        }
      };


  return (
    <Pagination className="d-flex justify-content-center">
    <Pagination.First onClick={() => {
      setActive(1);
      setRangerStart(1); // Volta para o primeiro intervalo
    }} />
    <Pagination.Prev
      onClick={() => {
        setActive(Math.max(1, active - 1));
        if (active === rangeStart && rangeStart > 1) {
          handlePrevRange();
        }
      }}
    />
    {renderPaginationItems()}
    {rangeStart + itemsPerPage - 1 < totalPages && <Pagination.Ellipsis />}
    <Pagination.Next
      onClick={() => {
        setActive(Math.min(totalPages, active + 1));
        if (active === rangeStart + itemsPerPage - 1 && active < totalPages) {
          handleNextRange();
        }
      }}
    />
    <Pagination.Last
      onClick={() => {
        setActive(totalPages);
        setRangerStart(Math.floor((totalPages - 1) / itemsPerPage) * itemsPerPage + 1); // Vai para o último intervalo
      }}
    />
  </Pagination>
  )
}

export default PaginationComponent