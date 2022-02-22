const images = [
    'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const slideImg = document.querySelector(".slide-img")
const slideDots = document.querySelector(".slide-dots")

let outputDots = ''

let slideIndex = 0

for(let i=0; i<images.length;i++){
    outputDots+= `<p class="dot" onclick="dotSlide(${i})"></p>`
}
slideDots.innerHTML = outputDots

showSlide()

function nextSlide(n){
    slideIndex += n
    showSlide()
    dotSlide(slideIndex)
}

function showSlide(){
    if(slideIndex>=images.length){
        slideIndex=0
    }
    if(slideIndex<0){
        slideIndex = images.length-1
    }
    slideImg.innerHTML = `<img src="${images[slideIndex]}" alt="" class="slide-img fade">`
}
function dotSlide(n){
    const dots = document.querySelectorAll(".dot")
    dots[0].classList.add('active')
    for(let i=0;i<dots.length;i++){
        dots[i].classList.remove('active')
    }
    dots[n].classList.add('active')
    slideIndex=n
    showSlide()
}