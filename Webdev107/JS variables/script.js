//Способ вывода
// alert("Hello world!")
// confirm("Text")
document.write("<h1>Hello world!</h1>")
console.log("Hello world!")

// Способ ввода
//prompt("Enter something")

// var, let, const
console.log(number)
var number = 10
number = 5
console.log(number)

// console.log(num1)
let num1 = 5
num1 = 10
console.log(num1)

const num2 = 20
// num2 = 6
console.log(num2)


//let number1 = parseInt(prompt("Enter number"))
// let number1 = parseFloat(prompt("Enter number"))
// let number1 = Number(prompt("Enter number"))
let number1 = 20
let number2 = 30

document.write("Number1("+number1+")+Number2("+number2+")="+(number1+number2))
document.write("<br>")
document.write(`<p>${number1}+${number2}=${number1+number2}</p>`)
document.write(`<p>${number1}-${number2}=${number1-number2}</p>`)
document.write(`<p>${number1}*${number2}=${number1*number2}</p>`)
document.write(`<p>${number1}/${number2}=${number1/number2}</p>`)

let number3 = 25

document.write(`<p>Math.sqrt(${number3})=${Math.sqrt(number3)}</p>`)


let hours = +(prompt("Enter an hour"))

document.write(`<h1>In ${hours} hours there are ${hours*60*60} seconds`)