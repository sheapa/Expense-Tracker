import React, {useState} from 'react';

import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e5',
    title: 'Azure Subscription',
    amount: 800,
    date: new Date(2023, 5, 12),
  },
  {
    id: 'e6',
    title: 'Amazon Subscription',
    amount: 150,
    date: new Date(2024, 5, 12),
  },
  {
    id: 'e7',
    title: 'IRS',
    amount: 1800,
    date: new Date(2025, 5, 12),
  },
  {
    id: 'e8',
    title: 'AWS',
    amount: 500,
    date: new Date(2026, 5, 12),
  }
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;