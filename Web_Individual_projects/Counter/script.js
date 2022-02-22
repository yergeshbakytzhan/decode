const counters = document.querySelectorAll(".count")
counters.forEach((counter)=>{
    counter.innerText = '0'
    function updateCounter(){
        const num = +counter.getAttribute("data-num")
        const output = +counter.innerText
        const increment = num/100
        if(num>output){
            counter.innerText = `${Math.round(output+increment)}`
            setTimeout(updateCounter, 30)
        }else{
            counter.innerText = num
        }
    }
    updateCounter()
})