import React, { Component } from 'react';

let quizData = require('./quiz_data.json')

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position : 1 }
  }
  render() {
    return (
      <div className='QuizQuestions'>
        { quizData.quiz_questions[this.state.quiz_position].instruction_text }
      </div>
    );
  }
}
export default Quiz;
