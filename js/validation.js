let IndexElement = 0
function index(element) {
    for (let i = 0; i < divs.length; i++) {
        if (element === divs[i]) {
            IndexElement = i
        }
    }
}

function validationRight(element) {
    if (element === PlayerLocation) {
        imgInPlayerMove('css/img/mario.gif')
        Player = document.getElementById('Player')

        index(element)

        if(divs[IndexElement + 1].className === 'Cell' || divs[IndexElement + 1].className === 'Final'){
        divs[IndexElement + 1].appendChild(Player)
        }
    }
}

function validationLeft(element) {
    if (element === PlayerLocation) {
        imgInPlayerMove('css/img/marioleft.gif')
        Player = document.getElementById('Player')

        index(element)
        if(divs[IndexElement - 1].className === 'Cell'){
        divs[IndexElement - 1].appendChild(Player)
        }
    }
}

function validationUp(element) {
    if (element === PlayerLocation) {
        imgInPlayerMove('css/img/marioup.gif')
        Player = document.getElementById('Player')

        index(element)
        if(divs[IndexElement - 21].className === 'Cell'){
        divs[IndexElement - 21].appendChild(Player)
        }
    }
}

function validationDown(element) {
    if (element === PlayerLocation) {
        imgInPlayerMove('css/img/mariodown.gif')
        Player = document.getElementById('Player')

        index(element)
        if(divs[IndexElement + 21].className === 'Cell'){
        divs[IndexElement + 21].appendChild(Player)
        }
    }
}

function validationVictory(element) {
    if (element === PlayerLocation) {
        Player = document.getElementById('Player')

        index(element)
        if(divs[IndexElement].className === 'Final'){
            document.body.innerHTML = ''
            VictoryRestart()
        }
    }
}

function VictoryRestart(){
    document.body.classList.add ('FinalContainer')
    let mario = document.createElement('div')
    mario.classList.add('victory')
    let marioimage = new Image()
    marioimage.src = 'css/img/mariovictory.gif'
    mario.appendChild(marioimage)
    document.body.appendChild(mario)

    let RestartButton = document.createElement('button')
    RestartButton.classList.add('RestartButton')
    RestartButton.id = 'RestartButton'
    RestartButton.innerText = 'Jogar Novamente'
    document.body.appendChild(RestartButton)
   
    StopmusicGame()
    PlaymusicVictory()

    RestartButton.addEventListener('click',restart)
}