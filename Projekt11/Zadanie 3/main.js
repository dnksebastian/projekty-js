// http://websamuraj.pl/examples/js/projekt11/

const startBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");
const timeDiv = document.querySelector(".time div");

let startTime = 0;
let isCounting = false;
let intervalID;

const countTime = () => {
  if (!isCounting) {
    startBtn.textContent = "Pauza";
    isCounting = !isCounting;
    intervalID = setInterval(startCounting, 10);
  } else {
    isCounting = !isCounting;
    startBtn.textContent = "Start";
    clearInterval(intervalID);
  }
};

const startCounting = () => {
  startTime++;
  timeDiv.textContent = (startTime / 100).toFixed(2);
};

const resetCounter = () => {
  startTime = 0;
  isCounting = false;
  clearInterval(intervalID)
  timeDiv.textContent = "---";
  startBtn.textContent = "Start";
};

startBtn.addEventListener("click", countTime);
resetBtn.addEventListener("click", resetCounter);

