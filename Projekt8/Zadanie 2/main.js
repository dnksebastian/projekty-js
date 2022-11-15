// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem
// Użyj setTimeout zamiast setInterval,
// Opóźnij start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = ["tekst1", "tekst2", "tekst3"];

let txtLetter = -10;
let currentTxt = 0;

// Implementacja
const addLetter = () => {
  // Użyj w środku setTimeout

  if (txtLetter >= 0) {
    spnText.textContent += txt[currentTxt][txtLetter];
  }

  txtLetter++;

  if (txtLetter === txt[currentTxt].length) {
    currentTxt++;

    if(currentTxt === txt.length) {
      return
    }
  
    const reset = () => {
      txtLetter = -10;
      spnText.textContent = "";
      addLetter();
    };

    return setTimeout(reset, 1500);
  }

  setTimeout(addLetter, 200);


  //  setTimeout(addLetter, 1500);
};

addLetter(); //pierwsze wywołanie

// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
