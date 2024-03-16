import React from 'react'
import { useState } from 'react'

const ExpenseForm = ({ onSubmit, chart }) => {

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

          {chart.map((item) => (
              <option value={item.name}>{item.name}</option>
          ))}

        </select>


        <label>Amount</label>
        <input type="text" name='Amount' value={data.Amount} onChange={handleChange} />

        <input type="submit" value="Make Transaction" />
      </form>

    </div>
  )
}

export default ExpenseForm
