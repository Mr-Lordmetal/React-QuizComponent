import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.clickHandler(this.props.button_text);

    if (7 === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
    }
  }

  render() {
    return (
      <li>
        <button key={ this.props.id } onClick={ this.handleClick.bind(this) }>
          { this.props.button_text }
        </button>
      </li>
    );
  }
}
export default QuizQuestionButton;
