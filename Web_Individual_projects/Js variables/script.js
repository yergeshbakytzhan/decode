document.write('<h1>Hello world</h1>')
document.write(`
    <h1>Привет</h1>
    <h2>Привет</h2>
    <h3>Привет</h3>
    <h4>Привет</h4>
    <h5>Привет</h5>
    <h6>Привет</h6>
`)
// alert('Enter this link <a href="https://youtube.com">Click</a>')

//var/let/const

document.write('<p>My name is '+name+'</p>')



document.write('<p>My name is '+name+'. Hello world!</p>')
document.write(`<p>My name is ${name}</p>`)

var name = 'Bakytzhan'


let username = 'decode'

document.write(`<p>Hello, ${username}</p>`)
document.write('<hr>')

//Arithmetic equations
let number = 80

number = 50
document.write(`<p>10+${number}=${10+number}</p>`)
document.write(`<p>10-${number}=${10-number}</p>`)
document.write(`<p>10*${number}=${10*number}</p>`)
document.write(`<p>10/${number}=${10/number}</p>`)


const num1 = 90

document.write(`<p>10+${num1}=${10+num1}</p>`)
document.write(`<p>10-${num1}=${10-num1}</p>`)
document.write(`<p>10*${num1}=${10*num1}</p>`)
document.write(`<p>10/${num1}=${10/num1}</p>`)

let num2 = 100
let numPow = 4

document.write(`<p>Math.pow(${num2},${numPow})=${Math.pow(num2,numPow)}`)

num2 = 7
numPow = 3
document.write(`<p>Math.pow(${num2},${numPow})=${Math.pow(num2,numPow)}`)

let numPow2 = +(prompt('Enter number powered 2'))

document.write(`<p>Math.sqrt(${numPow2})=${Math.sqrt(numPow2)}`)