/**
 * FileName: app.js
 * 
 * @author Tetiana Reznychenko
 * @date June 06, 2016
 * 
 * StudentID: 300870231
 * @description This file is the main javascript file for the web site
 */


// IIFE - Immediately Invoked Function Expression





(function(){
    "use strict";
    
    /* this is a test for Cloud 9 */
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    // second way to define an array
    //var paragraphs = new Array();
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    
    // define your paragraphs array;
    var paragraphs = [];
    
    // create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");
    
    // check to see if sendButton exists
    if(sendButton) {
        // event listener
        sendButton.addEventListener("click", sendButtonClick);
    }
    
    
    // event handler function
    function sendButtonClick(event) {
        console.log("clicked!");
    }
    
    // create a reference to the firstName field
    var firstName = document.getElementById("firstName");


    
    
    // create a reference to the form
    var contactForm = document.getElementById("contactForm");
    
    
    if(contactForm) {
        // event listener with inline anonymous event handler function
        contactForm.addEventListener("submit", function(event){
            event.preventDefault();
            console.log("submitted");
            showFormInput();
            contactForm.reset();
        });
    }
    
    /**
     * This function shows the input from each form field 
     * on the console
     * 
     * @method showFormInput
     * @return {void} 
     */
    function showFormInput() {
        console.log("********************************");
        console.log("First Name: " + firstName.value);
        console.log("********************************");
        
        

    }
    
   
    
    
    // data for my pages
    paragraphs[0] = "</br> Hi, I am Tetiana.</br> I am a student of Centennial College. My program is Software Engineering Technician.</br> I am from Ukraine. I am 23 years old. Previously I studied at Kiev National Economic University. I have a Master degree in Economics and I worked in a transport company for few years as a Project manager.</br> </br> <center>The quotes that can describe me: </br> <i>Oh, Mario. If only I could control everyone the way I control you.</i></br> © Dr. Sheldon Cooper. </br></br> <i>Do not be silly, I am a fan of anything that tries to replace actual human contact.</i> </br> © Dr. Sheldon Cooper.</center>";
    paragraphs[1] = "</br> 1. I wrote a detective novel “Crownless again shall be the king” and it was published . </br> Annotation: </br>Are you ready to face the unfavorable conditions? Can you sacrifice your peaceful life and become your enemy`s shadow? </br> Are you ready to accept that you have made the biggest mistake in your life, even if you believed in happy endings for a while? </br> Capitan Thomas Walker has been one of the best detectives in New Scotland Yard. However, now confused and tangled, </br>he can`t find the killer. Experience, money, and logic are simply powerless. Maybe something similar was already in the past.</br> It is time to figure it out. </br></br> 2.  The biggest project I was involved, was the replacement of the cement production technology at one of the Ukrainian plants. </br> </br> 3. A long time ago I was interested in the field investments. I even wrote some articles about investment strategy.  </br>";
    paragraphs[2] = "<center></br>To contact me just fill the simple form or find me in social medias.</center></br>";
    
    
    // check to see if paragraph one exists
    var paragraphElementsLength = paragraphElements.length;
    
    // if paragraph exists then populate each paragraph on the page
    for (var index = paragraphElementsLength; index >= 0; index--) {
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
    
    
})();

