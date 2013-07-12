
Questions = new Meteor.Collection("questions");
Answers = new Meteor.Collection("answers");

var currentQuestion = 1;

if (Meteor.isClient) {

Template.quiz.answers = function () {
  return Answers.find({number: 1});
}

Template.quiz.question = function () {
  return Questions.findOne({number: 1});
}

// Template.leaderboard.players = function () {
//   return Players.find({}, {sort: {score: -1, name: 1}});
// };

// Template.leaderboard.selected_name = function () {
//   var player = Players.findOne(Session.get("selected_player"));
//   return player && player.name;
// };

// Template.player.selected = function () {
//   return Session.equals("selected_player", this._id) ? "selected" : '';
// };

// Template.leaderboard.events({
//   'click input.inc': function () {
//     Players.update(Session.get("selected_player"), {$inc: {score: 5}});
//   }
// });

// Template.player.events({
//   'click': function () {
//     Session.set("selected_player", this._id);
//   }
// });

// var answerData = [
//   {
//     option: 'Introducing Telescope?',
//     question: '1'
//   }, 
//   {
//     option: 'Meteor?',
//     question: '1'
//   }, 
//   {
//     option: 'The Meteor Book?',
//     question: '1'
//   }
// ];

// Template.quiz.helpers({
//   answers: answerData
// });

}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Answers.find().count() === 0) {
      var answerOptions = ['a','b','c','d'];
      var q1 = "I have a rash on my bottom. What could it be?"
      var q1answers = ["Eczema",
                        "Allergy",
                        "Syphilis",
                        "Sunburn"];
      for (var i = 0; i < answerOptions.length; i++) {
        Answers.insert({number: 1, option: answerOptions[i], text: q1answers[i], votes: 0});
      }
      var answers = Answers.find({number: 1}).fetch();
      var answerIds = {};
      for (var i = 0; i < answers.length; i++)
        answerIds[i] = (answers[i]._id);
      Questions.insert({number: 1, text: q1, answers: answerIds});
    }
  });

}


