let divs = []

function captionDivs(){
    divs = document.querySelectorAll('div')
}
document.addEventListener('keydown', move)

function move(event) {
    PlayerLocation = document.getElementById('Player').parentElement
    const Keyname = event.key

    if (Keyname == 'ArrowDown') {
        divs.forEach(validationDown)
        divs.forEach(validationVictory)
    }
    if (Keyname == 'ArrowUp') {
        divs.forEach(validationUp)
        divs.forEach(validationVictory)
    }
    if (Keyname == 'ArrowLeft') {
        divs.forEach(validationLeft)
        divs.forEach(validationVictory)
    }
    if (Keyname == 'ArrowRight') {
        divs.forEach(validationRight)
        divs.forEach(validationVictory)
    }

}