//function maxArray(){ code.. }
//maxArray()

function square(a){
    return a*a
}
console.log(square(5))

let numbers = [-1,10,5,20,15,4,-4,-10,-6,-7,7]
elementsArray(numbers)
function elementsArray(arr){
    let sum = 0
    let max = arr[0]
    let min = arr[0]
    for(let item of arr){
        if(item>max){
            max = item
        }
        if(item<min){
            min=item
        }
        sum+=item
    }
    document.write(`<h1>Max of array: ${max}</h1>`)
    document.write(`<h1>Min of array: ${min}</h1>`)
    document.write(`<h1>Sum of array: ${sum}</h1>`)
    document.write(`<h1>Avg of array: ${sum/arr.length}</h1>`)
}


let a = 7
let b = 10
function replace(c , d){
    let e = c
    c = d
    d = e
    console.log(c,d)
}
replace(a, b)

let str = 'hello world'
let counter = 0
for(let i=0;i<str.length;i++){
    if(str.charAt(i)==='o'){
        counter++
    }
}
console.log(counter)