var readline = require('readline-sync');
var username = readline.question("Tell me your name\n");
console.log("Welcome\t" + username + "!\n");
console.log("Let's play how well do you know me\n");
var score = 0
function quiz(question , answer){
var useranswer = readline.question("\n" +question+ "\n")
if(useranswer.toLowerCase() === answer){
console.log("\nRight answer")
score=score+1
}
else{
  console.log('\nWrong answer')
}
console.log("\ncurrentscore:"+ score)
}
var questions =[{question:"where do i live", answer:"bangalore"},
{question:"where do i work", answer:"symphony"},
{question:"what is my fav video game", answer:"apex legends"}]

for (i=0 ;i<questions.length;i++){
  quiz(questions[i].question,questions[i].answer);
}
if(score>2){
console.log("you have been promoted from friend to brotha")
}
else{
  console.log("you traitor")
}