import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 12px;

  .selected-list {
    position: relative;
    margin-top: 10px;
    padding: 14px 13px 11px;
    background: #f9f9fa;
    border: 1px solid #f2f2f2;
    border-radius: 2px;
    border-bottom: 1px solid #bec1c7;
    font-weight: bold;
    color: #233549;
    opacity: 0.8;
  }

  .product-option {
    font-weight: 500;
    font-size: 14px;
  }

  .product-info {
    display: flex;
    justify-content: space-between;
  }

  .close {
    margin-left: 10px;
  }
`;
