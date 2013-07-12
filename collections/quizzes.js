// declare collections
// this code should be in the client and the server
Sessions = new Meteor.Collection("sessions");
Questions = new Meteor.Collection("questions");
Answers = new Meteor.Collection("answers");

// server: populate collections with some initial data

// q1
var answer1a = {number: 1, option: 'a', text: "Sunburn", votes: 0};
var answer1b = {number: 1, option: 'b', text: "Eczema", votes: 0};
var answer1c = {number: 1, option: 'c', text: "Syphilis", votes: 0};
var answer1d = {number: 1, option: 'd', text: "Allergy", votes: 0};
Answers.insert(answer1a);
Answers.insert(answer1b);
Answers.insert(answer1c);
Answers.insert(answer1d);
var answers = Answers.find({number: 1}).fetch();
var answerIds = {};
for (var i = 0; i < answers.length; i++) {
  answerIds.push(answers[i]._id);
}
Questions.insert({number: 1, text: "I have a strange rash on my bottomn and I just drank milk. What is going on?", answers: answerIds});

// q2
var answer2a = {number: 2, option: 'a', text: "Yellow Fever", votes: 0};
var answer2b = {number: 2, option: 'b', text: "Tonsilitis", votes: 0};
var answer2c = {number: 2, option: 'c', text: "Flu", votes: 0};
var answer2d = {number: 2, option: 'd', text: "Bieber Fever", votes: 0};
Answers.insert(answer2a);
Answers.insert(answer2b);
Answers.insert(answer2c);
Answers.insert(answer2d);
var answers = Answers.find({number: 2}).fetch();
var answerIds = {};
for (var i = 0; i < answers.length; i++) {
  answerIds.push(answers[i]._id);
}
Questions.insert({number: 2, text: "Which of these is not an illness?", answers: answerIds});

