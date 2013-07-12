
Questions = new Meteor.Collection("questions");
Answers = new Meteor.Collection("answers");

if (Meteor.isClient) {

var answerData = [
  {
    option: 'Introducing Telescope?',
    question: '1'
  }, 
  {
    option: 'Meteor?',
    question: '1'
  }, 
  {
    option: 'The Meteor Book?',
    question: '1'
  }
];

Template.quiz.helpers({
  answers: answerData
});

}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
}

