//function name(parameter){ code.. }
// showWord()
// function showWord(){
//     alert('Hello world!')
// }
// showWord()
// showWord()

function showWord(from, to){
    document.write(`<h1>Hello from ${from} to ${to}</h1>`)
}
showWord('Bakytzhan', 'Alnur')

function square(a){
    return a*a
}
console.log(square(2))

// condition ? code : code  
console.log(2>5 ? 2 : 5)
let number = 5
console.log(number>6 ? "Hello" : "Incorrect")

//2
function function1(a,b,c) {
    a=a-b
    c=c/a
    return c
}
console.log(function1(5,2,3))
//7
let numbers = [1,2,3,5,2,-1,3,-5,-10,10,20,5]
maxAndMin(numbers)
function maxAndMin(arr){
    let max = arr[0]
    let min = arr[0]
    let sum = 0
    for(let i in arr){
        if(max<arr[i]){
            max = arr[i]
        }
        if(min>arr[i]){
            min = arr[i]
        }
        sum+=arr[i]
    }
    document.write(`<h1>Max is ${max}</h1>`)
    document.write(`<h1>Min is ${min}</h1>`)
    document.write(`<h1>Sum is ${sum}</h1>`)
    document.write(`<h1>Average is ${sum/arr.length}</h1>`)
}
