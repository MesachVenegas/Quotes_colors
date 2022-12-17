import { useState } from 'react';
import quotes from '../Data/quotes.json';
import colors from '../Data/colors.json';
import './Card.css'

const Card = () => {
    const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * quotes.length))
    const [bgColor, setBgColor] = useState(Math.floor(Math.random() * colors.length))
    const [btnColor, setBtnColor] = useState(Math.floor(Math.random() * quotes.length))

    const nextQuote = () => {
        setQuoteIndex(Math.floor(Math.random() * quotes.length))
        setBgColor(Math.floor(Math.random() * colors.length))
        setBtnColor(Math.floor(Math.random() * colors.length))
    }

    let color = colors[bgColor].hex;
    let colorBtn = colors[btnColor].hex
    let object = quotes[quoteIndex];

    document.body.style.backgroundColor =  color;

    return (
        <div className='App'>
            <div className="card" >
                <h2 className='card__title'>{object.author}</h2>
                <span className='quote__tile ' id='tile-1'>"</span>
                <p className='card__quote'>{`${object.quote}`}</p>
                <span className='quote__tile' id='tile-2'>"</span>
            </div>
            <button className='btn' onClick={nextQuote} style={{backgroundColor: colorBtn}}>Change</button>
        </div>
    );
};

export default Card;