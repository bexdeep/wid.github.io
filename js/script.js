window.onload = function () {
    const button = document.getElementById("ctaButton");
    button.onmouseover = () => {
        console.log(button.className);
        if (button.ClassName == "button buttonvisible") {
            button.classList.remove("buttonvisible");
        }

    }
};

window.addEventListener('scroll', () => {
    const button = document.getElementById("ctaButton");
    const windowHeight = window.innerHeight;
    var buttonTop = button.getBoundingClientRect().top;
    var checkVisible = ((buttonTop - windowHeight + 25) < 0 && buttonTop > 0) ? 1 : 0;
    if (checkVisible) {
        if (button.ClassName != "button buttonvisible") button.classList.add("buttonvisible");
    } else {
        button.className = "button";
    }
})

