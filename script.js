const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");

const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

/* MOVE NO BUTTON ANYWHERE ON SCREEN */
function moveNoButton() {
  const btnRect = noBtn.getBoundingClientRect();
  const padding = 10;

  const maxX =
    document.documentElement.clientWidth - btnRect.width - padding;
  const maxY =
    document.documentElement.clientHeight - btnRect.height - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

/* Desktop → hover */
noBtn.addEventListener("mouseenter", moveNoButton);

/* Mobile → touch */
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

/* YES button click */
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
  }, 3000);
});
