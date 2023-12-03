import React from 'react';
import { Pagination } from 'react-bootstrap';
import classes from '../../UI/Peges/Pagination.module.css'

const RenderPaginationItems = ({ currentPage, totalPages, handlePageChange }) => {
  const pagesToShow = 3;

  const pageItems = [];

  if (currentPage > pagesToShow + 1) {
    pageItems.push(
      <Pagination.First key="first" onClick={() => handlePageChange(1)} />,
      <Pagination.Ellipsis key="ellipsis-prev" onClick={() => handlePageChange(1)} />
    );
  } else {
    pageItems.push(<Pagination.First key="first" />);
  }

  for (
    let page = Math.max(1, currentPage - pagesToShow);
    page <= Math.min(totalPages, currentPage + pagesToShow);
    page++
  ) {
    pageItems.push(
      <Pagination.Item
        key={page}
                active={page === currentPage}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  if (currentPage < totalPages - pagesToShow) {
    pageItems.push(
      <>
        <Pagination.Ellipsis key="ellipsis-next" onClick={() => handlePageChange(totalPages)} />
        <Pagination.Last key="last" onClick={() => handlePageChange(totalPages)} />
      </>
    );
  } else {
    pageItems.push(<Pagination.Last key="last" onClick={() => handlePageChange(totalPages)} />);
  }

  return <Pagination
    
  >{pageItems}</Pagination>;
};

export default RenderPaginationItems;
