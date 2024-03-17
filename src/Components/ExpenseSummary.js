import React from 'react'
import { useContext } from 'react'
import { allData } from './Context/Context'

const ExpenseSummary = () => {

  const value = useContext(allData)
  return (

    <div>
      <h2>Expense Summary</h2>
      <br />

      <table className='summary-table'>
        <tbody>

          <tr>
            <td><b>NET AMOUNT</b></td>
            {value.total >= 0 ? (
              <td className='green'>{value.total}</td>
            ) : (
              <td className='red'>{value.total}</td>
            )}
          </tr>

          <tr>
            <td><b>TOTAL CREDIT</b></td>
            <td >{value.totalCredit}</td>
          </tr>

          <tr>
            <td><b>TOTAL DEBIT</b></td>
            <td>{value.totalDebit}</td>
          </tr>

        </tbody>
      </table>

    </div>
  )
}

export default ExpenseSummary
