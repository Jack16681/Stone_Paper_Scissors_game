let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg")
const userScoreNo=document.querySelector("#user-score");
const computerScoreNo=document.querySelector("#computer-score");

//user selection
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userSelection=choice.getAttribute("id");
        playGame(userSelection);
    });
});

//computer selection
const computerSelection = () =>{
    const option=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return option[index];
};

//logic to decide winner
const playGame = (userSelection) =>{
    console.log("Your choice="+userSelection);
    const compChoice=computerSelection();
    console.log("Computer choice="+compChoice);

    if(userSelection===compChoice)
    {
        draw();
    }
    else
    {
        let userWin=true;
        if(userSelection==="rock")
        {
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userSelection==="paper")
        {
            userWin=compChoice==="scissors" ? false : true;
        }
        else
        {
            userWin=compChoice==="rock" ? false : true;
        }
        displayWinner(userWin,compChoice,userSelection);
    }
};

//draw condition
const draw = () =>{
    console.log("Draw");
    msg.innerText="Game Drawn Play Again";
    msg.style.backgroundColor="#081b31";
};

//changes to display the winner
const displayWinner = (userWin,compChoice,userSelection) =>{
    if(userWin){
        console.log("You Win");
        msg.innerText=`You Win! your ${userSelection} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScoreNo.innerText=userScore;
    }
    else{
        console.log("Computer Wins");
        msg.innerText=`Computer Wins! ${compChoice} beats your ${userSelection}`;
        msg.style.backgroundColor="red";
        computerScore++;
        computerScoreNo.innerText=computerScore;
    }
};