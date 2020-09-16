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

function creatMap() {
    map.forEach(element => {
        const Circuit = element.split('')
        let Wall = 'W'
        const Cells = ' '
        let Player = 'S'
        const Final = 'F'

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



function imgInPlayer() {
    Player = document.querySelector('.Player')
    imgPlayer = new Image()
    imgPlayer.src = 'css/img/mario.gif'
    imgPlayer.id = 'Player'
    Player.appendChild(imgPlayer)
}


function imgInWall() {
    Wall = document.querySelectorAll('.Wall')
    Wall.forEach(element => {
        imgWall = new Image()
        imgWall.src = 'css/img/wall.png'
        element.appendChild(imgWall)
    });

}
imgInWall()

function creatDiv(divClass) {
    let divName = document.createElement('div')
    divName.classList.add(divClass)
    document.body.appendChild(divName)
}

