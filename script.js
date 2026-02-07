const buttonContainer = document.querySelector(".button-container");
const noBtn = document.querySelector(".js-no-btn");
const yesBtn = document.querySelector(".js-yes-btn");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");

let firstHover = true;

function moveNoButton() {
  const container = buttonContainer.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();
  const padding = 10;

  const maxX = container.width - btn.width - padding;
  const maxY = container.height - btn.height - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

/* PC */
noBtn.addEventListener("pointerenter", () => {
  if (firstHover) {
    firstHover = false;
    return;
  }
  moveNoButton();
});

/* Mobile */
noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  moveNoButton();
});

/* Yes click */
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
  }, 3000);
});
