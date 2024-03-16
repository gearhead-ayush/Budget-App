import React from 'react'

const TransactionList = ({ formDataArray, colors, Delete }) => {
    return (
        <div className="list">

            <h2>Transaction List</h2>
            <br />

            <div className="list2">

                {formDataArray.map((items, index) => {
                    return (<div key={index} className="card flex-row">

                        {/* logo part with character inside it */}
                        <div style={{ backgroundColor: colors[items.Category] }} className="logo flex-row">
                            <b className='character'>{items.Category[0]}</b>
                        </div>


                        {/* middle part of card between logo and delete icon */}
                        <div className="mid">
                            <div style={{ color: colors[items.Category] }} className="name">{items.ExpenseName}</div>
                            <div style={{ color: colors[items.Category] }} className="category">~{items.Category}~</div>
                        </div>

                        <div className="price flex-row gap">
                            {items.ExpenseType === "credit" ? (
                                <div className="amount green">+{items.Amount}</div>
                            ) : (
                                <div className="amount red">-{items.Amount}</div>
                            )}
                        </div>


                        {/* Delete Icon */}
                        <div className="delete-icon" onClick={() => Delete(index)}><i className="bi bi-trash3-fill"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                            </svg>
                        </div>

                    </div>)
                })}


            </div>

        </div>
    )
}

export default TransactionList
