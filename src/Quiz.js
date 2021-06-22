import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';

let QuizData = require('./quiz_data.json')

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position : 1};
  }

  render() {
    return (
      <QuizQuestion quiz_question = { QuizData.quiz_questions[this.state.quiz_position -1]  } />
    );
  }
}
export default Quiz;
