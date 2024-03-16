import React from 'react'


const Piechart = ({chart,  totalCredit, totalDebit, colors}) => {
    
    const generateConicGradient = () => {
        let startPercent = 0;
        let gradientValues = chart.map(category => {
          const endPercent = startPercent + (category.value / (totalCredit + totalDebit)) * 100;
          const colorStop = `${colors[category.name]} ${startPercent}% ${endPercent}%`;
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
            {chart.map((items, index) => {
              return (<div key={index}>
                {items.value != 0 && (
                  <p style={{ color: colors[items.name] }}> <i>{items.name}</i>: {Math.round((items.value / (totalCredit + totalDebit) * 100)).toFixed(1)}%</p>
                )}
              </div>
              )
            })}</div>


          

    </div>
  )
}

export default Piechart
