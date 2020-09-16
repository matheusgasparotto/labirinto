let button = document.getElementById('ButtonStart')

button.addEventListener('click', start)



function start(){
    document.body.removeChild(button)
    PlaymusicGame()
    creatMap()
    imgInWall()
    imgInPlayer()
    captionDivs()
}


function restart(){
    window.location.reload()
}

