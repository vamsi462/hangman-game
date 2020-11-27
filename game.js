const  wordEl = document.getElementById('word')
const  wrongLetterEl = document.getElementById('wrong-letters')
const  playBtn =  document.getElementById('play-button')
const  popup =  document.getElementById('popup-container')
const notification =  document.getElementById('notification-container')
const finalMessage =  document.getElementById('final-message')
const  figureParts = document.querySelectorAll('.figure-part')



const words = ['programming','styling','command','javascript','react','redux','mongoose']
let selectedWord = words[Math.floor(Math.random()*words.length)];

const correctLetters =[];
const wrongLetters =[];

//shows hidden word
function displayWord(){
    wordEl.innerHTML = `
        ${(selectedWord)
            .split('')
            .map(letter=>`
                    <span class='letter'>${correctLetters.includes(letter)? letter : ''}
                    </span>`
                )
                    
            .join('')
        }
        `
    const innerWord = wordEl.innerText.replace(/\n/g,'')
    if(innerWord===selectedWord){
        finalMessage.innerText ='Hey!! congratulations you have won!';
        popup.style.display='flex'
    }
}

displayWord()