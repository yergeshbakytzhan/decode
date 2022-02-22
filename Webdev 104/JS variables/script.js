//alert("Hello world!")
//confirm("Hello world")
document.write("<h1>Hello world!</h1>")
document.write('<img src="https://i.pinimg.com/originals/f7/ae/e8/f7aee8753832af613b63e51d5f07011a.jpg">')
//prompt("Enter your name")
console.log(number)
//var, let , const
var number = 10
console.log(number)


let number1 = 20
console.log(number1)
number1 = 30
console.log(number1)
const number2 = 15
console.log(number2)

document.write('<h1>Num1='+number1+', num2='+number2+'</h1>')
document.write(`<h1>Num1=${number1}, num2=${number2}</h1>`)

document.write('<hr>')

let num1 = 20
//let num2 = parseInt(prompt("Enter any number"))
//let num2 = parseFloat(prompt("Enter any number"))
//let num2 = Number(prompt("Enter any number"))
let num2 = 10

document.write(`<p>Num1+num2=${num1}+${num2}=${num1+num2}</p>`)
document.write(`<p>Num1-num2=${num1}-${num2}=${num1-num2}</p>`)
document.write(`<p>Num1*num2=${num1}*${num2}=${num1*num2}</p>`)
document.write(`<p>Num1/num2=${num1}/${num2}=${num1/num2}</p>`)
document.write(`<h1>Math.pow(${num2}, 3)=${Math.pow(num2,3)}</h1>`)
document.write(`<h1>Math.sqrt(${num2})=${Math.sqrt(num2)}</h1>`)

document.write('<hr>')

let hours = +(prompt("Enter an hour"))

document.write(`<h1>${hours} hours equals to ${hours*3600} seconds</h1>`)