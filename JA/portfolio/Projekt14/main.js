
const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let number = 0;
let indexText = 0;


const addLetter = () => {
    spnText.textContent += txt[indexText][number];
    number++;

    if (number === txt[indexText].length) {
        setTimeout(() => {
            spnText.textContent = "";
            indexText++;
            number = 0;
            addLetter()
        }, 1000)
    } else {
        setTimeout(addLetter, 300)
    }
}
addLetter()


const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);
