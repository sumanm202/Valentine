const questionContainer = document.querySelector(".question-container");
const buttonContainer = document.querySelector(".button-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

let isFirstMove = true;

function moveNoButton() {
  const containerRect = buttonContainer.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const padding = 10;

  const maxX = containerRect.width - btnRect.width - padding;
  const maxY = containerRect.height - btnRect.height - padding;

  if (maxX <= 0 || maxY <= 0) return;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

/* ✅ Prevent instant invisible jump on page load */
noBtn.addEventListener("pointerenter", () => {
  if (isFirstMove) {
    isFirstMove = false;
    return;
  }
  moveNoButton();
});

/* Mobile */
noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  moveNoButton();
});

/* YES button */
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
  }, 3000);
});
