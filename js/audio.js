let musicGame = new Audio()
musicGame.src = 'audio/thememario.mp3'

function PlaymusicGame(){
    musicGame.play()
}

function StopmusicGame(){
    musicGame.pause()
}

let victoryMusic = new Audio()
victoryMusic.src = 'audio/victory.wav'

function PlaymusicVictory(){
    victoryMusic.play()
}