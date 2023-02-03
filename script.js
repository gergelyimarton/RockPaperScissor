let userName = prompt("What's your name?")
let userWins = 0,
opponentWins = 0;
const rounds = 5;

//legyen egy funkcio ami nem engedi hogy bot, paper, scissor, rock legyen a neved
//legyen megoldva a jatek elinditasanak a kesleltetese hogy idoben lehessen megnyitni a console-t
//legyen vege ha 3-nal tobb gyozelem van es irja ki a gyoztest

//this function decide who's the winner after the 5th round
function theUltimateWinner (){
    if(userWins < opponentWins){
        console.log("Winner Winner, Chicken dinnner!\nBot is the Ultimate Winner!")
    } else if(userWins = opponentWins){
        console.log("It's a tie! No Ultimate Winner.")
    } else {
        console.log("Winner Winner, Chicken dinner!\n" + userName + " is the Ultimate Winner!")
    }  
}
//this function for the right input form
function isItOkay (){
    let userChoise = prompt("Choose!\nRock, Paper or Scissor?");
    let lowerCaser = userChoise.toLowerCase();
    
    if (lowerCaser !== "rock" && lowerCaser !== "paper" && lowerCaser !== "scissor"){
        return 0
    }

    console.log(userName + " choose: " + lowerCaser)
    return lowerCaser;
}
//this function generate a random choice
function computerPlay() {
    let randomChoose = Math.floor(Math.random() * 3);
    let letsChoice = ""
    
    switch(randomChoose) {
        case 0:
            letsChoice = "rock";
          break;
        case 1:
            letsChoice = "paper";
          break;
        case 2:
            letsChoice = "scissor";
            break;
        default:
            letsChoice = "error";
      }

      console.log("Bot choose: " + letsChoice)
      return letsChoice;
}
//this function decide who's the winner after each round
function whoTheWinner (playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissor"){
        userWins++;
        return "You Win! Rock beats Scissor"
    } else if (playerSelection === "scissor" && computerSelection === "paper"){
        userWins++;
        return "You Win! Scissor beats Paper"
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        userWins++;
        return "You Win! Paper beats Rock"
    } else if (playerSelection === computerSelection){
        return "It's a Tie!"
    } else {
        opponentWins++;
        return "You lost! " + computerSelection + " beats " + playerSelection
    }
}
//this is the game
function gameStart (){
    for (let i = 0; i < rounds; i++){
        itsOkay = false
        playerChoice = ""

        //this is for the wrong input
        while(itsOkay != true){
            playerChoice = isItOkay();
            if (playerChoice === 0){
                console.log("Unknown input. Please choose again!");
            } else {
                itsOkay = true;
            }
        }

        console.log(
                whoTheWinner(
                    playerChoice,
                    computerPlay()))
    
    }
}


gameStart()
theUltimateWinner()

