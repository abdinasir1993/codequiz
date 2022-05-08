// target start button
const startButton = document.getElementById("start-btn");

// target banner section
const bannerSection = document.getElementById("banner");

// target main section

const mainElement = document.getElementById("main");

// current question index

let questionIndex = 0;

//all options for questions
const options = ["true", "false"];

//all questions array
const questions = [

{
    text: "Paris is the capital city of France?",
    options,

},
// {
//     text: "2. The longest river in the world is the amazon river? ",
//     options,
// },
{
    text: "The mosquito has a record for killing people in the world than any other species in in written history?",
    options,},

{
    text: "The capital of australia is sydney?",
    options,

},

   { text: "Algeria is located in the african continent?",
    options,
   },
    {
        text: "Fish cannot blink?",
        options,},

   { text: "7. the knight is the only only piece in chess which can only move diagonally?",
    options,}


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
       
       console.log(answer);

       if (questionIndex < questions.length - 1) {
           questionIndex += 1;
           renderQuestion()

       } else { renderResults ()
                renderForm ()

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

}

//function to render form
const renderForm = () => {

}

// function to render question to page
const renderQuestion = () => {
    console.log("render question");
    //create section
    const section = document.createElement ("section")
    section.setAttribute("class", "content-section question-container");
    
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

//remove banner section
const removeBanner = () => {
    console.log ("remove banner");
    
bannerSection.remove();
   
};

//declare the event handler function for start button click
const handleStartButtonClick = () => {

    console.log("start button clicked");


removeBanner();
renderQuestion();

}
// add event listener to start button
startButton.addEventListener("click", handleStartButtonClick);
