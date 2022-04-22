import React, { useState } from 'react';

import ReactPaginate from 'react-paginate';
import { MyPaginate } from './style';

const Paginate = () => {
  const [page, setPage] = useState(1);

  return (
    <MyPaginate
      pageCount={10}
      pageRangeDisplayed={10}
      marginPagesDisplayed={0}
      breakLabel={''}
      previousLabel={'이전'}
      nextLabel={'다음'}
      containerClassName={'pagination'}
      activeClassName={'currentPage'}
      previousClassName={'pageLabel-btn'}
      nextClassName={'pageLabel-btn'}
    />
  );
};
export default Paginate;
