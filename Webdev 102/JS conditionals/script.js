let number = 5.7
document.write(`<h1>Math.floor(${number})=${Math.floor(number)}</h1>`)
document.write(`<h1>Math.ceil(${number})=${Math.ceil(number)}</h1>`)
document.write(`<h1>Math.round(${number})=${Math.round(number)}</h1>`)

let number2 = Math.random()
//0-1
document.write(`<h1>Math.random()=${Math.floor(number2*100)}</h1>`)
//if(condition){ code... }

let username = 'decode'

if(username.toLowerCase()=='decode'){
    document.write(`<h1>Welcome, ${username}!</h1>`)
}else{
    document.write('<h1>Invalid username!</h1>')
}

let num1 = Math.floor(Math.random()*10)
let num2 = Math.floor(Math.random()*10)

if(num1>num2){
    document.write(`<h1>${num1} greater than ${num2}</h1>`)
}else if(num1==num2){
    document.write(`<h1>${num1} equals to ${num2}</h1>`)
}else{
    document.write(`<h1>${num2} greater than ${num1}</h1>`)
}

let grade = 90

if(grade>=90 && grade<=100){
    document.write(`<h1>Your grade is A(${grade})</h1>`)
}else if(grade>=75 && grade<90){
    document.write(`<h1>Your grade is B(${grade})</h1>`)
}else if(grade>=60 && grade<75){
    document.write(`<h1>Your grade is C(${grade})</h1>`)
}else if(grade>=50 && grade<60){
    document.write(`<h1>Your grade is D(${grade})</h1>`)
}else if(grade>=0 && grade<50){
    document.write(`<h1>Your grade is F(${grade})</h1>`)
}else{
    document.write(`<h1>There is no such grade (${grade})</h1>`)
}

//and, or
//&& , ||

let bool1 = true
let bool2 = false

if(bool1 && (bool2||bool1) && bool2){
    document.write('<h1>Correct</h1>')
}else{
    document.write('<h1>Incorrect</h1>')
}

let grade2 = 'A'
grade2=grade2.toUpperCase()
switch(grade2){
    case 'A':
        document.write('<h1>Great!</h1>')
        break
    case 'B':
        document.write('<h1>Good!</h1>')
        break
    case 'C':
        document.write('<h1>Not bad!</h1>')
        break
    case 'D':
        document.write('<h1>Bad!</h1>')
        break
    case 'F':
        document.write('<h1>Fool!</h1>')
        break
    default:
        document.write('<h1>Incorrect grade!</h1>')
        break
}

let a = 10
let b = 5

if(a%b==0){
    document.write('<h1>Делиться!</h1>')
}else{
    document.write(`<h1>Не делиться, остаток ${a%b}</h1>`)
}