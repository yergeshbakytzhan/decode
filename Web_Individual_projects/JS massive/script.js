let fruits = ['Apple','Banana']
console.log(fruits.length)

let first = fruits[0]

let last = fruits[fruits.length-1]

fruits.forEach(function(item,index,fruits){
    document.write(`<p>${item}, ${index}</p>`)
})

let newfruits = fruits.push('Orange')

document.write(`<p>${fruits.length}</p>`)

let lastfruit = fruits.pop()
document.write(`<p>${fruits.length}</p>`)

let firstfruit = fruits.shift()

document.write(`<p>${fruits.length}</p>`)

let newLength = fruits.unshift('Ananas')

document.write(`<p>${fruits.length}</p>`)

let lastOne = [1,2,3,4,5]
let lastElement = lastOne.pop()
document.write(`<p>${lastElement.length}</p>`)

let pos = fruits.indexOf('Banana')

document.write(`<p>${pos}</p>`)

let removedItem = fruits.splice(pos,1)
document.write(`<p>${removedItem[0]}</p>`)


let cars = ['BMW','Mercedes','Toyota','Audi','Lexus']

for(let i=0;i<cars.length;i++){
    document.write(`<p>${cars[i]}</p>`)
}

// for(let index in cars)

for(let index in cars){
    document.write(`<p>${cars[index]}</p>`)
}

//for(let item of cars)

for(let item of cars){
    document.write(`<p>${item}</p>`)
}

let number = [24, 26, 10, 100, 50, 20, 5]

let max = number[0]
let min = number[0]
let sum = 0

for(let i=0;i<number.length;i++){
    if(max<number[i]){
        max = number[i]
    }
    if(min>number[i]){
        min = number[i]
    }
}
document.write(`<p>Max element of array: ${max}</p>`)
document.write(`<p>Min element of array: ${min}</p>`)

for(let i=0;i<number.length;i++){
    sum +=number[i]
}
document.write(`<p>Sum of array: ${sum}</p>`)

let number1 = [22,22,30,30,30,30,30,30,30,60,50,50,50,50,50,50]
let maxfrq = 0
let num = number1[0]

for(let i=0;i<number1.length;i++){
    let frq = 0
    for(let j=0;j<number1.length;j++){
        if(number1[i]==number1[j]){
            frq+=1
        }
    }
    if(frq>maxfrq){
        maxfrq=frq
        num = number1[i]
    }
}

if (maxfrq > 1){
    document.write('<p>'+maxfrq+ 'раз(а) встречается число'+ num+'</p>')
}else{
    document.write('<p>Все элементы уникальны</p>')
}