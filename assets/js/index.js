// target start button
const startButton = document.getElementById("start-btn");

// target banner section
const bannerSection = document.getElementById("banner");



// function to render question to page
const renderQuestion = () => {
    console.log("render question");
    
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