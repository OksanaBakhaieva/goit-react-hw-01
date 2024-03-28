import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.table}>
        <thead>
          <tr className={css.row}>
            <th className={css.header}>Type</th>
            <th className={css.header}>Amount</th>
            <th className={css.header}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className={css.row}>
              <td className={css.data}>{item.type}</td>
              <td className={css.data}>{item.amount}</td>
              <td className={css.data}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;