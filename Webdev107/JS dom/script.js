let h1 = document.getElementById('text')
console.log(h1)
let h1s = document.getElementsByTagName('h1')
console.log(h1s)
let elements = document.getElementsByClassName('text')
console.log(elements)
let h1_2 = document.querySelector('#text')
console.log(h1_2)
let elements_2 = document.querySelectorAll('.text')
console.log(elements_2)
let paragraph = document.createElement('p')
console.log(paragraph)
// document.body.appendChild(paragraph)
document.body.prepend(paragraph)
paragraph.innerHTML = 'Click'

paragraph.setAttribute('class','block')
console.log(paragraph.getAttribute('class'))
console.log(paragraph.hasAttribute('id'))
paragraph.removeAttribute('class')
console.log(paragraph.hasAttribute('class'))
paragraph.style.color = 'red'
paragraph.style.fontSize = '20px'
paragraph.style.display = 'inline'
console.log(paragraph.classList)
paragraph.classList.add('active')
console.log(paragraph.classList)
paragraph.classList.remove('active')
paragraph.className = 'active'
paragraph.className += ' block'