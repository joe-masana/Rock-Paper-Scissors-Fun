let userChoice = 0;
let cpuChoice = 0;
let wins = [];
let losses = [];
let ties = [];
const tie = new Audio("sounds/tie-beep.mp3");
const win = new Audio("sounds/win-beep.mp3");
const lose = new Audio("sounds/lose-beep.mp3");

$(".picture").click(function (){

  userChoice = $(this).attr("id");
  console.log(userChoice);
  cpuSelect();

});

document.addEventListener("keydown", function(event) {

    selectPicture(event.key);

}); 

function selectPicture(key) {

  switch (key) {
      case "1":
          userChoice = 1;
          cpuSelect();
      break;
  
      case "2":
          userChoice = 2;
          cpuSelect();
      break;
      
      case "3":
          userChoice = 3;
          cpuSelect();
      break;

      default: console.log("Incorrect key press.")
  };
}

function cpuSelect() {

  cpuChoice = Math.floor(Math.random() * 3) + 1;
  console.log(cpuChoice);

  if (cpuChoice == 1) {
    $(".cpu").attr("src", "images/Rock.png");
  }
  if (cpuChoice == 2) {
    $(".cpu").attr("src", "images/Paper.png");
  }
  if (cpuChoice == 3) {
    $(".cpu").attr("src", "images/Scissors.png");
  }

  if (userChoice == cpuChoice) {
    $(".sign").text("🎭The game is a tie.🎭");
    ties++;
    $(".ties").text("Ties: " + ties);
    tie.play();
  } else if (userChoice == 3 && cpuChoice == 1) {
    $(".sign").text("😫You lose.😫");
    losses++;
    $(".losses").text("Losses: " + losses);
    lose.play();
  } else if (userChoice == 1 && cpuChoice == 3) {
    $(".sign").text("🎉You win!🎉");
    wins++;
    $(".wins").text("Wins: " + wins);
    win.play();
  } else if (userChoice > cpuChoice) {
    $(".sign").text("🎉You win!🎉");
    wins++;
    $(".wins").text("Wins: " + wins);
    win.play();
  } else {
    $(".sign").text("😫You lose.😫");
    losses++;
    $(".losses").text("Losses: " + losses);
    lose.play();
  };

}