const App = () => {
    let time = 0;

function counter() {
time++;
document.body.textContent = `Czas spędzony na stronie to: ${time} sekund.`;
};

return counter

};

setInterval(App(), 1000);