import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  background-color:#ffe;
  width: 600px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  th {
    width: 33%;
    color: #fff;
    background-color: blue;
    font-size: 25px;
    padding: 10px;
  }
  tbody tr:nth-child(2n) {
    background-color: aqua;
  }
`;

export const TransactionHistoryTableRow = styled.tr`
  background-color: aquamarine ;

  td {
    color: #351c75;
    font-size: 22px;
    text-align: center;
    padding: 10px 0;
  }
`;