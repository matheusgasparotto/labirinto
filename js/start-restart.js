let button = document.getElementById('ButtonStart')

button.addEventListener('click', start)

function start(){
    document.body.removeChild(button)
    PlaymusicGame()
    creatMap()
    imgInWall()
    imgInPlayerFirst('css/img/mario.gif')
    captionDivs()
}


function restart(){
    window.location.reload()
}

