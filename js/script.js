
const button = document.getElementById("ctaButton");

function buttonMouseOver() {
    if (!button.classList.contains("animateButton")) button.classList.add("animateButton");
    else {
        button.classList.remove("animateButton");
        button.offsetWidth = button.offsetWidth;
        button.classList.add("animateButton");
    }
}

function isVisible(el) {
    var elTop = el.getBoundingClientRect().top;
    return (elTop - window.innerHeight + 25) < 0 && elTop > 0;
}


window.onload = () => {
    if (isVisible(button)) button.classList.add("animateButton");
}

window.addEventListener('scroll', () => {
    if (isVisible(button)) {
        if (!button.classList.contains("animateButton")) {
            button.classList.add("animateButton");
        }
    } else {
        button.className = "button";
    }
})

button.addEventListener('mouseenter', buttonMouseOver);

