const divs = document.querySelectorAll('div')

document.addEventListener('keydown', move)

function move(event) {
    PlayerLocation = document.getElementById('Player').parentElement
    const Keyname = event.key

    if (Keyname == 'ArrowDown') {
        divs.forEach(validationDown)
        console.log('foi')
    }
    if (Keyname == 'ArrowUp') {
        divs.forEach(validationUp)
    }
    if (Keyname == 'ArrowLeft') {
        divs.forEach(validationLeft)
    }
    if (Keyname == 'ArrowRight') {
        divs.forEach(validationRight)
    }


}

function validationRight(element) {
    if (element === PlayerLocation) {
        Player = document.getElementById('Player')

        index(element)

        if(divs[IndexElement + 1].className === 'Cell'){
        divs[IndexElement + 1].appendChild(Player)
        }
    }
}

function validationLeft(element) {
    if (element === PlayerLocation) {
        Player = document.getElementById('Player')

        index(element)
        if(divs[IndexElement - 1].className === 'Cell'){
        divs[IndexElement - 1].appendChild(Player)
        }
    }
}

function validationUp(element) {
    if (element === PlayerLocation) {
        Player = document.getElementById('Player')

        index(element)
        if(divs[IndexElement - 21].className === 'Cell'){
        divs[IndexElement - 21].appendChild(Player)
        }
    }
}

function validationDown(element) {
    if (element === PlayerLocation) {
        Player = document.getElementById('Player')

        index(element)
        if(divs[IndexElement + 21].className === 'Cell'){
        divs[IndexElement + 21].appendChild(Player)
        }
    }
}

let IndexElement = 0

function index(element) {
    for (let i = 0; i < divs.length; i++) {
        if (element === divs[i]) {
            IndexElement = i
        }
    }
}