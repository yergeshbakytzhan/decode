document.write('<h1>Hello world!</h1>')
console.log("Hello world!")


// prompt("Enter number")

//var let const

var number = 5
document.write(`<h1>${number}</h1>`)
let number2 = 7
document.write(`<h1>${number2}</h1>`)
number2 = 10
document.write(`<h1>${number2}</h1>`)
const number3 = 20
document.write(`<h1>${number3}</h1>`)

document.write('<h1>'+number+', '+number2+', '+number3+'</h1>')

let num1 = 20
//let num2 = parseInt(prompt("Enter number"))
//let num2 = parseFloat(prompt("Enter number"))
//let num2 = Number(prompt("Enter number"))
//let num2 = +(prompt("Enter number"))
let num2 = 20
document.write(`<h1>${num1}+${num2}=${num1+num2}</h1>`)
document.write(`<h1>${num1}-${num2}=${num1-num2}</h1>`)
document.write(`<h1>${num1}*${num2}=${num1*num2}</h1>`)
document.write(`<h1>${num1}/${num2}=${num1/num2}</h1>`)

let num3 = 15
let num4 = 3
document.write(`<h1>Math.pow(${num3},${num4})=${Math.pow(num3,num4)}</h1>`)
let num5 = +(prompt("Enter a number"))
document.write(`<h1>Math.sqrt(${num5})=${Math.sqrt(num5)}</h1>`)

document.write('<h1>'+num3+'is bigger than'+num4+'</h1>')
