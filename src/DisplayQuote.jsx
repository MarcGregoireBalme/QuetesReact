import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div  className="DisplayQuote">
            <ul>
                <li>
                    Quote : {quote.quote}
                </li>
                <li>
                    Character: {quote.character}
                </li>  
                <li>
                    <img  src={quote.image}  alt="picture"  />
                </li>
                <li>
                    Direction : {quote.characterDirection}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayQuote;