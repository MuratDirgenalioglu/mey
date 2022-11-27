function splash() {
    var splash = document.getElementById('splash');
    splash.style.display = 'block';
    splash.classList.add('splash');
    setTimeout(() => {
        window.location.href = "about-me.html";
    }, 1100);
}