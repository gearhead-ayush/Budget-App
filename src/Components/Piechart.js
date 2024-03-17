import React from 'react'
import { useContext } from 'react'
import { allData } from './Context/Context'



const Piechart = () => {
  const value = useContext(allData)

  const generateConicGradient = () => {
    let startPercent = 0;
    let gradientValues = value.chart.map(category => {
      const endPercent = startPercent + (category.value / (value.totalCredit + value.totalDebit)) * 100;
      const colorStop = `${value.colors[category.name]} ${startPercent}% ${endPercent}%`;
      startPercent = endPercent;
      return colorStop;
    });

    return `conic-gradient(${gradientValues.join(', ')})`;


  };




  return (
    <div className="summary2 flex-row">

      <div className="outer" style={{
        borderRadius: '50%',
        width: '130px',
        aspectRatio: '1',
        backgroundImage: generateConicGradient()
      }}>
        <div className="inner"></div>
      </div>




      <div>
        {value.chart.map((items, index) => {
          return (<div key={index}>
            {items.value != 0 && (
              <p style={{ color: value.colors[items.name] }}> <i>{items.name}</i>: {Math.round((items.value / (value.totalCredit + value.totalDebit) * 100)).toFixed(1)}%</p>
            )}
          </div>
          )
        })}</div>




    </div>
  )
}

export default Piechart
