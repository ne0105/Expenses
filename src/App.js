//import React from "react";
import Expense from "./components/Expenses/Expense.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expense)
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense />
    </div>
  );
};

export default App;
