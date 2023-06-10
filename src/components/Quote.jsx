import React from "react"
import '../styles/random-quote.css'

function Quote({ quote }) {
    return (
        <div className="container-quote">
            <div className="bar" />
            <div className="quote">{quote}</div>
        </div>
    )

}

export default Quote