function splash() {
    var splash = document.getElementById('splash');
    splash.style.display = 'block';
    splash.classList.add('splash');
    setTimeout(() => {
        window.location.href = "https://www.instagram.com/meyildiz_/";
    }, 1100);
}