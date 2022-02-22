let typeout = document.getElementById('typeout')
const outputWords = [
    'Bakytzhan',
    'Ansar',
    'Dauren',
    'Erbol',
    'Nurdaulet',
    'Nurbolat'
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
        setTimeout(deleteWord,50)
    }
}
function deleteWord(){
    if(charIndex>=0){
        typeout.innerHTML = outputWords[wordIndex].substr(0, charIndex)
        charIndex--
        setTimeout(deleteWord,50)
    }else{
        wordIndex++
        if(wordIndex>=outputWords.length){
            wordIndex=0
        }
        setTimeout(printWord, 150)
    }
}