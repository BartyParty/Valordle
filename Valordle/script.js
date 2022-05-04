import { WORDS } from "./words.js"

const NUMBER_OF_GUESSES = 6
let guessesRemaining = NUMBER_OF_GUESSES
let currentGuess = []
let nextLetter = 0 //index of an array
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)] //grab a word from random index (0-1 * length = random index) from array
console.log(rightGuessString)