const bar = document.querySelector(".bar");
const arrow = document.querySelector(".arrow");
const menu = document.querySelector(".slide-menu");
const btnport = document.querySelector(".welcome .myportfolio");
const h1 = document.querySelector(".portfolio h1");
const table = document.querySelector(".portfolio table");
const btnport2 = document.querySelector(".slide-menu .port")
const footer = document.querySelector("footer");
const btnmain = document.querySelector(".slide-menu .main")

let menuOpen = false;
function toggleMenu() {
    if (!menuOpen) {
        menu.style.left = "0";
        bar.style.display = "none";
        arrow.style.display = "block";
    } else {
        menu.style.left = -300 + "px";
        bar.style.display = "block";
        arrow.style.display = "none";
    }
    menuOpen = !menuOpen;

}

bar.addEventListener("click", toggleMenu);

arrow.addEventListener("click", toggleMenu)

const showMain = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
btnmain.addEventListener("click", showMain)

const showPortfolio = (e) => {
    e.preventDefault();
    const windowHeight = window.innerHeight;
    window.scrollTo({
        top: windowHeight,
        behavior: 'smooth'
    });
}

btnport.addEventListener("click", showPortfolio)
btnport2.addEventListener("click", showPortfolio)


function showFooter(e) {
    e.preventDefault();
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });

    console.log(footer)
}

document.querySelector(".slide-menu .contact").addEventListener("click", showFooter)