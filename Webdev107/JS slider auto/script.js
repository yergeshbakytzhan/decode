const images = [
    'https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/919606/pexels-photo-919606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1090972/pexels-photo-1090972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]
const slideImg = document.querySelector('.slide-img')

let slideIndex = 0
showSlide()

function showSlide(){
    if(slideIndex>=images.length){
        slideIndex = 0
    }
    if(slideIndex<0){
        slideIndex = images.length-1
    }

    slideImg.innerHTML = `<img src="${images[slideIndex]}" alt="" class="slide-img fade">`
    slideIndex++
    setTimeout(showSlide, 1500)
}