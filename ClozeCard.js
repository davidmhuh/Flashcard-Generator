//.. good ole inquirer ..//
var inquirer = require("inquirer");

//.. split cloze for the blank thingie ..//
function fullText(text, cloze) {
    this.text = text.split(cloze)
    this.cloze = cloze
}

//.. my extremely ez questions from yours truly the constructors ..//
var questionZero = new fullText("david is the first name of the dude who did this homework.", "david")
var questionOne = new fullText("george washington is the first president of the US", "george washington")
var questionTwo = new fullText("benjamin franklin is the man featured on the 100 dollar bill", "benjamin franklin")
var questionThree = new fullText("abraham lincoln was the president who was one of the major causes of the civil war", "abraham lincoln")

var count = 0;
var array = [];

//.. PUSH ..//
array.push(questionZero, questionOne, questionTwo, questionThree);


//.. similiar to my basic cards js format ..//
var askQuestion = function() {
    if (count < 4) {
        inquirer.prompt([
            {name: "name",
            message: array[count].text
        }
        ])
        .then(function(answer) {
            if((answer.name).toLowerCase() === array[count].cloze) {
                console.log("correct");
                count++
                askQuestion();
            }

            else {
                console.log("i was hoping you knew the answer! because the answer is " + array[count].cloze)
                count++;
                askQuestion();
            }
            
        });
    
        }

    }
askQuestion();