import styled from '@emotion/styled';

export const PaginateContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  .pagination {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pagination a {
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    border: 1px solid #dee2e6;
    line-height: 1.25;
    color: #777;
    background-color: #fff;
  }

  .pagination a:hover {
    color: #6c757d;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
  }

  .pagination li:first-child a {
    margin-left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .pagination li:last-child a {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .pagination .active a {
    color: #fff;
    background-color: #777;
    border-color: #777;
  }

  .disabled a {
    color: #6c757d;
    pointer-events: none;
    cursor: auto;
    background-color: #fff;
    border-color: #dee2e6;
  }

  .list-group {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    padding-left: 0;
    border-radius: 0.25rem;
  }

  .list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  .list-group-item:last-child {
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  .list-group-item + .list-group-item {
    border-top-width: 0;
  }

  .pagination .active:hover {
    color: #fff;
    background-color: #777;
    border-color: #777;
  }
`;
