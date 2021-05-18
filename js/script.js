window.addEventListener('scroll', () => {
    const button = document.getElementById("ctaButton");
    var buttonTop = button.getBoundingClientRect().top;
    var buttonIsVisible = (buttonTop - window.innerHeight + 25) < 0 && buttonTop > 0;
    if (buttonIsVisible) {
        if (button.ClassName != "button animateButton") button.classList.add("animateButton");
    } else {
        button.className = "button";
    }
})