//ДЗ 22

function numberToArray(arr){
    let array = []
    let endArray = []
    for(let i=0;i<arr.length;i++){
        array = arr[i].toString().split("")
        array = array.map(x=>parseInt(x))
        let sum = 0
        for(let j=0;j<array.length;j++){
            sum+=array[j]
        }
        endArray.push(sum)
    }
    console.log(endArray)
}
let array = [12,43,123,44,22]
numberToArray(array)

//JS DOM

// let h1 = document.getElementById("text")
// console.log(h1)
// let h1text = document.getElementsByClassName("text")
// console.log(h1text)
let h1Arr = document.getElementsByTagName("h1")
console.log(h1Arr)
let h1 = document.querySelector("#text")
console.log(h1)
let div = document.createElement("div")
console.log(div)
// document.body.appendChild(div)
// document.body.prepend(div)
document.body.append(div)
// h1.innerHTML += '<a href="">Click</a>'
// h1.innerText += '<a href="">Click</a>'
h1.setAttribute("class","block")
console.log(h1.getAttribute("class"))
h1.removeAttribute("class")
console.log(h1.hasAttribute("class"))
div.style.width = "500px"
div.style.height = "500px"
div.style.backgroundColor = "red"
div.classList.add("block")
div.className += " active"
console.log(div.classList)