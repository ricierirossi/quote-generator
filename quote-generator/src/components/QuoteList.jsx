import React from "react"
import Quote from './Quote'

function QuoteList({ author, quoteList }) {

    const listItem = quoteList.map(({ _id, quoteText }) => {
        return (
            <li key={_id}>
                <Quote key={_id} quote={quoteText} />
            </li>
        )
    })

    return (
        <>
            <h1>{author}</h1>
            <ul>
                {listItem}
            </ul>
        </>
    )

}

export default QuoteList