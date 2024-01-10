const possibilities = ["walcz", "przemyśl to jeszcze raz"];
const btnAdd = document.querySelector(".add");
const input = document.querySelector("input");
const btnClean = document.querySelector(".clean");
const btnAdvice = document.querySelector(".showAdvice");
const show = document.querySelector("h1");
const btnOptions = document.querySelector(".showOptions");


btnAdd.addEventListener("click",
    (e) => {
        e.preventDefault();
        let advice = input.value;
        if (advice.length) {
            for (possibilitie of possibilities) {
                if (possibilitie === advice) {
                    alert("Taka możliwość już jest");
                    return
                }
            }
            possibilities.push(advice);
            console.log(possibilities);
            alert(`dodana została opcja ${advice}`)
        } else {
            alert("pole jest puste")
        }
        input.value = "";
    })

btnClean.addEventListener("click", (e) => {
    e.preventDefault()
    possibilities.length = 0;
})

btnAdvice.addEventListener("click", function () {
    const index = Math.floor(Math.random() * possibilities.length);
    show.textContent = possibilities[index];
})

btnOptions.addEventListener("click", function () {
    alert(possibilities)
})