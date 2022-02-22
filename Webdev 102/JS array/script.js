//var arr = [1,2,3,4,5]
//var array = new Array()
//array = [12,34,56,23,12]
let numbers = [1,2,3,4,5,6,7]
console.log(numbers)
console.log(numbers.length)
numbers.push(8)
console.log(numbers)
numbers.pop()
console.log(numbers)
numbers.shift()
console.log(numbers)
numbers.unshift(1)
console.log(numbers)
console.log(numbers.indexOf(5))

let numbers2 = [4,5,2,3,6,4,1,10]
console.log(numbers2.sort(function(a,b){return a - b}))

let images = [
    'https://i.pinimg.com/originals/35/82/21/358221b85dc0c666cbd6bf4961a260db.jpg',
    'https://i.pinimg.com/originals/6a/8b/50/6a8b50ac0aa0e64f224bcee2f0afbd66.jpg',
    'https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/',
    'https://resi.ze-robot.com/dl/4k/4k-desktop-wallpaper.-1920%C3%971200.jpg'
]

for(let i=0;i<images.length;i++){
    document.write(`
        <img src="${images[i]}">
    `)
}

let students = [
    ['Bakytzhan', 30, 185,'male'],
    ['Diana', 20, 165, 'female'],
    ['Yedil', 25, 167, 'male']
]

document.write('<table border="1">')
document.write(`
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Height</th>
        <th>Gender</th>
    </tr>
`)
for(let i=0;i<students.length;i++){
    document.write('<tr>')
    for(let j=0;j<students[i].length;j++){
        document.write(`
            <td>${students[i][j]}</td>
        `)
    }
    document.write('</tr>')
}
document.write('</table>')

//В массиве, содержащем положительные и отрицательные целые числа, вычислить сумму четных положительных элементов.
let numbers3 = [-100,2,-3,4,-4,3,5,-5,7,-6,6]
//for in 
//for(let index in array)
let sum = 0
for(let index in numbers3){
    if(numbers3[index]>0 && numbers3[index]%2==0){
        sum+=numbers3[index]
        //sum=sum+numbers3[index]
    }
}
document.write(`<h1>Sum of array: ${sum}</h1>`)

let maxNeg = numbers3[0]
//for of
for(let item of numbers3){
    if(item<0){
        if(maxNeg<item){
            maxNeg=item
        }
    }
}
document.write(`<h1>${maxNeg}</h1>`)