//.. npm install inquirer ..//
var inquirer = require("inquirer")


//.. simple constructor ..//
function Constructor(front, back) {
    this.front = front;
    this.back = back;
};

//.. use constructors, create the bloody questions and stuff..//
var constructorOne = new Constructor("What horror movie displays a hostile creature from space popping from a human chest?", "alien");
var constructorTwo = new Constructor("What horror movie has a shape-shifting alien murdering humans in Antartica?", "the thing");
var constructorThree = new Constructor("What horror movie has the famous 'Redrum' phrase?", "the shining");
var constructorFour = new Constructor("What action trilogy movie has the iconic 'light saber'?", "star wars");
var constructorFive = new Constructor("What movie trilogy is based off a ring of power?", "lord of the rings");
var constructorSix = new Constructor("What famous movie is based off prison escape with yours truly Morgan Freeman?", "shawshank redemption");
var constructorSeven = new Constructor("What movie is based off fighting or busting ghosts?", "ghostbusters");
var constructorEight = new Constructor("What movie is based off a roman general fighting in the arenas as a slave?", "gladiator");
var constructorNine = new Constructor("What movie has the quotes 'Life is like a box of chocolate, you'll never know what you get'?", "forrest gump");
var constructorTen = new Constructor("This movie has dinosaurs. ' got lazy with questions' ", "jurassic park");

var count = 0;
var array = [];

//.. push it ..//
array.push(constructorOne, constructorTwo, constructorThree, constructorFour, constructorFive, constructorSix, constructorSeven, constructorEight, constructorNine, constructorTen);


var askQuestion = function() {


//.. count 10, front of the question is asked, then has scenario whether right or wrong..//
    if(count < 10) {
        inquirer.prompt([
           {name: "name",
            message: array[count].front
        } 
        ])
        .then(function(answer) {
            if((answer.name).toLowerCase() === array[count].back) {
                console.log("you are correct");
                count++
                askQuestion();
            }
            else {
                console.log("WRONG!!!!")
                console.log(array[count].back + " is the correct answer.")
                count++
                askQuestion();
            }

            }
        )};

    }

// .. remember to start, i forget this part sometimes (sigh) ..//
askQuestion();

