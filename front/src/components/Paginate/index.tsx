import React, { useCallback, useState, VFC } from 'react';

import ReactPaginate from 'react-paginate';
import { PaginateContainer } from './style';

interface Props {
  totalCount: number;
  setPage: (selected: number) => void;
  perPage: number;
}

const Paginate: VFC<Props> = ({ setPage, totalCount, perPage }) => {
  const onChangePaginate = useCallback(({ selected }) => {
    setPage(selected);
  }, []);

  return (
    <PaginateContainer>
      <ReactPaginate
        previousLabel={'이전'}
        nextLabel={'다음'}
        breakLabel={'...'}
        onPageChange={onChangePaginate}
        breakClassName={'break-me'}
        pageCount={Math.ceil(totalCount / perPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </PaginateContainer>
  );
};
export default Paginate;
