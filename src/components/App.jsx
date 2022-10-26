import { Component } from 'react';

import { Container } from "./Container/Container";
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';





export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClickButton = (e) => {
    const option = e.target.name;

    this.setState(prevState => ({[option]: prevState[option] + 1}));
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;

    let positivePercentage = 0;

    if (goodFeedback > 0) {
      
      positivePercentage = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${positivePercentage}%`
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const countFeedback = this.countTotalFeedback();
    

    return (
      <Container>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClickButton}
          />
        </Section>
        <Section title='Statistics'>
          {countFeedback
            ?
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            />
            :
            <Notification message="There is no feedback"
            />}
        </Section>
      </Container>
    );
  }
}
