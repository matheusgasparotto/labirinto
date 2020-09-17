const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

// Criar divs para transformar no mapa
function creatDiv(divClass) {
    let divName = document.createElement('div')
    divName.classList.add(divClass)
    document.body.appendChild(divName)
}

function creatMap() {
    //Percorrer o array, splitando os elementos dele para ter elementos cotendo W e " ".
    map.forEach(element => {
        const Circuit = element.split('')
        let Wall = 'W'
        const Cells = ' '
        let Player = 'S'
        const Final = 'F'
        //Percorrendo os arrays(elementos), verificando se é parede ou célula
        Circuit.forEach(element => {
            if (element === Wall) {
                creatDiv('Wall')
            }
            if (element === Cells) {
                creatDiv('Cell')
            }
            if (element === Player) {
                creatDiv('Player')
            }
            if (element === Final) {
                creatDiv('Final')
            }
        })
    })
}

function imgInPlayerFirst(link) {
    Player = document.querySelector('.Player')
    let imgPlayer = new Image()
    imgPlayer.src = link
    imgPlayer.id = 'Player'
    Player.appendChild(imgPlayer)
}

function imgInPlayerMove(link) {
    imgPlayer = document.getElementById('Player')
    imgPlayer.src = link
    imgPlayer.id = 'Player'
    PlayerLocation.appendChild(imgPlayer)
}

function imgInWall() {
    Wall = document.querySelectorAll('.Wall')
    Wall.forEach(element => {
        imgWall = new Image()
        imgWall.src = 'css/img/wall.png'
        element.appendChild(imgWall)
    });

}