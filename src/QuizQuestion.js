import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const answers = this.props.quiz_question.answer_options;
    const listItems = answers.map((answer) =>
      <li>
        { answer }
        <QuizQuestionButton button_text = { answer } />
      </li>
    );

    return (
      <main>
        <section>
          <p>{ this.props.quiz_question.instruction_text }</p>
          </section>
        <section className="buttons">
          <ul>
            { listItems }
          </ul>
        </section>
      </main>
    );
  }
}
export default QuizQuestion;
