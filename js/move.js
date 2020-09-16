const divs = document.querySelectorAll('div')

function move() {
    PlayerLocation = document.getElementById('Player').parentElement

    divs.forEach(validation)

}

function validation(element) {
    if (element === PlayerLocation) {
        Player = document.getElementById('Player')

        index(element)

        divs[IndexElement + 1].appendChild(Player)
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