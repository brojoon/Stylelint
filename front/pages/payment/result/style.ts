import styled from 'styled-components';

export const ResultContainer = styled.section`
  & .title-container {
    border-bottom: 1px solid #eeeeee;
  }

  & .title-wrapper {
    padding: 0 1%;
    max-width: 1300px;
    margin: 0 auto;
  }

  & .title {
    font-size: 2.375rem;
    color: #363636;
    font-weight: bold;
    letter-spacing: -1px;

    width: 100%;
    margin: 20px 0;

    background: url(/img/purchase_pagenation.png) right -208px no-repeat;
  }

  & .body-container {
    padding: 0 1%;
    max-width: 1300px;
    margin: 0 auto;
  }

  & .body-wrapper {
    margin: 50px 0;
  }

  & .body-info {
    text-align: center;
    font-size: 28px;
  }

  & .body-info > p:nth-child(1) {
    font-weight: bold;
    margin-bottom: 10px;
  }

  & .body-info > p:nth-child(1) > span {
    color: #966e46;
  }

  .shopping-info-btn {
    display: flex;
    justify-content: center;
  }

  .shopping-info-btn > button {
    overflow: hidden;
    display: inline-block;
    width: 270px;
    height: 64px;
    padding: 18px 0;
    margin: 40px 0 0;
    font-size: 22px;
    line-height: 28px;
    font-weight: bold;
    vertical-align: middle;
    font-weight: normal;
    border-radius: 8px;
    box-sizing: border-box;
    color: #fff;
    background-color: #0028ac;
    margin-bottom: 100px;
  }

  .order-info-table-container {
    border-top: 2px solid #435b86;
    border-bottom: 1px solid #a1adc2;
  }

  .order-info-table-container > table {
    border-collapse: collapse;
    width: 100%;
  }

  .order-table-tbody > tr:nth-child(1) > td:nth-child(1) {
    background-color: #f7f7f7;
    padding: 13px 20px;
    border-bottom: 1px solid #f1f1f1;
    border-right: 1px solid #f1f1f1;
  }

  .order-table-tbody > tr:nth-child(1) > td:nth-child(1) p {
    background: url(/img/dot_2x2_777.png) no-repeat 20px 10px;
    color: #676767;
  }

  .order-table-tbody > tr:nth-child(1) > td:nth-child(1) span {
    padding-left: 30px;
    font-weight: bold;
  }

  .order-table-tbody > tr:nth-child(1) > td:nth-child(2) {
    background-color: #f7f7f7;
  }

  .order-table-tbody > tr:nth-child(1) > td:nth-child(2) p {
    display: block;
    padding: 13px 20px;
    color: #3371c9;
    font-size: 18px;
    vertical-align: middle;
    font-weight: 600;
  }

  .order-table-tbody > tr:nth-child(2) > td {
    background-color: #f7f7f7;
    padding: 13px 20px;
    border-bottom: 1px solid #f1f1f1;
    border-top: 1px solid #f1f1f1;
  }

  .order-table-tbody > tr:nth-child(2) > td > div {
    color: #ef2705;
  }

  .order-table-tbody > tr:nth-child(2) > td > div > span:nth-child(1) {
    font-size: 33px;
    font-family: Tahoma;
    letter-spacing: -1px;
    font-weight: 600;
    margin-right: 3px;
  }

  .order-table-tbody > tr:nth-child(2) > td > div > span:nth-child(1) {
    margin-top: 16px;
    padding-left: 3px;
    font-size: 30px;
    white-space: nowrap;
  }

  .order-table-tbody > tr:nth-child(3) > td:nth-child(1) {
    padding: 13px 20px;
  }

  .order-table-tbody > tr:nth-child(3) > td:nth-child(1) > p {
    background: url(/img/dot_2x2_777.png) no-repeat 20px 10px;
    padding-left: 30px;
    font-weight: 600;
    color: #676767;
  }

  .order-table-tbody > tr:nth-child(3) > td:nth-child(2) {
    padding: 13px 20px;

    border-left: 1px solid #f1f1f1;
  }

  .order-table-tbody > tr:nth-child(3) > td:nth-child(2) > p {
    line-height: 24px;
    color: #777;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 13px;
  }

  .note-tip {
    margin: 80px 0 200px;
    padding: 20px 40px;
    border: 1px solid #e1e1e1;
  }

  .note-tip > p {
    margin-bottom: 10px;
    color: #222;
    font-size: 12px;
    font-weight: bold;
  }

  .note-tip > ul > li {
    padding-left: 7px;
    background: url(/img/dot_2x2_777.png) no-repeat 0 10px;
    font-size: 11px;
    color: #676767;
    line-height: 24px;
  }
`;
