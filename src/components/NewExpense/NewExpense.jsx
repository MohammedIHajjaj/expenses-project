import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css";

const NewExpense = ({ onAddHandler }) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const cancelHandler = () => {
    setAddNewExpense(false);
  };

  return (
    <div className={styles["new-expense"]}>
      {!addNewExpense ? (
        <button onClick={() => setAddNewExpense(true)}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onAddHandler={onAddHandler}
          onCancelHandler={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
