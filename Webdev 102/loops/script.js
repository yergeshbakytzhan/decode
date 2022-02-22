// while(condition){ body.. }
var username = 'decode'
let attempt = 0
let fail = false

while(username!='decode'){
    attempt+=1
    //attempt = attempt + 1
    if(attempt === 3){
        fail = true
        break
    }
}
if(fail){
    document.write(`<h3>Failed: ${attempt} times</h3>`)
}else{
    document.write(`<h3>Welcome ${username}!</h3>`)
}
let number = 0

while(number<5){
    document.write(`<h3>Iteration ${number}!</h3>`)
    number++
}
document.write('<hr>')

let img1 = 'https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg'
let counter = 0

document.write('<div class="block">')

while(counter<6){
    document.write('<div class="block-member">')
    document.write(`<img src="${img1}">`)
    document.write('</div>')
    counter++
}

document.write('</div>')
document.write('<hr>')
//for(start;end;action){body..}
let sum1 = 0
let sum2 = 0
for(let i=1;i<=5;i++){
    if(i%2==0){
        sum1 = sum1+i
    }else{
        sum2 = sum2+i
    }
}
document.write(`<h1>Even numbers' sum: ${sum1}`)
document.write(`<h1>Odd numbers' sum: ${sum2}`)

document.write(`<hr>`)

let img2='https://cdn.pixabay.com/photo/2017/02/16/19/47/bokeh-2072271__340.jpg'


document.write('<div class="block">')
for(let i=0; i<64;i++){
    if(i%2==0){
        document.write('<div class="block-member">')
        document.write(`<img src="${img1}">`)
        document.write('</div>')
    }else{
        document.write('<div class="block-member">')
        document.write(`<img src="${img2}">`)
        document.write('</div>')
    }
}
document.write('</div>')
//Вывести на экран фигуру из звездочек:

for(let i=0;i<4;i++){
    document.write('*')
   
    for(let j=0;j<7;j++){
        document.write('*')
    }
    document.write('<br>')

}
document.write('<hr>')
//Вывести на экран ряд чисел 1001,  1004,  1007,  ... 1025

for(let i=1001;i<=1025;i+=3){
    document.write(i+' ')
}
document.write('<hr>')
// Необходимо суммировать все нечетные целые числа в диапазоне, который введёт пользователь

let num = parseInt(prompt('Enter number:'))
let summary = 0
for(let i=0;i<num;i++){
    if(i%2!=0){
        summary = summary+i
    }
}
document.write(`The sum of odd numbers are ${summary}`)
document.write('<hr>')

// Посчитать четные и нечетные цифры введенного натурального числа. Например, если введено число 34560, то у него 3 четные цифры (4, 6 и 0) и 2 нечетные (3 и 5)
let num1 = parseInt(prompt('Enter number:'))

let counterEven = 0
let counterOdd = 0

for(let i=1;i<=num1;i++){
    if(i%2==0){
        counterEven++
    }else{
        counterOdd++
    }
}
document.write(`<h1>Even numbers: ${counterEven}</h1>`)
document.write(`<h1>Odd numbers: ${counterOdd}</h1>`)