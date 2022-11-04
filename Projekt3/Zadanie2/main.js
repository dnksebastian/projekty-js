let size = 10;
let orderElement = 1;

const init = () => {
  const btnElement = document.createElement("button");
  btnElement.textContent = "Dodaj 10 elementów listy";

  const btnResetElement = document.createElement('button');
  btnResetElement.textContent = "Wyczyść wszystkie elementy";
  btnResetElement.style.marginLeft = 10 + "px";

  const ulElement = document.createElement("ul");

  window.document.body.appendChild(btnElement);
  window.document.body.appendChild(btnResetElement);
  window.document.body.appendChild(ulElement);

  btnElement.addEventListener("click", createLiElements);
  btnResetElement.addEventListener('click', resetElements);
};

const createLiElements = () => {

    const ulEl = document.querySelector('ul');

  for (let i = 0; i < 10; i++) {
    const liElement = document.createElement('li');
    liElement.textContent = `Element nr ${orderElement}`;
    liElement.style.fontSize = `${size}px`;
    ulEl.appendChild(liElement);
    size++;
    orderElement++;
  };
};

const resetElements = () => {
    const ulElement = document.querySelector('ul');

    if (ulElement.childNodes) {
        ulElement.replaceChildren();
    };

    size = 10;
    orderElement = 1;
};

init();
