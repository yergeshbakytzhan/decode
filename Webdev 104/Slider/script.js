const images = [
    'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const slideImg = document.querySelector('.slide-img')

let slideIndex = 0

showSlide()
function nextSlide(n){
    slideIndex+=n
    showSlide()
}

function showSlide(){
    if(slideIndex>=images.length){
        slideIndex=0
    }
    if(slideIndex<0){
        slideIndex=images.length-1
    }
    slideImg.innerHTML = `<img src="${images[slideIndex]}" alt="" class="slide-img fade">`
}