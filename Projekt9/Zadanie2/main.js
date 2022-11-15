// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide)
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/

const slideList = [
  {
    img: "images/img1.jpg",
    text: "Pierwszy tekst",
  },
  {
    img: "images/img2.jpg",
    text: "Drugi tekst",
  },
  {
    img: "images/img3.jpg",
    text: "Trzeci tekst",
  },
];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

let active = 0;
let time = 3000;

// Interfejs

// Implementacje

const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
};

// const keyChangeSlide = (e) => {
//   let key = e.keyCode;

//   switch (key) {
//     case 37:
//       active--;
//       clearInterval(interval);
//       break;
//     case 39:
//       active++;
//       clearInterval(interval);
//       break;
//   }

//   if (active === slideList.length) {
//     active = 0;
//   } else if (active < 0) {
//     active = slideList.length - 1;
//   }

//   image.src = slideList[active].img;
//   h1.textContent = slideList[active].text;
//   changeDot();
//   setInterval(changeSlide, time);
// };

const keyChangeSlide = (e) => {
  let key = e.keyCode;

  if (key === 37 || key === 39) {
      switch (key) {
        case 37:
            active--;
          break;
        case 39:
            active++;
          break;
      };
    
      if (active === slideList.length) {
        active = 0;
       } else if (active < 0) {
        active = slideList.length - 1;
       }
    
      clearInterval(interval);
      interval = setInterval(changeSlide, time)
      image.src = slideList[active].img;
      h1.textContent = slideList[active].text;
      changeDot();
  }

};

let interval = setInterval(changeSlide, time);

// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener("keydown", keyChangeSlide);
