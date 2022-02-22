let number = 5.5

document.write(`<h1>Math.floor(${number})=${Math.floor(number)}</h1>`)
document.write(`<h1>Math.ceil(${number})=${Math.ceil(number)}</h1>`)
document.write(`<h1>Math.round(${number})=${Math.round(number)}</h1>`)
document.write('<hr>')

let random = Math.random()

document.write(`<h1>Math.random()=${random}</h1>`)
document.write(`<h1>Math.random()*10=${Math.floor(random*10)}</h1>`)
document.write(`<h1>Math.random()*100=${Math.floor(random*100)}</h1>`)
document.write('<hr>')

//if(condition){ code.. }
let username = 'decode'
username = username.toLowerCase()
if(username==='decode'){
    document.write(`<h1>Welcome, ${username}!</h1>`)
}else{
    document.write(`<h1>Invalid username!</h1>`)
}

let num1 = Math.floor(Math.random()*10)
let num2 = Math.floor(Math.random()*10)

if(num1>num2){
    document.write(`<h1> ${num1} is greater than ${num2}</h1>`)
}else if(num1==num2){
    document.write(`<h1>They are equal!</h1>`)
}else{
    document.write(`<h1> ${num2} is greater than ${num1}</h1>`)
}

let grade = 100

if(grade<=100 && grade>=90){
    document.write('<h1>Your grade is A</h1>')
}else if(grade<=89 && grade>=75){
    document.write('<h1>Your grade is B</h1>')
}else if(grade<=74 && grade>=60){
    document.write('<h1>Your grade is C</h1>')
}else if(grade<=59 && grade>=50){
    document.write('<h1>Your grade is D</h1>')
}else if(grade<=49 && grade>=0){
    document.write('<h1>Your grade is F</h1>')
}else{
    document.write('<h1>Invalid input!</h1>')
}

let grade1 = prompt("Enter your grade")

switch(grade1.toUpperCase()){
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
        document.write('<h1>Invalid input!</h1>')
        break
}
