let btn = document.querySelector("#scroll")
function scrollDown(){
    let coordinations = document.documentElement.clientHeight
    function scroll(){
        if(window.pageYOffset<coordinations){
            window.scrollBy(0, 10)
            setTimeout(scroll, 0)
        }
    }
    scroll()
}