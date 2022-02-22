let button = document.getElementById('button')
let block = document.querySelector('.block')

button.addEventListener('click',()=>{
    block.classList.toggle('active')
})