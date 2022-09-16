import React, { Component } from 'react';

import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistic';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onCount = e => {
    this.setState(prevState => {
      return {
        [e.target.textContent.toLowerCase()]:
          prevState[e.target.textContent.toLowerCase()] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((previousValue, currentValue) => previousValue + currentValue);
    return total;
  };


  countPositiveFeedbackPercentage = () => {
    return this.state.good !== 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const options = Object.keys(this.state);
    const allFeedbacks = this.countTotalFeedback();
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onCount}
          />
        </Section>
        <Section title={'Statistics'}>
          {allFeedbacks > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={allFeedbacks}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <p>There is no feedback</p>
          )}
        </Section>
      </>
    );
  }
}

export default App;
