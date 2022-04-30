import { useIsTablet } from '@utils/Hooks';
import { useRouter } from 'next/router';

import React, { useCallback, useState, VFC } from 'react';

import ReactPaginate from 'react-paginate';
import { PaginateContainer } from './style';

interface Props {
  totalCount: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
  page: number;
}

const Paginate: VFC<Props> = ({ setPage, totalCount, perPage, page }) => {
  const router = useRouter();
  const { type, code } = router.query;
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
        pageCount={Math.ceil(totalCount / perPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={isTablet ? 1 : 2}
        containerClassName={'pagination'}
        activeClassName={'active'}
        hrefBuilder={() => '#'}
        hrefAllControls={true}
        forcePage={page}
      />
    </PaginateContainer>
  );
};
export default Paginate;
