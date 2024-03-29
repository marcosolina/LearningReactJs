import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem {...expense} key={expense.id} />
      ))}
    </ul>
  );
};

export default ExpensesList;
