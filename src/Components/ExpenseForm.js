import React from 'react'
import { useState } from 'react'

const ExpenseForm = ({ onSubmit }) => {
  const [data, setdata] = useState({ ExpenseName: "", ExpenseType: "credit", Category: "Income", Amount: "" })



  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(data)
    setdata({ ExpenseName: "", ExpenseType: "credit", Category: "Income", Amount: "" })

  };


return (
  <div className="container1">
    <h2>Transaction Form</h2>
    <br />
    <form className="flex" action="" onSubmit={submitForm}>

      <label> Expense Name</label>
      <input type="text" name='ExpenseName' value={data.ExpenseName} onChange={handleChange} />


      <label>Expense Type</label>
      <select name='ExpenseType' value={data.ExpenseType} onChange={handleChange} >
        <option value="credit">CREDIT</option>
        <option value="debit">DEBIT</option>
      </select>


      <label>Category</label>
      <select name='Category' value={data.Category} onChange={handleChange} >
        <option value="Income">Income</option>
        <option value="Grocery">Grocery</option>
        <option value="Shopping">Shopping</option>
        <option value="Travel">Travel</option>
        <option value="Rent or Bills">Rent/Bills</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>



      <label>Amount</label>
      <input type="text" name='Amount' value={data.Amount} onChange={handleChange} />

      <input type="submit" value="Make Transaction"  />
    </form>
  </div>
)
}

export default ExpenseForm
