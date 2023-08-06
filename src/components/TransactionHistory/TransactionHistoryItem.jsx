export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <table>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </table>
  );
};