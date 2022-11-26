function splash() {
    var splash = document.getElementById('splash')
    console.log(splash)
    splash.style.transform = "scale(5)"
    setTimeout(() => {
        splash.style.transform = "scale(30)"
    }, 500)
}