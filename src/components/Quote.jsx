import React from "react"
import '../styles/random-quote.css'

function Quote({ quote }) {
    return (
        <div className="container-quote">
            <div>
                <div className="quote">{quote}</div>
            </div>
        </div>
    )

}

export default Quote