import React, { Component } from 'react';

let quizData = require('./quiz_data.json')

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <section>
          <p>
            <div className='QuizQuestion'>
              { quizData.quiz_questions[0].instruction_text }
            </div>
          </p>
          </section>
        <section className="buttons">
          <ul>
            <li>
               { this.props.quiz_question.answer_options[0] }
            </li>
          </ul>
        </section>
      </main>
    );
  }
}
export default QuizQuestion;
