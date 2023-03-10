import React from 'react';
import './index.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import GlobalProvider from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
    <Header/>
  <Balance/>
  <IncomeExpense/>
  <TransactionList/>
  <AddTransaction/>
  </GlobalProvider>
  )
}

export default App;
