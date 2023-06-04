import React, { useEffect, useState } from "react"
import RandomButton from './RandomButton'
import RandomQuote from './Quote'
import RandomAuthorGenre from './RandomAuthorGenre'
import Footer from "./Footer"
import QuoteList from "./QuoteList"
import '../styles/random-quote.css'

function QuotePage() {

    const [quoteText, setQuoteText] = useState('')
    const [quoteAuthor, setQuoteAuthor] = useState('')
    const [quoteGenre, setQuoteGenre] = useState('')
    const [quoteList, setQuoteList] = useState('')
    const [showQuoteList, setShowQuoteList] = useState(false)
    const urlApi = 'https://quote-garden.onrender.com/api/v3/quotes'

    const callRandomQuote = () => {

        fetch(`${urlApi}/random`)
            .then(response => response.json())
            .then(data => {
                setQuoteText(data.data[0].quoteText)
                setQuoteAuthor(data.data[0].quoteAuthor)
                setQuoteGenre(data.data[0].quoteGenre)
            })
            .catch(error => {
                console.log(`The following error has ocurred: ${error}`)
            });
    }

    // useEffect: usado apenas na primeira renderização
    useEffect(() => {
        callRandomQuote()
    }, []);

    const fetchRandomQuote = () => {
        callRandomQuote()
    }

    const fetchQuoteList = () => {
        setShowQuoteList(false)
        fetch(`${urlApi}?author=${quoteAuthor}&limit=3`)
            .then(response => response.json())
            .then(({ data }) => {
                console.log('data', data)
                setQuoteList(data)
                setShowQuoteList(true)
            })
            .catch(error => {
                console.log(`The following error has ocurred: ${error}`)
            });

    }

    const control = () => {
        if (!showQuoteList) {
            return (
                <>
                    <RandomQuote quote={quoteText} />
                    <RandomAuthorGenre author={quoteAuthor} genre={quoteGenre} onClick={fetchQuoteList} />
                </>
            )
        }

        return <QuoteList author={quoteAuthor} quoteList={quoteList} />
    }

    return (
        <>
            <RandomButton onClick={fetchRandomQuote} />
            {control()}
            <Footer />
        </>
    )
}

export default QuotePage