const homeDisplay = document.querySelector(".home-display");
const awayDisplay = document.querySelector(".away-display");
const addPointsButtons = document.querySelectorAll(".add-points-button");
let homePoints = 0;
let awayPoints = 0;

function addPoints(obj) {
  if (obj.classList.contains("home-button")) {
    homePoints += +obj.value;
  } else {
    awayPoints += +obj.value;
  }
  updateScore();
}

function updateScore() {
  homeDisplay.textContent = homePoints;
  awayDisplay.textContent = awayPoints;
}