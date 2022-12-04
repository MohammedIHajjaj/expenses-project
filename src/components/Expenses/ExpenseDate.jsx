import Card from "../UI/Card";
import styles from "./ExpenseDate.module.css";

const ExpenseDate = ({ date }) => {
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.toLocaleString("en-US", { year: "numeric" });
  //   const year = date.getFullYear();

  return (
    <Card className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__year"]}>{year}</div>
      <div className={styles["expense-date__day"]}>{day}</div>
    </Card>
  );
};

export default ExpenseDate;
