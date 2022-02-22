//document.getElementById('h1-text').innerHTML = 'Hello world!<a href="#">CLick me</a>'
let h1Text = document.getElementById('h1-text')
h1Text.innerHTML = 'Hello world!<a href="#">CLick me</a>'

h1Text.className += ' active'
h1Text.classList.remove('active')
h1Text.classList.add('go-text')
console.log(h1Text.classList)
console.log(h1Text.className)
let h1text = document.querySelector('#h1-text')
h1text.innerHTML += ' <button>Submit</button>'
console.log(document.querySelectorAll('.ul-item'))
let ulItems = document.querySelectorAll('.ul-item')
for(let i=0;i<ulItems.length;i++){
    ulItems[i].innerHTML = 'Second Item'
}
ulItems[2].innerHTML = 'Third Item'