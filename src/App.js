import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';


import './App.css';
import { useState } from 'react';



function App() {
  const [formDataArray, setformDataArray] = useState([])
  const [total, settotal] = useState(0)
  const [totalCredit, settotalCredit] = useState(0)
  const [totalDebit, settotalDebit] = useState(0)
  const [chart, setchart] = useState([{ name: "Income", value: 0, color: "#FFA600", percentage: 0 }, { name: "Grocery", value: 0, color: "#FF6361", percentage: 0 }, { name: "Shopping", value: 0, color: "#58508D", percentage: 0 }, { name: "Travel", value: 0, color: "#BC5090", percentage: 0 }, {
    name: "Rent or Bills", value: 0, color: "#003F5C", percentage:
      0
  }, { name: "Miscellaneous", value: 0, color: "#77DD77", percentage: 0 }])

  const handleDelete = (index) => {
    const deletedItem = formDataArray[index];
    const updatedFormDataArray = [...formDataArray];
    updatedFormDataArray.splice(index, 1);
    setformDataArray(updatedFormDataArray);
    
    
    deletedItem.ExpenseType === "credit" ?(
      <>
        {settotal(total - parseFloat(deletedItem.Amount))}
        {settotalCredit(totalCredit - parseFloat(deletedItem.Amount))}
      </>
    ):
    (
      <>
        {settotal(total + parseFloat(deletedItem.Amount))}
        {settotalDebit(totalDebit - parseFloat(deletedItem.Amount))}
      </>
    )
    const updatedChart = chart.map(item => {
      if (item.name === deletedItem.Category) {
        return { ...item, value: item.value-parseFloat(deletedItem.Amount)  , percentage: ((item.value-parseFloat(deletedItem.Amount)) / (totalCredit + totalDebit)) * 100 };
      }
      return item;
    });
    const updateChart = [...updatedChart].sort((a, b) => a.value - b.value)
    setchart(updateChart);
    
  };


  const handleFormSubmit = (data) => {
    setformDataArray([...formDataArray, data])
    {
      data.ExpenseType === "credit" ? (
        <>
          {settotal(total + parseFloat(data.Amount))}
          {settotalCredit(totalCredit + parseFloat(data.Amount))}
        </>
      ) :
        (
          <>
            {settotal(total - parseFloat(data.Amount))}
            {settotalDebit(totalDebit + parseFloat(data.Amount))}
          </>
        )


      const updatedChart = chart.map(item => {
        if (item.name === data.Category) {
          return { ...item, value: parseFloat(data.Amount) + item.value, percentage: ((parseFloat(data.Amount) + item.value) / (totalCredit + totalDebit)) * 100 };
        }
        return item;
      });
      const updateChart = [...updatedChart].sort((a, b) => a.value - b.value)
      setchart(updateChart);


    }

  }



  return (
    <div className="main">
      <ExpenseForm onSubmit={handleFormSubmit} />
      <ExpenseList Delete={handleDelete} formDataArray={formDataArray} total={total} totalCredit={totalCredit} totalDebit={totalDebit} chart={chart} />
    </div>
  );
}

export default App;
