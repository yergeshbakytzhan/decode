let typeout = document.getElementById('typeout')
const outputWords = [
    'Bakytzhan',
    'Marina',
    'Magzhan',
    'Murat',
    'Nursultan'
]

let wordIndex = 0;
let charindex = 0;

printWord()

function printWord(){
    if(outputWords[wordIndex].length > charindex){
        typeout.innerHTML += outputWords[wordIndex].charAt(charindex)
        charindex+=1
        setTimeout(printWord,150)
    }else{
        setTimeout(deleteWord,50)
    }
}

function deleteWord(){
    if(charindex>=0){
        typeout.innerHTML = outputWords[wordIndex].substr(0, charindex)
        charindex-=1
        setTimeout(deleteWord, 50)
    }else{
        wordIndex+=1
        if(wordIndex >= outputWords.length){
            wordIndex = 0
        }
        setTimeout(printWord,150)
    }
}