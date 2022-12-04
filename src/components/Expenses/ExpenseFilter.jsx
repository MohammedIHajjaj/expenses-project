import React from "react";
import styles from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const selectedYearHandler = (e) => {
    props.onFilteredYear(e.target.value);
  };

  return (
    <div className={styles["expenses-filter"]}>
      <div className={styles["expenses-filter__control"]}>
        <label>Filter by year</label>
        <select onChange={selectedYearHandler} value={props.expenseFilterYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;