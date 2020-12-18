/*
  this will allow me to utilize the component functionality for when everything is 
  being rendered to the screen
*/
import React, {Component} from 'react'
/*
  contains extra styling for this application
*/
import './App.css';
/*
  importing the answer functionality that will be utilized for rendering the 
  result from the computattion
*/
import ResultCom from './components/ResultCom'
/*
  This is the physical calculator that is rendered to the screen
*/
import Calculator from './components/Calculator'

/*
  Rather than having a design that is functional based the covid project
  that I did, this is a component based approach.  
*/

class App extends Component {
  constructor(){
    super();

    /*this sets the state for the answer that will be computed 
      by the calculator*/
    this.state = {
      answer: ""
    }
  }

  /*this controls what option is clicked to be activated and 
    provide it's provided functionality*/
  onClick = button => {
    if(button === "="){
      this.compute()      // this takes the current equation with numbers 
                          // and performs the operation
    } else if(button === "C") {
      this.reset()        /*this function call to reset*/
    } else if(button === "CE"){
      this.backspace()    /*this function call to reset*/
    } else {
      this.setState({     /* this takes the value of the answer in its state 
                              places it into the new state*/
        answer: this.state.answer + button
      })
    }
  };

  /* responsible for */
  compute = () => {
    try {
      this.setState({
        answer: (eval(this.state.answer) || "") + ""
      })
    } catch (e) {
      this.setState({
        answer: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      answer: ""
    })
  };

  backspace = () => {
    this.setState({ 
      answer: this.state.answer.slice(0, -1)
    })
  };
  
  render() {
    return (
      <div>
        <div className="calc-body">
          <h1>Calculator App from Aedan</h1>
          <ResultCom answer={this.state.answer}/>
          <Calculator onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}

export default App;
