import { TransactionHistoryTableRow } from "./TransactionHistory.styled";



export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TransactionHistoryTableRow>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionHistoryTableRow>
  );
};