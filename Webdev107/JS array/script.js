//let arr = [1,2,3,4,5,6,7]
let fruits = ['Apple','Pineapple','Banana','Strawberry']
console.log(fruits)

// arr.push('text') добавление с конца
fruits.push('Berry')
console.log(fruits)
// arr.pop() удаление с конца
fruits.pop()
console.log(fruits)
// arr.unshift('text') добавление в начале
fruits.unshift('Berry')
console.log(fruits)
// arr.shift() удаляет первый элемент
fruits.shift()
console.log(fruits)
// arr.indexof('Apple') смотрит индекс элемента
console.log(fruits.indexOf('Pineapple'))
// arr.splice(index,amount) удаляет несколько элементов
fruits.splice(2,2)
console.log(fruits)

//for in
for(let index in fruits){
    document.write(`<h1>${fruits[index]}</h1>`)
}
//arr.length длина массива
console.log(fruits.length)
//for of
for(let item of fruits){
    document.write(`<h1>${item}</h1>`)
}

let images = [
    'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/3041110/pexels-photo-3041110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

document.write('<div class="container">')
for(let i in images){
    document.write(`
        <div class="item">
            <img src="${images[i]}" alt="">
        </div>
    `)
}
document.write('</div>')

//2
let array = [-10,-2,-3,-5,-7,-9,1]
let max = array[0]
for(let i in array){
    if(max<array[i] && array[i]<0){
        max=array[i]
    }
}
console.log(max, array.indexOf(max))

//5
let numbers = []

for(let i=0; i<20;i++){
    numbers.push(Math.floor(Math.random()*-5)+4)
}

console.log(numbers)

let counterNeg=0
let counterPos=0
let counterZero=0

for(let i in numbers){
    if(numbers[i]<0){
        counterNeg++
    }else if(numbers[i]>0){
        counterPos++
    }else{
        counterZero++
    }
}
console.log(counterNeg,counterPos,counterZero)