function splash() {
    var splash = document.getElementById('splash');
    var home = document.getElementsByClassName('home')[0]
    splash.classList.remove("ball-green")
    splash.classList.add("ball")
    splash.style.left = (home.getBoundingClientRect().left + (home.offsetWidth / 2)) + 'px'
    splash.style.top = (home.getBoundingClientRect().top + (home.offsetHeight / 2)) + 'px'
    splash.style.display = '';
    splash.classList.add('splash');
    setTimeout(() => {
        document.getElementById('home').style.display = 'none'
        document.getElementById('who').style.display = ''
        splash.style.display = 'none'
        splash.classList.remove('splash')
    }, 1000);
}
function homePage() {
    var splash = document.getElementById('splash');
    var home = document.getElementById('who')
    splash.classList.remove("ball")
    splash.classList.add("ball-green")
    splash.style.left = (home.getBoundingClientRect().left + (home.offsetWidth / 2)) + 'px'
    splash.style.top = (home.getBoundingClientRect().top + (home.offsetHeight / 2)) + 'px'
    splash.style.display = '';
    splash.classList.add('splash');
    setTimeout(() => {
        document.getElementById('home').style.display = ''
        document.getElementById('who').style.display = 'none'
        splash.style.display = 'none'
        splash.classList.remove('splash')
    }, 1000);
}