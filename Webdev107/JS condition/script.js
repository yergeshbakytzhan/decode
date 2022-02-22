//if(condition){ code.. }

let username = 'decode'

if(username.toLowerCase()==='decode'){
    document.write(`<h1>Welcome, ${username}!</h1>`)
}else{
    document.write('<h1>Invalid username!</h1>')
}

let grade = 90

if(grade<=100 && grade>=90){
    document.write(`<h1>Your grade is ${grade}, excellent!</h1>`)
}else if(grade<=89 && grade>=75){
    document.write(`<h1>Your grade is ${grade}, good!</h1>`)
}else if(grade<=74 && grade>=60){
    document.write(`<h1>Your grade is ${grade}, not enough!</h1>`)
}else if(grade<=59 && grade>=50){
    document.write(`<h1>Your grade is ${grade}, bad!</h1>`)
}else if(grade<50 && grade>=0){
    document.write(`<h1>Your grade is ${grade}, FOOL!</h1>`)
}else{
    document.write(`<h1>Invalid insertion!</h1>`)
}


let grade1 = 'a'

switch(grade1.toUpperCase()){
    case 'A':
        document.write('<p>Excellent!</p>')
        break
    case 'B':
        document.write('<p>Good!</p>')
        break 
    case 'C':
        document.write('<p>Not so good!</p>')
        break
    case 'D':
        document.write('<p>Bad!</p>')
        break
    case 'F':
        document.write('<p>Fool!</p>')
        break
    default:
        document.write('<p>Invalid insertion!</p>')
        break
} 

let username1 = 'hello'

console.log(username1==='decode'?'Welcome':'Incorrect')


//2
let a = 20
let b = 9

if(a%b===0){
    document.write("<h1>Делится</h1>")
}else{
    document.write("<h1>Не делится</h1>")
}


//3

let c = 20
let d = -1

if(c>0 && d>0){
    console.log(c+d)
}else{
    console.log("Не выполняется")
}