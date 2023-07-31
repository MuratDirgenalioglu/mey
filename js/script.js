function splash() {
    var splash = document.getElementById('splash');
    var home = document.getElementsByClassName('home')[0]
    splash.style.left = (home.getBoundingClientRect().left + (home.offsetWidth / 2)) + 'px'
    splash.style.top = (home.getBoundingClientRect().top + (home.offsetHeight / 2)) + 'px'
    splash.style.display = '';
    splash.classList.add('splash');
    setTimeout(() => {
        window.location.replace("/home.html");
    }, 1000);
}