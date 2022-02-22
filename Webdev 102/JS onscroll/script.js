let elements = document.querySelectorAll(".animation")
window.addEventListener('scroll', scroll)
function scroll(){
    for(let i=0;i<elements.length;i++){
        const element = elements[i]
        console.log(element)
        const heightOfElement = element.offsetHeight
        const elementOffset = getOffsetSum(element).top
        const animationStart = 4
        let elementPoint = window.innerHeight - heightOfElement/animationStart
        if((pageYOffset>elementOffset-elementPoint)&& pageYOffset<(elementOffset+heightOfElement)){
            element.classList.add('active')
        }
    }
}
function getOffsetSum(elem){
    var top=0, left=0
    while(elem){
        top=top+parseFloat(elem.offsetTop)
        left = left+parseFloat(elem.offsetLeft)
        elem = elem.offsetParent
    }
    return {top: Math.round(top), left: Math.round(left)}
}
setTimeout(scroll,400)