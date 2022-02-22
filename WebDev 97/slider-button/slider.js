const images = [
    'https://i.pinimg.com/originals/35/82/21/358221b85dc0c666cbd6bf4961a260db.jpg',
    'https://resi.ze-robot.com/dl/ul/ultraviolet-4k-wallpaper-1600%C3%971200.jpg',
    'https://soft.sibnet.ru/data/screenshot/Hyperstars-3D-Moving-Wallpaper.jpg',
    'https://1001programs.ru/wp-content/uploads/2020/08/wallpaper-engine.jpg'
]

const slideImg = document.querySelector('.slide-img')
const slideDots = document.querySelector('.slide-dots')

let slideIndex = 0

let outputDots = ''

for(let i=0; i<images.length;i++){
    outputDots += `<p class="dot" onclick="dotSlide(${i})"></p>`
}
slideDots.innerHTML = outputDots

showSlide()

function nextSlide(n){
    slideIndex+=n
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
    const dots = document.querySelectorAll('.dot')
    dots[0].classList.add('active')
    for(let i=0; i<dots.length;i++){
        dots[i].classList.remove('active')
    }
    dots[n].classList.add('active')
    slideIndex=n
    showSlide()
}