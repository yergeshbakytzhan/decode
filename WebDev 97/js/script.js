// alert("Hello world!")
console.log("Hello world")
document.write("<h3>Hello world!</h3>")
var myLetter = 'Brrrr'
document.write("<h2>Hello world!"+myLetter+"</h2>")

var myWord = 'My name is Bakytzhan'
document.write(`<h2>Hello world!${myWord}</h2>`)
document.writeln(myWord)
// var myStr = prompt()
// document.write(`<h2>My name is ${myNumber}</h2>`)

// var/let/const 1232/Str/true/false
// var myNumber = prompt("Enter age")
// document.writeln(`My age is ${myNumber}`)


let num1 = 1.5
document.writeln('\n')
document.writeln(num1)

const num2 = 1234

document.write(num2)
document.write('<hr>')

// Arithmetic operator  +,-,*,/,%
document.write(`<p>10+20=${10+20}</p>`)
document.write(`<p>100-20-100=${100-20-100}</p>`)
document.write(`<p>100*100=${100*100}</p>`)
document.write(`<p>100/10=${100/10}</p>`)
document.write(`<p>109%2=${109%2}</p>`)

// let number1 = parseFloat(prompt('Введите целое число'))
// let number1 = parseInt(prompt('Введите целое число'))
// let number1 = Number(prompt('Введите целое число'))
// let number1 = +(prompt('Введите целое число'))
// document.write(`<p>10+${number1}=${10+number1}</p>`)
// document.write(`<p>100-${number1}=${100-number1}</p>`)
// document.write(`<p>100*${number1}=${100*number1}</p>`)
// document.write(`<p>100/${number1}=${100/number1}</p>`)
// document.write(`<p>109%${number1}=${109%number1}</p>`)

// let power = Number(prompt('Укажите степень'))
// let number2 = Number(prompt('Укажите число'))

// document.write(`<p>Math.pow(${number2},${power})=${Math.pow(number2,power)}</p>`)

let numSqr = prompt('Укажите числа в 2 степени')
document.write(`Math.sqrt(${numSqr})=${Math.sqrt(numSqr)}`)