import { useForm } from "react-hook-form"
import React from 'react'

const ExpenseForm = ({onSubmit}) => {

  const {
    register,
    handleSubmit,
  } = useForm()

  const submitForm = (data) => {
    
    onSubmit(data)
  }

  return (
    <div className="container1">
      <h1>Expenses</h1>
      <form className="flex" action="" onSubmit={handleSubmit(submitForm)}>

        <label> Expense Name</label>
        <input  {...register("ExpenseName")} type="text" />
        <label>Expense Type</label>


        <select  {...register("ExpenseType")} >
          <option value="credit">CREDIT</option>
          <option value="debit">DEBIT</option>
        </select>

        <label>Category</label>
        <input {...register("Category")} type="text" />


        <label>Amount</label>
        <input {...register("Amount")} type="text" />

        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default ExpenseForm
