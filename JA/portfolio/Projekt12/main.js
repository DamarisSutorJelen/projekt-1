const input = document.querySelector("input");
const passwords = ['jeden', 'dwa'];
const messages = ["super", "działa!"]
const div = document.querySelector('div');

const showMessage = (e) => {
    const text = e.target.value
    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            input.value = "";
        }
    })
}

input.addEventListener("input", showMessage)
