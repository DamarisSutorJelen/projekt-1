let red = 100;
let green = 100;
let blue = 100;

// instrukcja if
// const changeColor = (e) => {
//     if (e.keyCode === 38 && red < 255) {
//         document.body.style.backgroundColor = `rgb(${red++}, ${green++},${blue++})`

//     } else if (e.keyCode === 40 && red > 0) {
//         document.body.style.backgroundColor = `rgb(${red--},${green--}, ${blue--})`
//     }

//     console.log(red)
// }


// instrukcja switch
function changeColor(e) {
    switch (e.keyCode) {
        case 38:
            document.body.style.backgroundColor = `rgb(${red < 255 ? red++ : red},${green++},${blue++})`
            console.log(red)
            break;

        case 40:
            document.body.style.backgroundColor = `rgb(${red > 0 ? red-- : red},${green--},${blue--})`
            console.log(red)
            break;
    }
}
window.addEventListener('keydown', changeColor)