// target start button
const startButton = document.getElementById("start-btn");

// target banner section
const bannerSection = document.getElementById("banner");

// target main section

const mainElement = document.getElementById("main");

// function to render question to page
const renderQuestion = () => {
    console.log("render question");
    //create section
    const section = document.createElement ("section")
    section.setAttribute("class", "content-section question-container");
    


    //create h2
    const h2 = document.createElement ("h2")

    h2.setAttribute("class", "content-section-title");
    h2.textContent = "what is the Capital city of france?";


    
    //create ul append 4 li's
    const ul =document.createElement("ul")
    ul.setAttribute("class", "feed-back-list");
    //loop over options
    const li1 =document.createElement("li")
    li1.setAttribute("class", "list-item");
    li1.textContent = "london";

    const li2 =document.createElement("li")
    li2.setAttribute("class", "list-item");
    li2.textContent = "brussels";

    const li3 =document.createElement("li")
    li3.setAttribute("class", "list-item");
    li3.textContent = "berlin";

    const li4 =document.createElement("li")
    li4.setAttribute("class", "list-item");
    li4.textContent = "paris";

    ul.append(li1, li2, li3, li4);

    section.append(h2,ul);

    mainElement.append(section);






    

    
   


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

// remove 