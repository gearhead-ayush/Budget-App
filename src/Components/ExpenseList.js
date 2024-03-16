import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import TransactionList from './TransactionList'
import Piechart from './Piechart'


const ExpenseList = ({ colors, Delete, formDataArray, total, totalCredit, totalDebit, chart }) => {



  return (

    <div className="container2">

      <div className="summary">
        <ExpenseSummary total={total} totalCredit={totalCredit} totalDebit={totalDebit} />
        <Piechart chart={chart} totalCredit={totalCredit} totalDebit={totalDebit} colors={colors} />
      </div>
      
      <TransactionList formDataArray={formDataArray} colors={colors} Delete={Delete} />


    </div >

  )
}

export default ExpenseList



