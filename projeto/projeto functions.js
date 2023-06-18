const result = document.querySelector(".result")

const humanScore = document.querySelector("#humanScore")

const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanPlay) => {
    playTheGame(humanPlay, playMachine())
}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log("Humano:" + human + " " + "Maquina:" + machine)
    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if (human === "paper" && machine === "rock" || human === "scissors" && machine === "paper" || human === "rock" && machine === "scissors") {
        result.innerHTML = "Voce ganhou"
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = "Voce perdeu para a maquina &#x1F622; "
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}