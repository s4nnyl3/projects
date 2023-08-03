import { useState } from 'react'
import './App.css'
import quotes from './assets/quotes.json'
import {BiLogoTwitter,BiSolidQuoteAltLeft, BiSolidQuoteAltRight} from "react-icons/bi"

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote= (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const getRandomColor = (): string => {
  const red = Math.floor(Math.random()* 175) ;
  const green = Math.floor(Math.random()* 175) ;
  const blue = Math.floor(Math.random()* 175) ;

  return `rgb(${red},${green},${blue})`
}


function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote())
    setRandomColor(getRandomColor)
  }

  const transition = 'all 3s'

  return (
    <div className="background" style={{backgroundColor: randomColor, transition}}>
      <div id="quote-box">
        <div className="quote-content" style={{color: randomColor, transition}}>
          <h2 id="text" style={{fontFamily: 'Verdana'}}><BiSolidQuoteAltLeft/> {quote.quote} <BiSolidQuoteAltRight /></h2>
          <h3 id="author">- {quote.author}</h3>
        </div>
        <div className="buttons">
          <a target="_blank" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`} id='tweet-quote' style={{transition,backgroundColor: randomColor}}><BiLogoTwitter /></a>
          <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor, transition}}>New Quote</button>
        </div>
      </div>
    </div>
  )
}

export default App
