const btnStart = document.querySelector(".main");
const btnClean = document.querySelector('.reset');
const time = document.querySelector('.time div');
let number = 0;
let flag = false;
let index;

const timer = () => {
    if (!flag) {
        flag = !flag;
        btnStart.textContent = "Pauza";
        index = setInterval(start, 10)
    } else {
        flag = !flag;
        btnStart.textContent = "Start";
        clearInterval(index);
    }
}

const start = () => {
    number++
    time.textContent =
        (number / 100).toFixed(2);
}

const reset = () => {
    time.textContent = "---";
    btnStart.textContent = "Start";
    flag = false;
    clearInterval(index);
    number = 0;
}

btnStart.addEventListener("click", timer);
btnClean.addEventListener("click", reset);