import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';

let quizData = require('./quiz_data.json')

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position : 1};
  }

  render() {
    return (
      <QuizQuestion quiz_question = { this_state.quiz_data.quiz_questions } } />
    );
  }
}
export default Quiz;
