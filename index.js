const readLine = require('readline-sync')

let score = 0;

const highScores = [{
  userName: "User01",
  score: "40"
}, {
  userName: "User03",
  score: "50"
}]

const questions = [{
  question: "Where do I live? ",
  answer: "Burdwan"
}, {
  question: "What is my favourite game ? ",
  answer: "Dishonored"
},
{
  question: "What is my age ? ",
  answer: "19"
}, {
  question: "What is my favourite movie ?",
  answer: "Infinity War"
}, {
  question: "Do I like mountains or beaches ?",
  answer: "Mountains"
}];

let userName = readLine.question("What is your name\n")
console.log("\n\nWelcome " + userName + " to DO YOU KNOW ME?");
console.log("Each right answer is of 10 points.\n\n");

questions.forEach((item) => {
  const answer = readLine.question("\n" + item.question + "\n");
  if (answer.toLowerCase() === item.answer.toLowerCase()) {
    console.log("\nRight!")
    score += 10
  } else {
    console.log("\nWrong :(")
  }
  console.log("Current Score: " + score)
})

console.log("\nYour Final Score is: " + score)

console.log("\nHigh scores:")
console.log("-----------------")

let isScoreDisplayed = false;
highScores.forEach((item) => {
  if (score >= item.score && !isScoreDisplayed) {
    console.log(userName + "(you): " + score)
    isScoreDisplayed = true
  }
  console.log(item.userName + ": " + item.score)
})





