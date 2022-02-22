//document.getElementById('h1-text')  //1 элемент
//document.getElementsByTagName       //массив из объектов
//document.getElementsByClassName     //массив из объектов

let h1Text = document.querySelector('#h1-text')
// document.getElementById('h1-text').innerText = 'Hello world! <a href="#">Click</a>'
h1Text.innerHTML = 'Hello world! <a href="#">Click</a>'
h1Text.style.color = 'red'

console.log(h1Text.classList)

h1Text.classList.add('h1-text')
h1Text.className += ' active'
h1Text.classList.remove('active')
let qulItems = document.querySelectorAll('.ul-items')
qulItems[2].innerHTML = 'Third Item'
let ulItems = document.getElementsByClassName('ul-items')
ulItems[1].innerHTML = 'Second Item'
console.log(qulItems,ulItems)