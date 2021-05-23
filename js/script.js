
const button = document.getElementById("ctaButton");
button.onmouseover = () => buttonMouseOver();
button.onmouseout = () => buttonMouseOut();

function buttonMouseOver() {
    if (!button.classList.contains("animateButton")) button.classList.add("animateButton");
    else {
        button.classList.remove("animateButton")
        setTimeout(() => { button.classList.add("animateButton") }, 100)
    }
}
function buttonMouseOut() {
    if (button.classList.contains("animateButton")) {
        button.classList.remove("animateButton");
        button.classList.add("hasAnimated");
    }
}

window.onload = () => {
    var buttonTop = button.getBoundingClientRect().top;
    var buttonIsVisible = (buttonTop - window.innerHeight + 25) < 0 && buttonTop > 0;
    if (buttonIsVisible && button.ClassName != "button animateButton") {
        button.classList.add("animateButton");
    }
}

window.addEventListener('scroll', () => {
    console.log(button.className);
    var buttonTop = button.getBoundingClientRect().top;
    var buttonIsVisible = (buttonTop - window.innerHeight + 25) < 0 && buttonTop > 0;
    if (buttonIsVisible) {
        if (!button.classList.contains("animateButton") && !button.classList.contains("hasAnimated")) {
            button.classList.add("animateButton");
        }
    } else {
        button.className = "button";
    }
})