let typeout = document.getElementById('typeout')
const outputWords = [
    'Bakytzhan',
    'Tamerlan',
    'Radmir',
    'Aibek',
    'Abylaikhan',
    'Dulat'
]

let wordIndex = 0
let charIndex = 0

printWord()
function printWord(){
    if(outputWords[wordIndex].length>charIndex){
        typeout.innerHTML += outputWords[wordIndex].charAt(charIndex)
        charIndex++
        setTimeout(printWord, 150)
    }else{
        setTimeout(deleteWord, 100)
    }
}

function deleteWord(){
    if(charIndex>=0){
        typeout.innerHTML = outputWords[wordIndex].substr(0, charIndex)
        charIndex--
        setTimeout(deleteWord, 100)
    }else{
        wordIndex++
        if(wordIndex>=outputWords.length){
            wordIndex = 0
        }
        setTimeout(printWord, 150)
    }
}