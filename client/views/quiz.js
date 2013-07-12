var quizData = [
  {
    question: 'Introducing Telescope?',
    answer: 'Sacha Greif',
  }, 
  {
    question: 'Meteor?',
    answer: 'Tom Coleman',
  }, 
  {
    question: 'The Meteor Book?',
    answer: 'Tom Coleman',
  }
];
Template.quiz.helpers({
  quizList: quizData
});