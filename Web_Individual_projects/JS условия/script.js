let number = 25.4


document.write(`<h3>Math.floor(${number})=${Math.floor(number)}</h3>`)
document.write(`<h3>Math.ceil(${number})=${Math.ceil(number)}</h3>`)
document.write(`<h3>Math.round(${number})=${Math.round(number)}</h3>`)


let randomNum = Math.random()

document.write(`<h3>Math.random()=${Math.floor(randomNum*10)}</h3>`)
document.write(`<h3>Math.random()=${Math.floor(randomNum*100)}</h3>`)
document.write(`<h3>Math.random()=${Math.floor(randomNum*1000)}</h3>`)

document.write('<hr>')

//if(condition){ code.. }else{ code.. }

let username = 'Ali'

if(username.toLowerCase() == 'ali'){
    document.write(`<p>Welcome, ${username}!</p>`)
}else{
    document.write(`<p>Invalid username, ${username}!</p>`)
}

let num1 = Math.floor(Math.random()*10)
let num2 = Math.floor(Math.random()*10)

if(num1>num2){
    document.write(`Number random ${num1} is bigger than number ${num2}`)
}else{
    document.write(`Number random ${num2} is bigger than number ${num1}`)
}

let grade = 90

if(grade<=100 && grade>=90){
    document.write('<p>Your grade is A</p>')
}else if(grade<=89 && grade>=75){
    document.write('<p>Your grade is B</p>')
}else if(grade<=74 && grade>=60){
    document.write('<p>Your grade is C</p>')
}else if(grade<=59 && grade>=50){
    document.write('<p>Your grade is D</p>')
}else if(grade>100){
    document.write('<p>Invalid grade!</p>')
}else{
    document.write('<p>Your grade is F</p>')
}


// and, or
// &&, ||

let bool1 = true
let bool2 = false

if(bool1 && bool2 && (bool1||bool2)){
    document.write('<p>Correct!</p>')
}else{
    document.write('<p>Incorrect!</p>')
}
//Switch(value){ case }
let grade1 = prompt('Enter your grade(A,B,C,D,F):')
grade1 = grade1.toUpperCase()
switch(grade1){
    case 'A':
        document.write('<p>Great!</p>')
        break
    case 'B':
        document.write('<p>Good!</p>')
        break
    case 'C':
        document.write('<p>Not bad!</p>')
        break
    case 'D':
        document.write('<p>Bad!</p>')
        break
    case 'F':
        document.write('<p>Fool!</p>')
        break
    default:
        document.write('<p>Invalid grade!</p>')
        break
}