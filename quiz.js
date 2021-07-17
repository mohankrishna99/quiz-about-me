var readlineSync = require('readline-sync');
const chalk = require('chalk')
var userName = readlineSync.question("What is your name? ")
console.log("Welcome to the Quiz " + chalk.green.bold(userName) + "!,  " + chalk.bgBlue("This quiz is about how well do you know ME")); 
//console.log(chalk.red.bold("Note: Start your answer with a Capital letter."));
score = 0;
var highscores = [{
  name: "Mohan",
  score: 3
}]
var questions = [{
  question: "What is my name? (First name is enough.)",
  answer: "Mohan"
},
{
  question: "Who is my Fav Superhero? ",
  answer: "Ironman"
},
{
  question: "Is my age greater than 25? (Enter Yes/No).",
  answer: "No"
}];
for (var i = 0; i < questions.length; i++){
  var userAnswer = readlineSync.question(questions[i].question)
  if (userAnswer.toUpperCase() === questions[i].answer.toUpperCase()){
    console.log("Right!");
    score = score + 1;
  }else{
    console.log("wrong, The answer is: ",questions[i].answer);
  }
  console.log("---------");
}
if (score >= highscores[0].score){
  console.log(userName, "Your score is ", score);
  console.log("You have reached highscore");
  console.log("Send in the screenshot, i will add it the data.")
}else{
  console.log("Your final score ", score);
}