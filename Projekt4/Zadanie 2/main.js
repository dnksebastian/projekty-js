// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

const bodyElement = document.body;

let changeBackgroundColor = (e) => {
  let x = e.clientX;
  let y = e.clientY;

  let color;

  if (x % 2 === 0 && y % 2 === 0) {
    color = "red";
  } else if (x % 2 !== 0 && y % 2 !== 0) {
    color = "blue";
  } else {
    color = "green";
  }

  console.log(x, y);
  bodyElement.style.backgroundColor = color;
};

bodyElement.addEventListener("click", changeBackgroundColor);
