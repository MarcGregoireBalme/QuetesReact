import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  GenerateQuote  from  './GenerateQuote';
import  DisplayQuote  from  './DisplayQuote';

const  quote = 
  [
    {
     "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
     "character": "Nelson Muntz",
     "image" : "httDisplayQuoteps://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
     "characterDireDisplayQuotection" : "Left"
    
    }
  ]


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote :  quote
    };
  }
  getQuote() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote:data[0],        
        });
    });
  }
  render() {
    return (
      <div>
        <GenerateQuote  selectQuote={() =>  this.getQuote()}  />
        <DisplayQuote  quote={this.state.quote}  />
      </div>
    );
  }
}

export default App;
