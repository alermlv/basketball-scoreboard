const homeDisplayEl = document.querySelector(".home-points");
const awayDisplayEl = document.querySelector(".away-points");
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
  homeDisplayEl.textContent = homePoints;
  awayDisplayEl.textContent = awayPoints;
}