function square(number){
    return number * number
}

let number = 10

document.write(`<h1>${square(number)}</h1>`)

let kvadrat = function(number){
    return number*number
}
document.write(`<h1>${kvadrat(number)}</h1>`)

let factorial = function fac(n){
    return n<2 ? 1 : n * fac(n-1)
}

document.write(`<h1>${factorial(number)}</h1>`)

function sumOfArr(n){
    sum = 0
    for(let index in n){
        sum+=n[index]
    }
    return sum
}

let arr = [12,4,5,23,13,6]
document.write(`<h1>${sumOfArr(arr)}</h1>`)

function randomNum(){
    let arr = []
    min=20
    max=98
    for(let i=0;i<10;i++){
        arr[i]=Math.floor(getRandomArbitrary(min,max))
    }
    for(let index in arr){
        document.write(arr[index]+', ')
    }
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
randomNum()

function sort(arr){
    return arr.sort((a,b)=>a-b)
}
let arrNum = [10, 5, 8, 6, 2, 9]
console.log(sort(arrNum))
