import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
export class App extends Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  onBtnClick=(type)=>{
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  }
  countTotalFeedback=()=> {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  }
  countPositiveFeedbackPercentage=()=>{
    let total = this.countTotalFeedback();
    return Math.round(this.state.good * 100 / total) || 0;
  }
  renderCheck = () => {
    const { good, bad, neutral } = this.state;
    if (good !== 0 || bad !== 0 || neutral !== 0) {
      return(<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}>
      </Statistics>)
    }
    
      return <Notification message={"There is no feedback"}/>
  }
  render() {
    return (
      <>
        <FeedbackOptions options={this.state} onLeaveFeedback={this.onBtnClick} />
        {this.renderCheck()}
      </>
    )
  }
}
