import { Component } from 'react';

import Section from './Components/Section';
import Container from './Components/Container';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelLeaveFeedback = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, count) => acc + count,
      0,
    );
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    const positiveFeedbackPercentage = Math.round((good * 100) / total);

    return isNaN(positiveFeedbackPercentage) ? 0 : positiveFeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const goodFeedbackPercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <Section title="Please leave feedback">
          <Container>
            <FeedbackOptions
              options={this.state}
              onFeebbackOption={this.handelLeaveFeedback}
            />
          </Container>
        </Section>

        <Section title="Statistics">
          <Container>
            {total === 0 ? (
              <Notification message="No feedback given" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={goodFeedbackPercentage}
              />
            )}
          </Container>
        </Section>
      </>
    );
  }
}

export default App;
