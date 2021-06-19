import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

function Expense() {
  const expenses = [
    {
      id: "e1",
      title: "MyT",
      amount: 1400,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "CEB",
      amount: 600,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "CWA",
      amount: 400,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Groceries",
      amount: 5000,
      date: new Date(2021, 5, 12),
    },
  ];
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
}
export default Expense;
