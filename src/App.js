import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import './App.css';
import { useState } from 'react';


function App() {
  const [formDataArray, setformDataArray] = useState([])
  const [total, settotal] = useState([0])
  const handleFormSubmit = (data) => {
    setformDataArray([...formDataArray, data])


    {
      data.ExpenseType === "credit" ? (
        settotal([...total, parseFloat(data.Amount) + parseFloat(total[total.length - 1])])


      ) : (
      settotal([...total, parseFloat(total[total.length - 1]) - parseFloat(data.Amount)])

    )
    }




  }
  return (
    <div className="main">
      <ExpenseForm onSubmit={handleFormSubmit} />
      <ExpenseList formDataArray={formDataArray} total={total} />
    </div>


  );
}

export default App;
