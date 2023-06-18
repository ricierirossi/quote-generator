import React from "react"
import Quote from './Quote'
import '../styles/quote-list.css'

function QuoteList({ author, quoteList }) {

    const listItem = quoteList.map(({ _id, quoteText }) => {
        return (
            <li key={_id}>
                <Quote key={_id} quote={quoteText} />
            </li>
        )
    })

    return (
        <div className="wrapper">
        <div className="container-list">
            <h1>{author}</h1>
            <ul>
                {listItem}
            </ul>
        </div>
        </div>
    )

}

export default QuoteList