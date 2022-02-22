// let array = [1,'Bakytzhan', 25.5,...]
let fruits = ['Apple','Banana','Pineapple','Cherry']
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.push('Blueberry')
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.unshift('Strawberry')
console.log(fruits)

for(let i=0;i<fruits.length;i++){
    document.write(`<h1>${fruits[i]}</h1>`)
}
//for in
for(let i in fruits){
    document.write(`<h1>${fruits[i]}</h1>`)
}
//for of
for(let fruit of fruits){
    document.write(`<h1>${fruit}</h1>`)
}

let images = [
    'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]


document.write('<div class="images">')

for(let item of images){
    document.write(`
        <div class="item">
            <img src="${item}">
        </div>
    `)
}
document.write('</div>')

let numbers = []

for(let i=0; i<20;i++){
    numbers.push(Math.floor(Math.random()*-5)+4)
}

console.log(numbers)

let counterNeg=0
let counterPos=0
let counterZero=0

for(let i in numbers){
    if(numbers[i]<0){
        counterNeg++
    }else if(numbers[i]>0){
        counterPos++
    }else{
        counterZero++
    }
}
document.write(`<ul>
                    <li>${counterNeg}</li>
                    <li>${counterPos}</li>
                    <li>${counterZero}</li>
                </ul>
`)

let nums = [-1,20,10,-5,-8,9,4,3,6,-10]

let max = nums[0]
let min = nums[0]
let sum=0
let avg=0

for(let i in nums){
    if(max<nums[i]){
        max=nums[i]
    }
    if(min>nums[i]){
        min=nums[i]
    }
    sum+=nums[i]
    //sum=sum+nums[i]
}
document.write(`
    <h1>Max of array is ${max}</h1>
    <h1>Min of array is ${min}</h1>
    <h1>Sum of array is ${sum}</h1>
    <h1>Average of array is ${avg=sum/nums.length}</h1>
`)