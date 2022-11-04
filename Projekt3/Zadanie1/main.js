// tutaj rozwiązanie

const btnElement = document.querySelector('button');
const liElements = document.querySelectorAll('li');
const liElementsArr = [...liElements];

let fontSizeValue = 10;

const increaseFont = () => {
    
    // Rozwiązanie za pomocą forEach:

    liElementsArr.forEach((el) => {
        if(!el.style.display) {
            el.style.display = "block";
        };
    });

    liElementsArr.forEach((liElement) => {
        liElement.style.fontSize = fontSizeValue + "px";
    });
    fontSizeValue++;



    // Rozwiązanie za pomocą zwykłej pętli:

    /* for (let i = 0; i < liElementsArr.length; i++) {

        if (liElementsArr[i].style.display = "none") {
            liElementsArr[i].style.display = "block";
        };

        liElementsArr[i].style.fontSize = fontSizeValue + "px";
    };
    fontSizeValue++;
    */


};


btnElement.addEventListener('click', increaseFont);
