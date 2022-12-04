import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props /*{item}*/) => {
  return (
    <Card className={styles["expense-item"]}>
      <ExpenseDate date={props.item.date} />
      <div className={styles["expense-item__description"]}>
        <h2>{props.item.title}</h2>
        <div className={styles["expense-item__price"]}>
          ${props.item.amount}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
