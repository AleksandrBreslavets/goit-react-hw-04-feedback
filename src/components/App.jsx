import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = {
    good,
    neutral,
    bad
  };

  const onBtnClick = type => {
    if (type === 'good') {
      setGood(prevGood => prevGood + 1);
      return;
    } 
    if (type === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
      return;
    } 
    setBad(prevBad => prevBad + 1);
  }

  const countTotalFeedback = () => {
    return Object.values(feedbackOptions).reduce((acc, value) => acc + value);
  }

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    return Math.round(good * 100 / total) || 0;
  }

  const renderCheck = () => {
    if (good !== 0 || bad !== 0 || neutral !== 0) {
      return(<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}>
      </Statistics>)
    }
    
    return <Notification message={"There is no feedback"}/>
  }
console.log(feedbackOptions)
  return (
    
      <Section>
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={onBtnClick} />
        {renderCheck()}
      </Section>
    )
  
}
