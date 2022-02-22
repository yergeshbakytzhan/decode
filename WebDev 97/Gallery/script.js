const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg'
]

const allImagesDiv = document.querySelector('#all-images')
const modal = document.getElementById('modal')
const modalImg = document.getElementById('modal-img')

// images.forEach((src, i)=>{
//     console.log(src, i)
// })

// images.map((src, i)=>{
//     console.log('Map',src, i)
// })


let outImgs = ''

images.forEach((src,i)=>{
    outImgs += `<img src="${src}" class = "img-item" onclick="showImg(${i})">`
})

allImagesDiv.innerHTML = outImgs


function toggleModal(action){
    if(action == 'open'){
        modal.style.display = 'flex'
    }else{
        modal.style.display = 'none'
    }
}

function showImg(imgIndex){
    modalImg.src = images[imgIndex]
    toggleModal('open')
}

function closeModal(){
    modal.style.display = 'none'
}