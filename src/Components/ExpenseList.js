import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import TransactionList from './TransactionList'
import Piechart from './Piechart'



const ExpenseList = () => {

  return (

    <div className="container2">

      <div className="summary">
        <ExpenseSummary />
        <Piechart />
      </div>

      <TransactionList />


    </div >

  )
}

export default ExpenseList



