import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(buttonText) {
    if (buttonText == this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
    }
  }

  render() {
    const index = this.props.quiz_question.id;
    const answers = this.props.quiz_question.answer_options;

    return (
      <main>
        <section>
          <p>{ this.props.quiz_question.instruction_text }</p>
          </section>
        <section className="buttons">
          <ul>
            {answers.map((answer) =>
                <QuizQuestionButton key={ index } button_text={ answer } clickHandler={ this.handleClick.bind(this) } />
            )}
          </ul>
        </section>
      </main>
    );
  }
}
export default QuizQuestion;
