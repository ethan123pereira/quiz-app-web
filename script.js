const quizData = [
{
question: "What does HTML stand for?",
options: [
"Hyper Text Markup Language",
"Home Tool Markup Language",
"Hyperlinks Text Mark Language",
"Hyper Tool Multi Language"
],
answer: 0
},
{
question: "Which language is used for styling web pages?",
options: [
"HTML",
"JQuery",
"CSS",
"XML"
],
answer: 2
},
{
question: "Which language is used for web development logic?",
options: [
"Python",
"Java",
"JavaScript",
"C++"
],
answer: 2
}
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");

function loadQuestion(){

answered = false;

let q = quizData[currentQuestion];

questionElement.innerText = q.question;

options.forEach((btn,index)=>{
btn.innerText = q.options[index];
btn.style.background = "#eee";
});
}

function selectAnswer(index){

if(answered) return;

answered = true;

let correct = quizData[currentQuestion].answer;

options[index].style.background = "#ff9999";

if(index === correct){
score++;
options[index].style.background = "#90ee90";
}else{
options[correct].style.background = "#90ee90";
}

}

function nextQuestion(){

if(!answered) return;

currentQuestion++;

if(currentQuestion < quizData.length){
loadQuestion();
}else{
document.querySelector(".quiz-container").innerHTML =
"<h2>Your Score: " + score + "/" + quizData.length + "</h2>";
}

}

loadQuestion();