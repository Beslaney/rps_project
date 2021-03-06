const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const rock = '<img src="rock.svg" id="rock" alt="rock">'
const paper = '<img src="paper.svg" id="paper" alt="paper">'
const scissors = '<img src="scissors.svg" id="scissors" alt="scissors">'
const SELECTIONS = [
    {
    name: 'rock',
    emoji: rock,
    beats: 'scissors'
    },
    {
    name: 'paper',
    emoji: paper,
    beats: 'rock'
    },
    {
    name: 'scissors',
    emoji: scissors,
    beats: 'paper'
    }
]

selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButtons.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerHTML = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

function showTime() {
    var d = new Date();
    
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = days[d.getDay()] + ", " + month[d.getMonth()] + " " +  d.getDate();
    
    var hours = d.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    var min = d.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    var sec = d.getSeconds();
    if (sec < 10) {
        sec = "0" + sec;
    }
    var time = hours + ":" + min + ":" + sec;
    
    var datetime = date + ", " + time;
    document.getElementById('date').innerHTML = datetime;
}
setInterval(showTime, 1000);