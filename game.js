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

displayWord();

function updateWrongLetters(){

   wrongLetterEl.innerHTML =`
        ${wrongLetters.length>0 ? '<p>WrongLetters</p>':''}
        ${wrongLetters.map(letter=>`<span>${letter}</span>`)}

   `

   //disply figure parts for each wrong letter
   figureParts.forEach((part,index)=>{
       const errors = wrongLetters.length;
       if(index<errors){
           part.style.display='block'
       }
       else{
           part.style.display='none'
       }
   })
}
//show notification
function showNotifcation(){
    notification.classList.add('show');

    setTimeout(()=>{
    notification.classList.remove('show')
    },2000)
}
//keypress on the browserwindow

document.addEventListener('keydown',e=>{
    //console.log(e.keyCode)

    if(e.keyCode >=65 && e.keyCode<=90){
        const letter = e.key;
        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord()
            }
            else{
               showNotification()
            }
        }
        else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter)
                 updateWrongLetters()
            }
            else{
                showNotifcation()
            }
        }
    }   
})