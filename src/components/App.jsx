import React, { Component } from 'react';

import {Section} from './Section';


 class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
   };


   onCount = (e) => {
     this.setState((prevState) => {
       return {
         [e.target.textContent.toLowerCase()]:prevState[e.target.textContent.toLowerCase()] + 1
       }
     })
   }

   countTotalFeedback = () => {
     const total = this.state.bad + this.state.neutral + this.state.good
     return total
   }
   countPositiveFeedbackPercentage = () => {
    return  this.state.good !==0 ? Math.round((this.state.good/this.countTotalFeedback())*100) : 0
   }
   

  render() {
    return (
      <>
        <Section title={"Please leave feedback"}>
        <ul>
          <button type="button" onClick={this.onCount}>Good</button>
          <button type="button" onClick={this.onCount}>Neutral</button>
          <button type="button" onClick={this.onCount}>Bad</button>
          </ul>
          </Section>
        <Section title={"Statistic"}>
        {this.countTotalFeedback() > 0 ? <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul> :
        <p>There is no feedback</p> }
        </Section>
      </>
    );
  }
}

export default App