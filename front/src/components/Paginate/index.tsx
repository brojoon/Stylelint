import { useIsTablet } from '@utils/Hooks';
import React, { useCallback, useState, VFC } from 'react';

import ReactPaginate from 'react-paginate';
import { PaginateContainer } from './style';

interface Props {
  totalCount: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
}

const Paginate: VFC<Props> = ({ setPage, totalCount, perPage }) => {
  const onChangePaginate = useCallback(
    ({ selected }) => {
      setPage(selected);
    },
    [setPage],
  );

  const isTablet = useIsTablet();
  return (
    <PaginateContainer>
      <ReactPaginate
        previousLabel={'이전'}
        nextLabel={'다음'}
        breakLabel={'...'}
        onPageChange={onChangePaginate}
        breakClassName={'break-me'}
        pageCount={Math.ceil(totalCount / perPage)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={isTablet ? 1 : 2}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </PaginateContainer>
  );
};
export default Paginate;
