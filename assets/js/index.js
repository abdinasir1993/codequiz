// target start button
const startButton = document.getElementById("start-btn");

// target banner section
const bannerSection = document.getElementById("banner");

// target main section

const mainElement = document.getElementById("main");

const timerSpan = document.getElementById("time-span");

// current question index

let questionIndex = 0;

//current score index
let scoreIndex = 0;

//define time for quiz
let timer = 30;

//all options for questions
const options = ["true", "false"];

//all questions array
const questions = [

{
    text: "Paris is the capital city of France?",
    options,
    answer: "true",

},
{
    text: " The longest river in the world is the amazon river?",
     options,
     answer: "false",

          
},
{
    text: "The mosquito has a record for killing more people in the world than any other species in written history?",
    options,
    answer: "true",
},

{
    text: "The capital of australia is sydney?",
    options,
    answer: "false",

},

   { text: "Algeria is located in the african continent?",
    options,
    answer: "true",
   },
    {
        text: "Fish cannot blink?",
        options,
        answer: "true",
    },

   { text: " the knight is the only only piece in chess which can only move diagonally?",
    options,
    answer: "false",
},

{
    text: "whales are mammals",
    options,
    answer:"true",
}


    ]
const handleOptionClick = (event) => {


    console.log ("section clicked");

    const currentTarget = event.currentTarget
    const target = event.target

    console.log("currentQuestion");
    console.log("target.tagName");
        
    
   if (target.tagName === "LI"){
       const value = target.getAttribute("data-value");
       console.log (value);
       
       const question = questions[questionIndex]. text;
       const answer = {
           question,
           value,
       };
       const correctValue = questions[questionIndex].answer;
       console.log("correct is :" + correctValue);
   
       if (value == correctValue) {
        //add to score by 1
        scoreIndex += 1;
        console.log("current score" + scoreIndex);
        // add 5 seconds from timer
        timer += 2;
      } else {
        //alert incorrect answer
        alert("incorrect answer");
        //remove 5 seconds from timer
        timer -= 5;
       }
    //    storeAnswerInIs(answer);
       
       console.log(answer);

       removeQuestion();

       if (questionIndex < questions.length - 1) {
           questionIndex += 1;

           //remove qestion 
           renderQuestion()

       } else {
            renderResults ()
                renderForm ()
                removeTimerSection();

       }






   }     

   

//get the option the user clicked 



// the question user answered

// get th question the user answered

// build an answer object that contains


}

 // get current target


 

  
 
 //check if target element is li element

 // remove question 

// function to render results 
const renderResults = () => {
//create section
const section = document.createElement("section");
section.setAttribute("class", "content-section");
section.setAttribute("id", "results-container");
// create h1
const title = document.createElement("h2");
title.setAttribute("class", "content-section-title");
title.textContent = "results";
//create scoreboard
const h2 = document.createElement("h2");
h2.setAttribute("class", "content-section-info");
h2.textContent = "your score was: " + scoreIndex + "/" + questions.length;
//create timer results
const finalTimer = document.createElement("h2");
finalTimer.setAttribute("class", "content-section-info");
finalTimer.textContent = "time remaining: " + timer + " seconds";
section.append(title, h2, finalTimer);
main.append(section);
}

//function to render form
const renderForm = () => {
    console.log("render form")
    const section = document.createElement("section")
    section.setAttribute("class", "content-section feedback-form-section")
    section.setAttribute("name", "feedback-form")
    const h2 = document.createElement("h2")
    h2.setAttribute("class", "title")
    h2.textContent="submit your feedback"
    const form = document.createElement("form");

    const inputDiv = document.createElement("div");
    inputDiv.setAttribute("class", "form-control");
    
   
    const input = document.createElement("input");
    input.setAttribute("class", "full-name",);
    input.setAttribute("name", "form-input",);
    input.setAttribute("type", "text",);
    input.setAttribute("placeholder", "enter full name",);
    
    inputDiv.append(input);

    const buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "form-control");

    

    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.setAttribute("class", "btn")
    button.textContent= "submit"

    buttonDiv.append(button);
    form.append(inputDiv, buttonDiv);
    section.append(h2, form);
    mainElement.append(section);

}

// function to render question to page
const renderQuestion = () => {
    console.log("render question");
    //create section
    const section = document.createElement ("section")
    section.setAttribute("class", "content-section ");
    section.setAttribute("id", "question-container" );
    
   // get questions

   const currentQuestion = questions[questionIndex];


    //create h2
    const h2 = document.createElement ("h2")

    h2.setAttribute("class", "content-section-title");
    h2.textContent = `${questionIndex +1}. ${currentQuestion.text}`;


    
    //create ul append 4 li's
    const ul =document.createElement("ul")
    ul.setAttribute("class", "feed-back-list");
    //loop over options
    const li1 =document.createElement("li")
    li1.setAttribute("class", "list-item");
    li1.setAttribute("data-value", currentQuestion.options[0])
    li1.textContent = currentQuestion.options[0];

    const li2 =document.createElement("li")
    li2.setAttribute("class", "list-item");
    li2.setAttribute("data-value", currentQuestion.options[1])
    li2.textContent = currentQuestion.options[1];

   

    ul.append(li1, li2,);

    section.append(h2,ul);

    mainElement.append(section);

    // add event listener for section

   section.addEventListener("click", handleOptionClick);


  





    

    
   


    //create div with and append button

    const div = document.createElement("div")
    div.setAttribute("class", "btn-control");

    const button = document.createElement("btn")
    div.setAttribute("class", "btn");
    button.setAttribute("id", "next-btn");



    
}
// function to render timer
const renderTimerSection = () => {
    console.log("render-timer");
    // use HTML as guide and build in JS
    const timerSection = document.createElement("section");
    timerSection.setAttribute("class", "timer-section");
    timerSection.setAttribute("id", "timer");
    const timeRemaining = document.createElement("div");
    timeRemaining.setAttribute("class", "timer");
    const timeSpan = document.createElement("span");
    timeSpan.setAttribute("id", "time-span");
    timeSpan.setAttribute("class", "time-span-class");
  
    //append span to time remaining then time remaining to section
    timeRemaining.appendChild(timeSpan);
    timerSection.append(timeRemaining);
    main.append(timerSection);
  
    // function for timer countdown
    const timerCountdownUpdate = () => {
      //reduce time
      timer -= 1;
      timeSpan.textContent = `Time Remaining: ${timer}`;
      if (timer === 0) {
        clearInterval(timerId);
      }
    };
    const timerId = setInterval(timerCountdownUpdate, 1000);
  };
  
//remove banner section
const removeBanner = () => {
    console.log ("remove banner");
    
bannerSection.remove();
   
};
// function to remover timer section
const removeTimerSection = () => {
    console.log("remove question");
    document.getElementById("timer").remove();
  };

const initialiseLocalStorage = () => {

// get freedback results from local storage

const feedbackResultsFormsLs = JSON.parse(localStorage.item("feedbackResults"));

if (!feedbackResultsFormsLs)
//if not exist set ls to have feedback results as an empty arrat

localStorage.setItem("feedbackResults", JSON.stringify([]));


console.log(feedbackResultsFormsLs);

// if it already exists then do nothing

// else set ls to have feedbackResults

//declare the event handler function for start button click

}
const handleStartButtonClick = () => {


const storeAnswerInls = (answer) => {
    // ged feedback results from local storage
   
    const feedbackResults = JSON.parse(localStorage.getItem(
       "getfeedbackResults") );

    //push answer in to array
    feedbackResults.push(answer);

    // set feedbackResults in ls
    localStorage.setItem("feedbackResults", JSON.stringify(feedbackResults));
};

    console.log("start button clicked");

renderTimerSection();
removeBanner();
renderQuestion();

}

const removeQuestion = () => {
    document.getElementById("question-container").remove();
}
// add event listener to start button
startButton.addEventListener("click", handleStartButtonClick);


