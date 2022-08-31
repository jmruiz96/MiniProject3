var ties = 0;
var wins = 0;
var losses = 0;
// console.log("hello");
function game() {
    var userInput = prompt("Please enter R, P or S...").toUpperCase();
    // userInput = userInput.toUpperCase();
    console.log(userInput);

    if ((userInput === "R") || (userInput === "P") || (userInput === "S")) {
        // alert("Correct input");
        var compOptions = ["R", "P", "S"];
        var randNum = Math.floor(Math.random() * (compOptions.length - 0) + 0); //2
        var compPick = compOptions[randNum]; //compOption[2]
        alert("Computer Pick : " + compPick);
        if (userInput === compPick) {
            ties++;
            alert("Tie");
        } else if ((userInput === "P" && compPick === "R")) { userInput|| () || ()
            wins++;
            alert("you win");
        } else {
            losses++;
            alert("Better luck next time");
        }

        alert(`Score:
    wins: ${wins}
    ties: ${ties}
    losses: ${losses}`);

        var playAgain = confirm("Do you want to play again?");
        console.log(playAgain);

        if (playAgain) { //playAgain === true
           game();
        }else {
            alert("Thank you for playing")
        }


    } else {
        alert("try again");
    }
}

game();