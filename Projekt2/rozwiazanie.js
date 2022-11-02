/*
1.	body ma mieć 10000px wysokości (by pojawił się scrollbar). Przypisz taką wartość do właściwości document.body.style.height.
*/

document.body.style.height = 10000 + "px";

/*
2.	Tworzymy (za pomocą JS oczywiście) div-a i dodajemy go do body (wykorzystaj metody createElement() i appendChild())
*/

const divElement = document.createElement("div");
document.body.appendChild(divElement);

/* 
3.	określamy parametry kwadratu. Ma on mieć 100% szerokości (width ustaw na "100%"), ma być przyklejony do okna przeglądarki (position ustaw na  "fixed"), left i top na 0, kolor tła (backgroundColor) na „green”, zas wartość height ma być pobierana ze zmiennej size (czyli ma wynosić size + „px”)
*/

let size = 10;

divElement.style.width = 100 + "%";
divElement.style.position = "fixed";
divElement.style.top = 0;
divElement.style.left = 0;
divElement.style.backgroundColor = "green";
divElement.style.height = size + "px";

/* 
4.	ustawienie nasłuchiwanie (metoda addEventListener()) na scroll (pamietaj, że scroll jest zdarzenie na window) i wywołanie przy każdym skrolowaniu funkcji changeHeight. W przykładzie była użyta funkcja anonimowa natomiast teraz w metodzie addEventListener pośłużymy się funkcją, którą zadeklarujemy w zakresie globalnym (nazwij tę funkcję changeHeight).
*/

let isGrowing = true;

const changeHeight = () => {

  if (size >= window.innerHeight / 2) {
    isGrowing = !isGrowing;
  } else if (size <= 0) {
    isGrowing = !isGrowing;
  }

  if (isGrowing) {
    size += 5;
    divElement.style.height = size + "px";
    divElement.style.backgroundColor = "green";
  } else {
    size -= 5;
    divElement.style.height = size + "px";
    divElement.style.backgroundColor = "red";
  }
};

window.addEventListener("scroll", changeHeight);

/* 
5.	zadanie, które ma realizować funkcja: prostokąt (div) rośnie do 50% wysokości okna przeglądarki (window.innerHeight/2). Tylko wysokość zmieniamy, szerokość bez zmian.
*/

/*
6.	Po osiągnięciu 50% wysokości okna przeglądarki, nasz element div zaczyna maleć oraz zmienia kolor tła na czerwony. Wykorzystaj instrukcje warunkową i zmienną jako flagę (typ boolean).
*/

/* 
7.	Kiedy wysokość div-a będzie mniejsza od 0 to odwracamy działanie: teraz ma znowu rośnie i zmienia kolor na zielony.
*/
