import React, { Component } from 'react';

let quizData = require('./quiz_data.json')
let QuizQuestion = 'quiz_question';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position : 1 }
  }
  render() {
        return <div>Quiz</div>;
  };
  //return <div>{ QuizData }</div>;
}
export default Quiz;
