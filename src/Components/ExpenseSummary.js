import React from 'react'

const ExpenseSummary = ({total, totalCredit, totalDebit}) => {
  return (
    
    <div>
        <h2>Expense Summary</h2>
        <br />

        <table className='summary-table'>
          <tbody>

            <tr>
              <td><b>NET AMOUNT</b></td>
              {total >= 0 ? (
                <td className='green'>{total}</td>
              ) : (
                <td className='red'>{total}</td>
              )}
            </tr>

            <tr>
              <td><b>TOTAL CREDIT</b></td>
              <td >{totalCredit}</td>
            </tr>

            <tr>
              <td><b>TOTAL DEBIT</b></td>
              <td>{totalDebit}</td>
            </tr>

          </tbody>
        </table>
      
    </div>
  )
}

export default ExpenseSummary
