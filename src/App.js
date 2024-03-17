import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import './App.css';
import { useState } from 'react';
import { allData } from './Components/Context/Context';




function App() {

  const chartData = [
    { name: "Income", value: 0 },
    { name: "Grocery", value: 0 },
    { name: "Shopping", value: 0 },
    { name: "Travel", value: 0 },
    { name: "Rent or Bills", value: 0 },
    { name: "Miscellaneous", value: 0 },
  ];

  const colors = {
    Income: "#FFA600",
    Grocery: "#FF6361",
    Shopping: "#58508D",
    Travel: "#BC5090",
    "Rent or Bills": "#003F5C",
    Miscellaneous: "#77DD77"
  }

  const [formDataArray, setformDataArray] = useState([])
  const [total, settotal] = useState(0)
  const [totalCredit, settotalCredit] = useState(0)
  const [totalDebit, settotalDebit] = useState(0)
  const [chart, setchart] = useState(chartData)


  // function to handle when delete icon is clicked
  const handleDelete = (index) => {
    const deletedItem = formDataArray[index];
    const updatedFormDataArray = [...formDataArray];
    updatedFormDataArray.splice(index, 1);
    setformDataArray(updatedFormDataArray);


    deletedItem.ExpenseType === "credit" ? (
      <>
        {settotal(total - parseFloat(deletedItem.Amount))}
        {settotalCredit(totalCredit - parseFloat(deletedItem.Amount))}
      </>
    ) :
      (
        <>
          {settotal(total + parseFloat(deletedItem.Amount))}
          {settotalDebit(totalDebit - parseFloat(deletedItem.Amount))}
        </>
      )
    const updatedChart = chart.map(item => {
      if (item.name === deletedItem.Category) {
        return { ...item, value: item.value - parseFloat(deletedItem.Amount) };
      }
      return item;
    });
    const updateChart = [...updatedChart].sort((a, b) => a.value - b.value)
    setchart(updateChart);

  };


  // function to handle when form is submitted
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
          return { ...item, value: parseFloat(data.Amount) + item.value };
        }
        return item;
      });
      const updateChart = [...updatedChart].sort((a, b) => a.value - b.value)
      setchart(updateChart);

    }

  }



  return (
    <div className="main">
      <allData.Provider value={{ chart, colors, formDataArray, total, totalCredit, totalDebit, handleDelete, handleFormSubmit }}>

        <ExpenseForm />
        <ExpenseList />

      </allData.Provider>
    </div>
  );
}

export default App;
