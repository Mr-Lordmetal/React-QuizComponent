import React, { Component } from 'react';

class QuizEnd extends Component {
  handleResetClick() {

  }

  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <a href='' onclick='this.handleResetClick.bind(this)'>Reset Quiz</a>
      </div>
    );
  }
}
export default QuizEnd;
