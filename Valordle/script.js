//Initial setup

import { WORDS } from "./words.js"

const NUMBER_OF_GUESSES = 6
let guessesRemaining = NUMBER_OF_GUESSES
let currentGuess = [] //each letter goes in as an array so you can compare individual letters
let nextLetter = 0 //index of an array
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)] //grab a word from random index (0-1 * length = random index) from array
console.log(rightGuessString)

//Create the game board

function initBoard() {
    let board = document.getElementById("game-board")

    //loop to create 6 rows for the number of guesses

    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        let row = document.createElement("section")
        row.className = "letter-row"

        //nested loop to create the number of columns to guess from
        //THIS WILL NEED TO CHANGE TO ACCOMODATE DIFFERENT WORD LENTHS (rightGuessString.length?)
        
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("section")
            box.className = "letter-box"
            row.appendChild(box)
        }

        board.appendChild(row)
    }
}

initBoard()

