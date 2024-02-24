import React from 'react'


const ExpenseList = ({ formDataArray, total }) => {



  return (
    <div className="container2">
      <h1>Expense List</h1>



      {formDataArray.map((items, index) => {
        return (<div key={index} className="card">
          <div className="name">{items.ExpenseName}</div>
          <div className="type">{items.ExpenseType}</div>
          <div className="category">{items.Category}</div>

          {items.ExpenseType === "credit" ? (
            <div className="amount green">{items.Amount}</div>
          ) : (
            <div className="amount red">{items.Amount}</div>
          )}


          {total[index + 1] >= 0 ? (
            <div className="green"> <b> NET AMOUNT :</b> {total[index + 1]}</div>

          ) : (
            <div className="red"> <b> NET AMOUNT :</b> {total[index + 1]}</div>

          )}










        </div>)

      })}




    </div>

  )
}

export default ExpenseList



