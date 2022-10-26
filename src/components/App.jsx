import { useState } from 'react';

import { Container } from "./Container/Container";
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleClickButton = (e) => {
    const option = e.target.name;

    switch (option) {
      case "good":
        setGood(prevState => prevState + 1);
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;
      case "bad":
        setBad(prevState => prevState + 1);
        break;
      default:
        throw new Error(`Тип поля option ${option} не обрабатывается`);
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();

    let positivePercentage = 0;

    if (good > 0) {

      positivePercentage = Math.ceil((good / totalFeedback) * 100);
    }

    return `${positivePercentage}%`
  };

  
  const feedbackAll = { good, neutral, bad };
  const options = Object.keys(feedbackAll);
  const countFeedback = countTotalFeedback();

  return (
    <Container>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleClickButton}
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
            positivePercentage={countPositiveFeedbackPercentage()}
          />
          :
          <Notification message="There is no feedback"
          />}
      </Section>
    </Container>
  );
}
